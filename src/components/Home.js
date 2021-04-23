import { IonButton, IonContent } from "@ionic/react";
import "./ExploreContainer.css";

const Home = () => {
  return (
    <IonContent>
      <div className="container" style={{ paddingBottom: "2rem" }}>
        <picture>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_mitLogo_Dark.jpg"
            media="(prefers-color-scheme: dark)"
          ></source>
          <source
            srcset="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_mitLogo.jpg"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          ></source>
          <img
            src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_mitLogo.jpg"
            alt="placeholder"
          />
        </picture>
        <h1>ColIn - the color inspirator for your creative projects</h1>
        <h2 style={{ marginBottom: "2rem" }}>
          Hi, I'm ColIn! I'm here to help you to find the perfect color
          combination for your next project.
        </h2>
        <IonButton href="/page/ColorCombo">
          Get a personal Color Combo
        </IonButton>
        <IonButton href="/page/Themes">Choose from one of the themes</IonButton>
        <IonButton href="/page/Random">Get a random Color Combo</IonButton>
      </div>
    </IonContent>
  );
};

export default Home;
