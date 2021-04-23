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
        <picture>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Pinsel_Dark.jpg"
            media="(prefers-color-scheme: dark)"
          ></source>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Pinsel.jpg"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          ></source>
          <img
            src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Pinsel.jpg"
            alt="placeholder"
          />
        </picture>
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
