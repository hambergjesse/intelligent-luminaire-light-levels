import PropTypes from "prop-types";

export const LuminaireSlider = ({ title, value, onChange }) => {
  const sliderStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "15px",
  };

  const sliderStyleTop = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  };

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return (
    <div className="luminaireSlider__container" style={sliderStyle}>
      <div className="luminaireSlider__top" style={sliderStyleTop}>
        <p className="luminaireSlider__container--title">{title}</p>
        <p className="luminaireSlider__container--percentage">{value + "%"}</p>
      </div>
      <div
        className="luminaireSlider__bottom"
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
