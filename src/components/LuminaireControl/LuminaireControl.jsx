import { useState } from "react";
import { Button } from "../Button/Button";
import { LuminaireSlider } from "./LuminaireSlider";

const CONTROL_DEFAULTS = {
  occupied: 80,
  powerSave: 20,
  minimum: 0,
};

const controlPanelStyle = {
  display: "flex",
  flexDirection: "column",
  background: "#ffffff",
  padding: "20px",
  height: "auto",
  width: "300px",
  gap: "15px",
};

const buttonsContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

export const LuminaireControl = () => {
  const [occupiedValue, setOccupiedValue] = useState(CONTROL_DEFAULTS.occupied);
  const [powerSaveValue, setPowerSaveValue] = useState(
    CONTROL_DEFAULTS.powerSave,
  );
  const [minimumValue, setMinimumValue] = useState(CONTROL_DEFAULTS.minimum);

  const handleOccupiedChange = (newValue) => {
    setOccupiedValue(newValue);
    if (newValue < powerSaveValue) {
      setPowerSaveValue(newValue);
    }
    if (newValue < minimumValue) {
      setMinimumValue(newValue);
    }
  };

  const handlePowerSaveChange = (newValue) => {
    setPowerSaveValue(newValue);
    if (newValue < minimumValue) {
      setMinimumValue(newValue);
    }
    if (newValue > occupiedValue) {
      setOccupiedValue(newValue);
    }
  };

  const handleMinimumChange = (newValue) => {
    setMinimumValue(newValue);
    if (newValue > occupiedValue) {
      setOccupiedValue(newValue);
      setPowerSaveValue(newValue);
    } else if (newValue > powerSaveValue) {
      setPowerSaveValue(newValue);
    }
  };

  /*---------------------------------------------*/

  const handleApply = () => {
    const levels = {
      occupied: occupiedValue,
      powerSave: powerSaveValue,
      minimum: minimumValue,
    };

    console.log("Applying levels:", levels);
    alert(
      `Applying levels: occupied [${levels.occupied}], powerSave [${levels.powerSave}], minimum [${levels.minimum}]`,
    );
  };

  /*---------------------------------------------*/

  const handleCancel = () => {
    setOccupiedValue(CONTROL_DEFAULTS.occupied);
    setPowerSaveValue(CONTROL_DEFAULTS.powerSave);
    setMinimumValue(CONTROL_DEFAULTS.minimum);

    console.log(
      "The user does not want to update the luminaire light levels, cancelling changes.",
    );
    alert(
      "The user does not want to update the luminaire light levels, cancelling changes.",
    );
  };

  return (
    <section className="controlPanel__wrapper" style={controlPanelStyle}>
      <h1>Edit levels</h1>
      <LuminaireSlider
        title={"Occupied"}
        value={occupiedValue}
        onChange={handleOccupiedChange}
      />
      <LuminaireSlider
        title={"Power Save"}
        value={powerSaveValue}
        onChange={handlePowerSaveChange}
      />
      <LuminaireSlider
        title={"Minimum"}
        value={minimumValue}
        onChange={handleMinimumChange}
      />
      <div style={buttonsContainerStyle} className="controlPanel__buttons">
        <Button text="Cancel" onClick={handleCancel} className="button-grey" />
        <Button text="Apply" onClick={handleApply} />
      </div>
    </section>
  );
};
