import "../ExploreContainer.css";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import { useState } from "react";
import ColorComboResult from "./ColorComboResult";
import Picker from "./Picker";

const ColorCombo = () => {
  const [baseColor, setBaseColor] = useState();
  const [numberOfColors, setNumberOfColors] = useState();
  const [mode, setMode] = useState();
  const [submit, setSubmit] = useState(false);

  const handleCallback = childData => {
    const cleanBaseColor = childData.substring(1);
    setBaseColor(cleanBaseColor);
  };

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
      <div className="smallheader">
        <picture>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_kleineKlecke_schmal_Dark.jpg"
            media="(prefers-color-scheme: dark)"
          ></source>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_kleineKleckse_schmal.jpg"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          ></source>
          <img
            src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_kleineKleckse_schmal.jpg.jpg"
            alt="placeholder"
          />
        </picture>
        <h1>Get your personalized Color Combination</h1>
        <form onSubmit={onSubmit}>
          <IonList>
            <IonListHeader style={{ marginBottom: "1rem" }}>
              <IonLabel>Tell me about your preferences</IonLabel>
            </IonListHeader>

            <Picker onChildClick={handleCallback} />

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
