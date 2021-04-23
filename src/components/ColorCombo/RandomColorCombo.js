import "../ExploreContainer.css";
import RandomColorComboResult from "./RandomColorComboResult";
import { useState, useEffect } from "react";
import { IonContent, IonSpinner } from "@ionic/react";

const RandomColorCombo = () => {
  const [randomBaseColor, setRandomBaseColor] = useState();
  const [randomMode, setRandomMode] = useState();
  const baseColor = ["808080", "800000", "FFFF00", "00FF00"];
  const mode = [
    "monochrome",
    "monochrome-dark",
    "monochrome-light",
    "analogic",
  ];
  let randomColor = baseColor[Math.floor(Math.random() * baseColor.length)];
  let randomColorMode = mode[Math.floor(Math.random() * mode.length)];

  useEffect(() => {
    setRandomBaseColor(randomColor);
    setRandomMode(randomColorMode);
  }, []);

  return (
    <IonContent>
      <div className="container">
        <img
          src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Pinsel.jpg"
          alt="placeholder"
        />
        <h1>Here's your random ColorCombo</h1>
        {randomBaseColor && randomMode ? (
          <RandomColorComboResult
            randomBaseColor={randomBaseColor}
            randomMode={randomMode}
          />
        ) : (
          <IonSpinner name="bubbles" color="tertiary" />
        )}
      </div>
    </IonContent>
  );
};

export default RandomColorCombo;
