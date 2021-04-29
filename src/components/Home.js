import { IonButton, IonCol, IonContent, IonRow } from "@ionic/react";
import "./ExploreContainer.css";

const Home = () => {
  return (
    <IonContent>
      <div className="container" style={{ padding: "2rem" }}>
        <picture>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_mitLogoUnten_Dark.jpg"
            media="(prefers-color-scheme: dark)"
          ></source>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_mitLogoUnten.jpg"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          ></source>
          <img
            src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_mitLogoUnten.jpg"
            alt="ColIn Header"
          />
        </picture>
        <h1>ColIn - the color inspirator for your creative projects</h1>
        <IonRow>
          <IonCol>
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
          <IonCol>
            <p>
              I'm here to help you find the perfect color combination for your
              project.
            </p>
          </IonCol>
        </IonRow>
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
