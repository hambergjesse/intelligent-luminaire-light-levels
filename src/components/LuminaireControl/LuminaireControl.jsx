import { useState } from "react";
import { Button } from "../Button/Button";
import { LuminaireSlider } from "./LuminaireSlider";

export const LuminaireControl = () => {
  const controlPanelStyle = {
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
    padding: "20px",
    height: "auto",
    width: "300px",
    gap: "15px",
  };

  /*---------------------------------------------*/

  const [sliderValue, setSliderValue] = useState(100);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  /*---------------------------------------------*/

  const buttonSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
  };

  const handleButtonClick = (text) => {
    console.log(`${text} button clicked`);
  };

  return (
    <section className="controlPanel__wrapper" style={controlPanelStyle}>
      <h1>Edit levels</h1>
      <LuminaireSlider
        title={"Occupied"}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <LuminaireSlider
        title={"Occupied"}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <LuminaireSlider
        title={"Occupied"}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <div style={buttonSectionStyle} className="controlPanel__buttons">
        <Button text="Cancel" onClick={handleButtonClick} disabled={true} />
        <Button text="Apply" onClick={handleButtonClick} disabled={false} />
      </div>
    </section>
  );
};
