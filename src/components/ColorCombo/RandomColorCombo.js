import "../ExploreContainer.css";
import RandomColorComboResult from "./RandomColorComboResult";
import { useState, useEffect } from "react";
import { IonSpinner } from "@ionic/react";

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

  const getRandomColor = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const random = arr[randomIndex];
    setRandomBaseColor(random);
  };

  const getRandomMode = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const random = arr[randomIndex];
    setRandomMode(random);
  };

  return randomBaseColor && randomMode ? (
    <RandomColorComboResult
      randomBaseColor={randomBaseColor}
      randomMode={randomMode}
    />
  ) : (
    <IonSpinner name="bubbles" color="tertiary" />
  );
};

export default RandomColorCombo;
