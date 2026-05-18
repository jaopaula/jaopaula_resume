import { useEffect, useRef } from "react";

const vertexShaderSource = `
  attribute vec2 position;

  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;

  uniform vec2 uResolution;
  uniform float uTime;
  uniform float uNoise;
  uniform float uScan;
  uniform float uScanFreq;
  uniform float uWarp;

  float random(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float valueNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 5; i++) {
      value += amplitude * valueNoise(p);
      p *= 2.04;
      amplitude *= 0.48;
    }

    return value;
  }

  vec4 sigmoid(vec4 x) {
    return 1.0 / (1.0 + exp(-x));
  }

  float organicField(vec2 p, float time) {
    vec4 a = vec4(
      p.x * 2.0,
      p.y * 2.0,
      length(p) * 1.35,
      0.45 + sin(time * 0.31) * 0.18
    );
    vec4 b = vec4(
      sin(p.y * 2.2 + time * 0.37),
      cos(p.x * 1.8 - time * 0.28),
      sin((p.x + p.y) * 1.2 + time * 0.21),
      1.0
    );

    vec4 h1 = sigmoid(mat4(
      vec4( 3.20, -2.10,  1.10, -0.70),
      vec4(-1.40,  2.80, -2.60,  1.10),
      vec4( 2.25,  1.25, -1.50,  2.90),
      vec4(-2.70,  0.90,  2.10, -1.25)
    ) * a + mat4(
      vec4( 1.30, -2.55,  1.90,  0.50),
      vec4( 2.10,  0.70, -1.65, -1.30),
      vec4(-1.80,  1.35,  2.55, -0.45),
      vec4( 0.85, -1.15,  0.70,  2.15)
    ) * b);

    vec4 h2 = sigmoid(mat4(
      vec4( 2.65,  1.95, -2.40,  0.80),
      vec4(-2.35,  2.75,  1.40, -1.90),
      vec4( 1.15, -1.85,  2.95,  2.05),
      vec4(-1.75, -2.20,  0.95,  2.55)
    ) * h1 + vec4(-1.10, 0.35, -0.55, 0.85));

    vec4 h3 = sigmoid(mat4(
      vec4( 3.90, -2.70,  1.60,  0.95),
      vec4(-1.80,  3.20, -3.10,  1.40),
      vec4( 2.40,  0.75,  2.70, -2.50),
      vec4(-3.20,  1.70, -0.80,  2.85)
    ) * h2 + mat4(
      vec4( 1.70, -1.25,  0.60,  2.00),
      vec4(-2.20,  1.60,  2.40, -0.70),
      vec4( 0.90,  2.10, -1.80,  1.30),
      vec4( 2.35, -0.65,  1.10, -2.15)
    ) * h1);

    return dot(h3, vec4(0.38, 0.26, 0.22, 0.14));
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 st = vec2(uv.x, 1.0 - uv.y);
    vec2 p = uv * 2.0 - 1.0;
    p.y *= -1.0;
    p.x *= uResolution.x / uResolution.y;

    float time = uTime * 0.5;
    vec2 warp = vec2(
      sin(p.y * 6.283 + time * 0.50),
      cos(p.x * 6.283 + time * 0.50)
    );
    vec2 q = p + warp * uWarp * 0.42;
    q += vec2(
      fbm(q * 1.25 + vec2(time * 0.10, -time * 0.04)),
      fbm(q * 1.10 + vec2(-time * 0.06, time * 0.08))
    ) * 0.20 - 0.10;

    float fieldA = organicField(q, time);
    float fieldB = organicField(q * 0.78 + vec2(0.42, -0.18), time * 0.83 + 2.0);
    float fieldC = fbm(q * 1.55 + vec2(time * 0.07, -time * 0.03));
    float mass = smoothstep(0.34, 0.86, fieldA * 0.66 + fieldB * 0.26 + fieldC * 0.22);

    float waveBoundary =
      0.18 +
      st.x * 0.62 +
      sin(st.x * 4.2 + time * 0.72) * 0.09 +
      sin(st.x * 8.8 - time * 0.44 + fieldA * 1.6) * 0.04;
    float topSheet = 1.0 - smoothstep(waveBoundary - 0.045, waveBoundary + 0.10, st.y);
    float waveEdge = 1.0 - smoothstep(0.0, 0.085, abs(st.y - waveBoundary));
    float waveFalloff = smoothstep(1.02, -0.08, st.x) * smoothstep(0.78, 0.00, st.y);

    float topBand = smoothstep(0.82, 0.00, st.y);
    float leftWeight = smoothstep(1.10, -0.05, st.x);
    float rightAccent = smoothstep(0.76, 0.10, distance(st, vec2(0.74, 0.24)));
    float leftBloom = smoothstep(0.92, 0.04, distance((st - vec2(0.27, 0.18)) * vec2(1.15, 0.82), vec2(0.0)));

    float scanline = sin(gl_FragCoord.y * uScanFreq) * 0.5 + 0.5;
    float grain = random(gl_FragCoord.xy + floor(uTime * 24.0)) - 0.5;
    float microNoise = fbm(q * 28.0 + vec2(-time * 0.9, time * 0.6));

    float waveMask = clamp(
      topSheet * waveFalloff +
      waveEdge * waveFalloff +
      leftBloom * 0.85 +
      mass * topBand * 0.42,
      0.0,
      1.0
    );

    float light =
      topSheet * waveFalloff * (0.72 + fieldC * 0.34) +
      waveEdge * waveFalloff * (0.50 + fieldB * 0.26) +
      mass * topBand * (0.030 + leftWeight * 0.050) +
      leftBloom * 0.12 +
      rightAccent * 0.035;

    light += (microNoise - 0.5) * 0.055 * waveMask;
    light += grain * uNoise * waveMask;

    light *= 1.0 - scanline * scanline * uScan;
    light *= smoothstep(1.02, 0.10, distance(st, vec2(0.28, 0.20)));
    light = clamp(light, 0.0, 0.94);

    vec3 color = vec3(0.012 + light * 0.96);
    gl_FragColor = vec4(color, 1.0);
  }
`;

