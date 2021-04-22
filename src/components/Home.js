import { IonButton, IonContent } from "@ionic/react";
import "./ExploreContainer.css";

const Home = () => {
  return (
    <IonContent>
      <div className="container">
        <img
          src="https://cdn.discordapp.com/attachments/828377005312573490/834680623276490773/Unbenanntes_Projekt.jpg"
          alt="placeholder"
        />
        <h1>ColIn - the color inspirator for your creative projects</h1>
        <h2>
          Hi, I'm ColIn! I'm here to help you to find the perfect color
          combination for your next project.
        </h2>
        <p>
          Enter some key parameters of your preferences or choose one of the my
          color themes.
        </p>
        <IonButton href="/page/ColorCombo">
          Get a personal Color Combo
        </IonButton>
        <IonButton href="/page/Themes">Choose from one of the themes</IonButton>
        <IonButton href="#">Get a random Color Combo</IonButton>
      </div>
    </IonContent>
  );
};

export default Home;
