import { useState } from "react";
import { Button } from "../Button/Button";
import { LuminaireSlider } from "./LuminaireSlider";

// Default values for the sliders
const CONTROL_DEFAULTS = {
  occupied: 80,
  powerSave: 20,
  minimum: 0,
};

// Styling for the control panel
const controlPanelStyle = {
  display: "flex",
  flexDirection: "column",
  background: "#ffffff",
  padding: "20px",
  height: "auto",
  width: "300px",
  gap: "15px",
};

// Styling for the buttons container
const buttonsContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

export const LuminaireControl = () => {
  // State variables for sliders' values
  const [occupiedValue, setOccupiedValue] = useState(CONTROL_DEFAULTS.occupied);
  const [powerSaveValue, setPowerSaveValue] = useState(
    CONTROL_DEFAULTS.powerSave,
  );
  const [minimumValue, setMinimumValue] = useState(CONTROL_DEFAULTS.minimum);

  // Event handlers for slider changes
  const handleOccupiedChange = (newValue) => {
    setOccupiedValue(newValue);
    // Synchronize powerSaveValue and minimumValue if necessary
    if (newValue < powerSaveValue) {
      setPowerSaveValue(newValue);
    }
    if (newValue < minimumValue) {
      setMinimumValue(newValue);
    }
  };

  const handlePowerSaveChange = (newValue) => {
    setPowerSaveValue(newValue);
    // Synchronize minimumValue and occupiedValue if necessary
    if (newValue < minimumValue) {
      setMinimumValue(newValue);
    }
    if (newValue > occupiedValue) {
      setOccupiedValue(newValue);
    }
  };

  const handleMinimumChange = (newValue) => {
    setMinimumValue(newValue);
    // Synchronize occupiedValue and powerSaveValue if necessary
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

    // Log and alert the applied levels
    console.log("Applying levels:", levels);
    alert(
      `Applying levels: occupied [${levels.occupied}], powerSave [${levels.powerSave}], minimum [${levels.minimum}]`,
    );
  };

  /*---------------------------------------------*/

  const handleCancel = () => {
    // Reset sliders' values to the default
    setOccupiedValue(CONTROL_DEFAULTS.occupied);
    setPowerSaveValue(CONTROL_DEFAULTS.powerSave);
    setMinimumValue(CONTROL_DEFAULTS.minimum);

    // Log and alert the cancellation message
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
      {/* LuminaireSlider component for the "Occupied" slider */}
      <LuminaireSlider
        title={"Occupied"}
        value={occupiedValue}
        onChange={handleOccupiedChange}
      />
      {/* LuminaireSlider component for the "Power Save" slider */}
      <LuminaireSlider
        title={"Power Save"}
        value={powerSaveValue}
        onChange={handlePowerSaveChange}
      />
      {/* LuminaireSlider component for the "Minimum" slider */}
      <LuminaireSlider
        title={"Minimum"}
        value={minimumValue}
        onChange={handleMinimumChange}
      />
      {/* Buttons container with "Cancel" and "Apply" buttons */}
      <div style={buttonsContainerStyle} className="controlPanel__buttons">
        <Button text="Cancel" onClick={handleCancel} className="button-grey" />
        <Button text="Apply" onClick={handleApply} />
      </div>
    </section>
  );
};