const createShader = (gl, type, source) => {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
};

const createProgram = (gl) => {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  if (!vertexShader || !fragmentShader) return null;

  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return program;
};

const SpectraNoiseBackground = ({
  noiseIntensity = 0.055,
  scanlineIntensity = 0.012,
  scanlineFrequency = 1.15,
  speed = 0.5,
  warpAmount = 0.22,
  resolutionScale = 0.74,
}) => {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const lastFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const gl =
      canvas.getContext("webgl", {
        alpha: false,
        antialias: false,
        depth: false,
        powerPreference: "low-power",
        preserveDrawingBuffer: false,
        stencil: false,
      }) || canvas.getContext("experimental-webgl");

    if (!gl) {
      canvas.classList.add("noise-canvas-fallback");
      return undefined;
    }

    const program = createProgram(gl);
    if (!program) {
      canvas.classList.add("noise-canvas-fallback");
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 760px)");
    const frameInterval = 1000 / 24;
    const startTime = performance.now();

    const buffer = gl.createBuffer();
    const positionLocation = gl.getAttribLocation(program, "position");
    const uniforms = {
      time: gl.getUniformLocation(program, "uTime"),
      resolution: gl.getUniformLocation(program, "uResolution"),
      noise: gl.getUniformLocation(program, "uNoise"),
      scan: gl.getUniformLocation(program, "uScan"),
      scanFreq: gl.getUniformLocation(program, "uScanFreq"),
      warp: gl.getUniformLocation(program, "uWarp"),
    };

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    let renderWidth = 1;
    let renderHeight = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const scale = mobile.matches ? Math.min(resolutionScale, 0.5) : resolutionScale;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.35) * scale;
      renderWidth = Math.max(1, Math.floor(rect.width * ratio));
      renderHeight = Math.max(1, Math.floor(rect.height * ratio));

      if (canvas.width !== renderWidth || canvas.height !== renderHeight) {
        canvas.width = renderWidth;
        canvas.height = renderHeight;
      }

      gl.viewport(0, 0, renderWidth, renderHeight);
      gl.uniform2f(uniforms.resolution, renderWidth, renderHeight);
    };

    const render = (timestamp = 0) => {
      const elapsed = reduceMotion.matches ? 0 : ((timestamp || startTime) - startTime) / 1000;
      const scan = mobile.matches ? scanlineIntensity * 0.4 : scanlineIntensity;
      const noise = mobile.matches ? noiseIntensity * 0.55 : noiseIntensity;

      gl.useProgram(program);
      gl.uniform1f(uniforms.time, elapsed * speed);
      gl.uniform1f(uniforms.noise, noise);
      gl.uniform1f(uniforms.scan, scan);
      gl.uniform1f(uniforms.scanFreq, scanlineFrequency);
      gl.uniform1f(uniforms.warp, mobile.matches ? warpAmount * 0.5 : warpAmount);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const stop = () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }
    };

    const animate = (timestamp) => {
      if (timestamp - lastFrameRef.current >= frameInterval) {
        lastFrameRef.current = timestamp;
        render(timestamp);
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const start = () => {
      stop();
      resize();
      render(startTime);

      if (!reduceMotion.matches && !mobile.matches && !document.hidden) {
        frameRef.current = window.requestAnimationFrame(animate);
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const observer = new ResizeObserver(start);
    observer.observe(canvas);
    reduceMotion.addEventListener("change", start);
    mobile.addEventListener("change", start);
    document.addEventListener("visibilitychange", handleVisibility);
    start();

    return () => {
      stop();
      observer.disconnect();
      reduceMotion.removeEventListener("change", start);
      mobile.removeEventListener("change", start);
      document.removeEventListener("visibilitychange", handleVisibility);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, [noiseIntensity, scanlineIntensity, scanlineFrequency, speed, warpAmount, resolutionScale]);

  return (
    <div className="spectra-noise" aria-hidden="true">
      <canvas ref={canvasRef} className="noise-canvas" />
      <div className="noise-vignette" />
    </div>
  );
};

export default SpectraNoiseBackground;
