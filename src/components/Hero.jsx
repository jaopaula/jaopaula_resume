import IconSlideButton from "./IconSlideButton";

const Hero = () => (
  <section className="hero-section" id="hero">
    <div className="section-shell hero-grid">
      <div className="hero-copy">
        <span className="hero-kicker">
          João de Paula / Ciência de Dados
        </span>
        <h1>
          Dados em decisão.
        </h1>
        <p>
          Ciência de Dados, BI e automação para transformar processos complexos
          em produtos de dados claros, úteis e mensuráveis.
        </p>
        <div className="hero-actions">
          <IconSlideButton href="#cases">
            Ver cases de sucesso
          </IconSlideButton>
          <a className="btn secondary" href="#contato">
            Entrar em contato
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
