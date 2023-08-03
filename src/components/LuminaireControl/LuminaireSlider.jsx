import PropTypes from "prop-types";

// Styling for the LuminaireSlider component
const sliderStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "15px",
};

// Styling for the top section of the LuminaireSlider component
const sliderStyleTop = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
};

// LuminaireSlider component to represent a slider with a title and range input
export const LuminaireSlider = ({ title, value, onChange }) => {
  // Event handler for slider value changes
  const handleSliderChange = (event) => {
    // Parse the new value as an integer and pass it to the onChange function
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return (
    <div className="luminaireSlider__container" style={sliderStyle}>
      {/* Top section with slider title and current value percentage */}
      <div className="luminaireSlider__top" style={sliderStyleTop}>
        <p className="luminaireSlider__container--title">{title}</p>
        <p className="luminaireSlider__container--percentage">{value + "%"}</p>
      </div>
      {/* Bottom section with the range input */}
      <div
        className="luminaireSlider__bottom"
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Range input element representing the slider */}
        <input
          type="range"
          id={title}
          name={title}
          value={value}
          step="5"
          min="0"
          max="100"
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

LuminaireSlider.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
