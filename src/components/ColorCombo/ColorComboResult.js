import { IonContent, IonImg } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";

const ColorComboResult = props => {
  const [combo, setCombo] = useState();
  const url = `http://www.thecolorapi.com/scheme?hex=${props.baseColor}&mode=${props.mode}&count=${props.numberOfColors}`;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        console.log(res.data.image.named);
        setCombo(res.data.image.named);
      })
      .catch(err => console.log(err));
  }, []);

  //   Find a way to display SVG
  return combo ? (
    <IonContent>
      <IonImg src={combo} />
    </IonContent>
  ) : (
    "Loading..."
  );
};

export default ColorComboResult;
