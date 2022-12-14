import "./button.css";
import React from "react";

function Button(props) {
  let {
    variant,
    disabledShadow = false,
    disabled = false,
    startIcon,
    endIcon,
    size,
    color,
    text = "Default",
    ...others
  } = props;

  const subClassess = (val) => {
    switch (val) {
      case "sm":
        return "btn-small";
      case "lg":
        return "btn-large";
      case "primary":
        return "btn-primary-color";
      case "secondary":
        return "btn-secondary-color";
      case "danger":
        return "btn-danger-color";
      default:
        return null;
    }
  };

  const getClassName = () => {
    switch (variant) {
      case "outline":
        return `button btn-outline ${disabledShadow && "disabled-shadow"} ${
          disabled && "disabled"
        } ${subClassess(size)} ${subClassess(color)}`;
      case "text":
        return `button btn-text ${disabledShadow && "disabled-shadow"}  ${
          disabled && "disabled"
        } ${subClassess(size)} ${subClassess(color)}`;
      default:
        return `button btn-default ${disabledShadow && "disabled-shadow"}  ${
          disabled && "disabled"
        } ${subClassess(color)} ${subClassess(size)}`;
    }
  };
  return (
    <button className={getClassName()} disabled={disabled} {...others}>
      {startIcon && (
        <span className="material-symbols-outlined start-icon">
          {startIcon}
        </span>
      )}
      {text}
      {endIcon && (
        <span className="material-symbols-outlined end-icon">{endIcon}</span>
      )}
    </button>
  );
}

export default Button;
