import { IonButton, IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const Account = () => {
  const { user, SetUser } = useContext(AuthContext);
  console.log(user);

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
        <h1>Hello {user.username}</h1>
        <h2>Saved Combos</h2>
        <IonGrid>
          {user.savedcombo ? (
            user.savedcombo.map(combo => {
              <IonRow>
                <IonCol>{combo.name}</IonCol>
              </IonRow>;
            })
          ) : (
            <p>No Combos saved yet</p>
          )}
        </IonGrid>
        <IonButton>Change Password</IonButton>
      </div>
    </IonContent>
  );
};

export default Account;
