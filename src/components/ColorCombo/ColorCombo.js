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

const ColorCombo = () => {
  const [baseColor, setbaseColor] = useState();
  const [numberOfColors, setNumberOfColors] = useState("brown");
  const [mode, setMode] = useState();

  return (
    <div className="container">
      <img
        src="https://images.unsplash.com/photo-1612900870552-0312616bac06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        alt="placeholder"
      />
      <h1>Get your personalized Color Combination</h1>
      <form>
        <IonList>
          <IonListHeader>
            <IonLabel>Tell me about your preferences</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>Base Color</IonLabel>
            <IonSelect
              value={baseColor}
              placeholder="Select One"
              onIonChange={e => setbaseColor(e.detail.value)}
            >
              <IonSelectOption value="female">Female</IonSelectOption>
              <IonSelectOption value="male">Male</IonSelectOption>
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
        <IonButton type="submit">Get your Color Combo</IonButton>
      </form>
    </div>
  );
};

export default ColorCombo;
