import { IonButton, IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Account = () => {
  const { user, SetUser } = useContext(AuthContext);
  const [savedCombos, setSavedCombos] = useState();
  const url = `${process.env.REACT_APP_API}/user/${user._id}/savedcombos`;
  console.log(user);

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        console.log(res.data.savedcombos);
        setSavedCombos(res.data.savedcombos);
      })
      .catch(err => console.log(err));
  }, [user]);

  const onClick = e => {
    const comboId = e.target.getAttribute("value");
    axios
      .delete(`${process.env.REACT_APP_API}/user/${comboId}/deletecombo`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    window.location.reload();
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
            alt="Header Login Hi"
          />
        </picture>
        <h1>Hello {user.username}!</h1>
        <h2 style={{ paddingTop: "2rem" }}>
          Here are the Combos you've saved:
        </h2>
        <IonGrid>
          {savedCombos && savedCombos.length > 0 ? (
            savedCombos.map(combo => (
              <IonRow key={combo._id} style={{ paddingTop: "2rem" }}>
                {combo.savedcombos.map(color => (
                  <IonCol key={color._id}>
                    <div
                      style={{
                        height: "4rem",
                        backgroundColor: `${color.hex}`,
                      }}
                    ></div>
                    {color.name}
                    <br></br>
                    {color.hex}
                  </IonCol>
                ))}
                <IonCol>
                  <IonButton
                    style={{ height: "2rem" }}
                    color="medium"
                    fill="outline"
                    value={combo._id}
                    onClick={onClick}
                  >
                    Delete
                  </IonButton>
                </IonCol>
              </IonRow>
            ))
          ) : (
            <p>No Combos saved yet</p>
          )}
        </IonGrid>
      </div>
    </IonContent>
  );
};

export default Account;
