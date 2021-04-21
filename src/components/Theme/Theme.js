import "../ExploreContainer.css";
import { IonButton } from "@ionic/react";

const Theme = () => {
  return (
    <div className="container">
      <img
        src="https://images.unsplash.com/photo-1566666801184-2df912252e44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
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
  );
};

export default Theme;
