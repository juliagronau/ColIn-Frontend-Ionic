import "../ExploreContainer.css";
import { IonButton, IonContent } from "@ionic/react";
import { useState } from "react";
import SingleTheme from "./SingleTheme";

const Theme = () => {
  const [themeSelected, setThemeSelected] = useState(false);
  const [themeID, setThemeID] = useState();

  const onClick = e => {
    setThemeID(e.target.getAttribute("value"));
    setThemeSelected(true);
  };

  return (
    <IonContent>
      <div className="container">
        <img
          src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_kleineKleckse.jpg"
          alt="placeholder"
        />
        <h1>Choose from one of my themes</h1>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607ee37448bfa022fbaee638"
          onClick={onClick}
        >
          Summer
        </IonButton>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607ee4be48bfa022fbaee644"
          onClick={onClick}
        >
          Fall
        </IonButton>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607ee5d248bfa022fbaee64a"
          onClick={onClick}
        >
          Retro
        </IonButton>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607ee68f48bfa022fbaee650"
          onClick={onClick}
        >
          Vintage
        </IonButton>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607ee77d48bfa022fbaee656"
          onClick={onClick}
        >
          Winter
        </IonButton>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607ee82448bfa022fbaee65c"
          onClick={onClick}
        >
          Cocoa Mood
        </IonButton>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607ee94d48bfa022fbaee662"
          onClick={onClick}
        >
          Christmas
        </IonButton>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607eea9f48bfa022fbaee668"
          onClick={onClick}
        >
          Halloween
        </IonButton>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607eeec748bfa022fbaee66e"
          onClick={onClick}
        >
          Forest
        </IonButton>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607ef07e48bfa022fbaee674"
          onClick={onClick}
        >
          Beach Feelings
        </IonButton>
        <IonButton
          shape="round"
          color="medium"
          type="submit"
          value="607ef3ae48bfa022fbaee67a"
          onClick={onClick}
        >
          Romantic
        </IonButton>
        {themeSelected && <SingleTheme themeID={themeID} />}
      </div>
    </IonContent>
  );
};

export default Theme;
