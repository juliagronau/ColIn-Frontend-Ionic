import { SwatchesPicker } from "react-color";
import { useState } from "react";
import { IonButton } from "@ionic/react";
import "../ExploreContainer.css";

const Picker = ({ onChildClick }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState();

  const handleClick = () => {
    setDisplayColorPicker(true);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChangeComplete = color => {
    setSelectedColor(color.hex);
    onChildClick(color.hex);
    handleClose();
  };
  return (
    <div>
      <IonButton
        color="medium"
        fill="outline"
        onClick={handleClick}
        style={{ margin: "1rem" }}
      >
        Pick Base Color
      </IonButton>
      {selectedColor ? (
        <div>
          Base Color:
          <div
            style={{
              height: "4rem",
              backgroundColor: `${selectedColor}`,
              margin: "1rem",
            }}
          ></div>
        </div>
      ) : null}
      {displayColorPicker ? (
        <div>
          <SwatchesPicker onChangeComplete={handleChangeComplete} />
        </div>
      ) : null}
    </div>
  );
};

export default Picker;
