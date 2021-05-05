import {
  IonCol,
  IonGrid,
  IonSpinner,
  IonRow,
  IonImg,
  IonButton,
} from "@ionic/react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../ExploreContainer.css";

const ColorComboResult = props => {
  const [combo, setCombo] = useState();
  const url = `https://www.thecolorapi.com/scheme?hex=${props.baseColor}&mode=${props.mode}&count=${props.numberOfColors}`;
  const { isAuthenticated, setIsAuthenticated, user } = useContext(AuthContext);
  const saveUrl = `${process.env.REACT_APP_API}/user/${user._id}/savecombo`;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setCombo(res.data.colors);
      })
      .catch(err => console.log(err));
  }, [url]);

  const onClick = () => {
    console.log(combo);
    const savedcombos = combo.map(color => ({
      name: `${color.name.value}`,
      hex: `${color.hex.value}`,
    }));
    console.log(savedcombos);
    axios.post(saveUrl, { savedcombos }).then(res => console.log(res));
    alert("Combo saved! You can find your saved Combos in the Account section");
  };

  return (
    <IonGrid>
      <IonRow className="combo">
        {combo ? (
          combo.map(color => (
            <IonCol key={color.hex.clean}>
              <IonImg
                className="color-combo-result"
                src={color.image.bare}
              ></IonImg>
              {color.name.value}
              <br></br>
              {color.hex.value}
            </IonCol>
          ))
        ) : (
          <IonSpinner name="bubbles" color="tertiary" />
        )}
      </IonRow>
      <IonRow style={{ marginTop: "2rem", justifyContent: "center" }}>
        {isAuthenticated ? (
          <IonButton onClick={onClick}>Save this Combo for later</IonButton>
        ) : (
          <p>Login or Signup to save Combos for later</p>
        )}
      </IonRow>
      <IonRow style={{ marginTop: "2rem" }}>
        <p>
          Please note: There are many unnamed colors. The names displayed here
          correspond to the closest color that has a name if the displayed color
          doesn't have one.
        </p>
      </IonRow>
    </IonGrid>
  );
};
export default ColorComboResult;
