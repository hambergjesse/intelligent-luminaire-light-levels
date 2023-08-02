import { useState } from "react";
import { LuminaireSlider } from "./LuminaireSlider";

export const LuminaireControl = () => {
  const controlPanelStyle = {
    display: "flex",
    background: "#ffffff",
    padding: "20px",
    height: "auto",
    width: "300px",
  };

  const [sliderValue, setSliderValue] = useState(100);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  return (
    <section className="controlPanel__wrapper" style={controlPanelStyle}>
      <LuminaireSlider
        title={"Occupied"}
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </section>
  );
};
