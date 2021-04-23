import "../ExploreContainer.css";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonItemDivider,
  IonButton,
} from "@ionic/react";
import { useState } from "react";
import ColorComboResult from "./ColorComboResult";

const ColorCombo = () => {
  const [baseColor, setbaseColor] = useState();
  const [numberOfColors, setNumberOfColors] = useState();
  const [mode, setMode] = useState();
  const [submit, setSubmit] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    !baseColor || !numberOfColors || !mode
      ? alert("Please tell us about all your preferences")
      : setSubmit(true);
  };

  const onClick = () => {
    console.log(submit);
  };

  return (
    <IonContent>
      <div className="container">
        <img
          src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Pinsel.jpg"
          alt="placeholder"
        />
        <h1>Get your personalized Color Combination</h1>
        <form onSubmit={onSubmit}>
          <IonList>
            <IonListHeader style={{ marginBottom: "1rem" }}>
              <IonLabel>Tell me about your preferences</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>Base Color</IonLabel>
              <IonSelect
                value={baseColor}
                onIonChange={e => setbaseColor(e.detail.value)}
              >
                <IonSelectOption value="808080">Gray</IonSelectOption>
                <IonSelectOption value="000000">Black</IonSelectOption>
                <IonSelectOption value="FF0000">Red</IonSelectOption>
                <IonSelectOption value="800000">Maroon</IonSelectOption>
                <IonSelectOption value="FFFF00">Yellow</IonSelectOption>
                <IonSelectOption value="808000">Olive</IonSelectOption>
                <IonSelectOption value="00FF00">Lime</IonSelectOption>
                <IonSelectOption value="008000">Green</IonSelectOption>
                <IonSelectOption value="00FFFF">Aqua</IonSelectOption>
                <IonSelectOption value="008080">Teal</IonSelectOption>
                <IonSelectOption value="0000FF">Blue</IonSelectOption>
                <IonSelectOption value="000080">Navy</IonSelectOption>
                <IonSelectOption value="FF00FF">Fuchsia</IonSelectOption>
                <IonSelectOption value="800080">Purple</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Number of Colors</IonLabel>
              <IonSelect
                value={numberOfColors}
                okText="Okay"
                cancelText="Dismiss"
                onIonChange={e => setNumberOfColors(e.detail.value)}
              >
                <IonSelectOption value="3">3</IonSelectOption>
                <IonSelectOption value="4">4</IonSelectOption>
                <IonSelectOption value="5">5</IonSelectOption>
                <IonSelectOption value="6">6</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Relation on Colorwheel</IonLabel>
              <IonSelect
                value={mode}
                okText="Okay"
                cancelText="Dismiss"
                onIonChange={e => setMode(e.detail.value)}
              >
                <IonSelectOption value="monochrome">Monochrome</IonSelectOption>
                <IonSelectOption value="monochrome-dark">
                  Monochrome-dark
                </IonSelectOption>
                <IonSelectOption value="monochrome-light">
                  Monochrome-light
                </IonSelectOption>
                <IonSelectOption value="analogic">Analogic</IonSelectOption>
                <IonSelectOption value="complement">Complement</IonSelectOption>
                <IonSelectOption value="analogic-complement">
                  Analogic-complement
                </IonSelectOption>
                <IonSelectOption value="triad">Triad</IonSelectOption>
                <IonSelectOption value="quad">Quad</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
          <IonButton
            type="submit"
            onClick={onClick}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            Get your Color Combo
          </IonButton>
        </form>
        {submit && (
          <ColorComboResult
            baseColor={baseColor}
            numberOfColors={numberOfColors}
            mode={mode}
          />
        )}
      </div>
    </IonContent>
  );
};

export default ColorCombo;
