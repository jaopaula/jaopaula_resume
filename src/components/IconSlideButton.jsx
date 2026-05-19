const IconSlideButton = ({
  children,
  href,
  onClick,
  fillColor = "#050505",
  className = "",
}) => {
  const Component = href ? "a" : "button";
  const componentProps = href ? { href } : { onClick, type: "button" };

  return (
    <Component
      {...componentProps}
      className={`icon-slide-button ${className}`}
      style={{ "--button-fill": fillColor }}
    >
      <span className="icon-slide-button__content">
        <span className="icon-slide-button__bg" />
        <span className="icon-slide-button__text-wrap">
          <span className="icon-slide-button__text">{children}</span>
        </span>
        <span className="icon-slide-button__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M14.7 5.3a1 1 0 0 0-1.4 1.4L17.58 11H4a1 1 0 1 0 0 2h13.58l-4.28 4.3a1 1 0 0 0 1.4 1.4l6-6a1 1 0 0 0 0-1.4l-6-6Z" />
          </svg>
        </span>
      </span>
    </Component>
  );
};

export default IconSlideButton;
