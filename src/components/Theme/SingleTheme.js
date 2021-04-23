import { useState, useEffect } from "react";
import axios from "axios";
import { IonCol, IonGrid, IonSpinner, IonRow, IonIcon } from "@ionic/react";
import "../ExploreContainer.css";

const SingleTheme = props => {
  console.log(props);
  const [theme, setTheme] = useState();
  const [themeColors, setThemeColors] = useState();
  const url = `https://colin-color-inspirator.herokuapp.com/themes/${props.themeID}`;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        setThemeColors(res.data.colors);
        setTheme(res.data);
      })
      .catch(err => console.log(err));
  }, [url]);

  return theme ? (
    <>
      <h2>{theme.title}</h2>
      <IonGrid>
        <IonRow>
          {themeColors.map(color => (
            <IonCol key={color._id}>
              <div
                style={{
                  height: "4rem",
                  backgroundColor: `${color.hex}`,
                }}
              ></div>
              <p>{color.name} </p>
              <p>{color.hex}</p>
            </IonCol>
          ))}
        </IonRow>
        <IonRow style={{ marginTop: "2rem" }}>
          Please note: There are many unnamed colors. The names displayed here
          correspond to the closest color that has a name if the displayed color
          doesn't have one.
        </IonRow>
      </IonGrid>
    </>
  ) : (
    <IonSpinner name="bubbles" color="tertiary" />
  );
};

export default SingleTheme;
