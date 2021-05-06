import { IonButton, IonCol, IonContent, IonRow } from "@ionic/react";
import "./ExploreContainer.css";

const Home = () => {
  return (
    <IonContent>
      <div className="container" style={{ padding: "2rem" }}>
        <picture>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_mitLogo_Dark_neu.jpg"
            media="(prefers-color-scheme: dark)"
          ></source>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_mitLogo_neu.jpg"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          ></source>
          <img
            src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_mitLogo_neu.jpg"
            alt="ColIn Header with Logo"
          />
        </picture>
        <h1>colin - the color inspirator for your creative projects</h1>
        <IonRow>
          <IonCol className="column-center">
            <picture>
              <source
                srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Welcome_Dark.jpg"
                media="(prefers-color-scheme: dark)"
              ></source>
              <source
                srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Welcome.jpg"
                media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
              ></source>
              <img
                src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Welcome.jpg"
                alt="Hi, I'm Colin"
              />
            </picture>
          </IonCol>
          <IonCol className="column-center">
            <h3>
              I'm here to help you find the perfect color combination for your
              project.
            </h3>
          </IonCol>
        </IonRow>

        <p style={{ padding: "1rem" }}>
          Login or create an account to save color combinations for later
        </p>

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
