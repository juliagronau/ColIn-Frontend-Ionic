import { IonCol, IonGrid, IonSpinner, IonRow, IonImg } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../ExploreContainer.css";

const RandomColorComboResult = props => {
  const [combo, setCombo] = useState();
  const url = `https://www.thecolorapi.com/scheme?hex=${props.randomBaseColor}&mode=${props.randomMode}&count=3`;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setCombo(res.data.colors);
      })
      .catch(err => console.log(err));
  }, [url]);

  return (
    <IonGrid>
      <IonRow>
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

export default RandomColorComboResult;
