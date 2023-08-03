import PropTypes from "prop-types";

export const Button = ({ text, onClick, className }) => {
  const handleButtonClick = () => {
    onClick(text);
  };

  return (
    <button onClick={handleButtonClick} className={className}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
