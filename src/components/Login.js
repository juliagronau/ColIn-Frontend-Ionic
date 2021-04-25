import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
} from "@ionic/react";
import { useState } from "react";

const Login = () => {
  const [text, setText] = useState();

  const onSubmit = e => {
    // e.preventDefault();
    // !baseColor || !numberOfColors || !mode
    //   ? alert("Please tell us about all your preferences")
    //   : setSubmit(true);
  };

  return (
    <IonContent>
      <div className="container" style={{ paddingBottom: "2rem" }}>
        <picture>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Login_Dark.jpg"
            media="(prefers-color-scheme: dark)"
          ></source>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Login.jpg"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          ></source>
          <img
            src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Login.jpg"
            alt="Header Login"
          />
        </picture>
        <h1>Please log in to save color combinations or submit new themes</h1>
        <form onSubmit={onSubmit}>
          <IonList>
            <IonItem>
              <IonLabel position="floating">E-Mail</IonLabel>
              <IonInput type="email" value={text}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" value={text}></IonInput>
            </IonItem>
          </IonList>
          <IonButton
            type="submit"
            onClick={e => console.log("clicked")}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            Login
          </IonButton>
        </form>
      </div>
    </IonContent>
  );
};

export default Login;
