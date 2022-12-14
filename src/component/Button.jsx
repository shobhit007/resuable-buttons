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

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "btn-small";
      case "lg":
        return "btn-large";
      default:
        return null;
    }
  };

  const getColorClass = () => {
    switch (color) {
      case "primary":
        return "btn-primary-color";
      case "secondary":
        return "btn-secondary-color";
      case "danger":
        return "btn-danger-color";
      default:
        return "btn-default-color";
    }
  };

  const getClassName = () => {
    switch (variant) {
      case "outline":
        return `button btn-outline ${disabledShadow && "disabled-shadow"} ${
          disabled && "disabled"
        } ${size && getSizeClass()} ${color && getColorClass()}`;
      case "text":
        return `button btn-text ${disabledShadow && "disabled-shadow"}  ${
          disabled && "disabled"
        } ${size && getSizeClass()} ${color && getColorClass()}`;
      default:
        return `button btn-default ${disabledShadow && "disabled-shadow"}  ${
          disabled && "disabled"
        } ${size && getSizeClass()} ${getColorClass()}`;
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
