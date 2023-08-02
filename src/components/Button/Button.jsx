import PropTypes from "prop-types";

export const Button = ({ text, disabled, onClick }) => {
  const handleButtonClick = () => {
    onClick(text);
  };

  return (
    <button onClick={handleButtonClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
