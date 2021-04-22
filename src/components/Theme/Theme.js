import "../ExploreContainer.css";
import { IonButton, IonContent } from "@ionic/react";

const Theme = () => {
  return (
    <IonContent>
      <div className="container">
        <img
          src="https://cdn.discordapp.com/attachments/828377005312573490/834507261967335454/Unbenanntes_Projekt.jpg"
          alt="placeholder"
        />
        <h1>Choose from one of my themes</h1>
        <IonButton shape="round" color="medium">
          Summer
        </IonButton>
        <IonButton shape="round" color="medium">
          Fall
        </IonButton>
        <IonButton shape="round" color="medium">
          Retro
        </IonButton>
        <IonButton shape="round" color="medium">
          Vintage
        </IonButton>
        <IonButton shape="round" color="medium">
          Winter
        </IonButton>
        <IonButton shape="round" color="medium">
          Cocoa Mood
        </IonButton>
        <IonButton shape="round" color="medium">
          Christmas
        </IonButton>
        <IonButton shape="round" color="medium">
          Halloween
        </IonButton>
        <IonButton shape="round" color="medium">
          Forest
        </IonButton>
        <IonButton shape="round" color="medium">
          Beach Feelings
        </IonButton>
        <IonButton shape="round" color="medium">
          Romantic
        </IonButton>
      </div>
    </IonContent>
  );
};

export default Theme;
