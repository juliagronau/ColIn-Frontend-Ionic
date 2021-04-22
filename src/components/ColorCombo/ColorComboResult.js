import { IonCol, IonGrid, IonSpinner, IonRow, IonImg } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../ExploreContainer.css";

const ColorComboResult = props => {
  const [combo, setCombo] = useState();
  const url = `http://www.thecolorapi.com/scheme?hex=${props.baseColor}&mode=${props.mode}&count=${props.numberOfColors}`;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        console.log(res.data.colors);
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
              {color.name.value} {color.hex.value}
            </IonCol>
          ))
        ) : (
          <IonSpinner name="bubbles" color="tertiary" />
        )}
      </IonRow>
      <IonRow>
        Please note: There are many unnamed colors. The names displayed here
        correspond to the closest color that has a name if the displayed color
        doesn't have one.
      </IonRow>
    </IonGrid>
  );
};
export default ColorComboResult;
