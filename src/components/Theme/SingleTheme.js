import { useState, useEffect } from "react";
import axios from "axios";
import { IonCol, IonGrid, IonSpinner, IonRow, IonIcon } from "@ionic/react";
import "../ExploreContainer.css";

const SingleTheme = props => {
  const [theme, setTheme] = useState();
  const [themeColors, setThemeColors] = useState();
  const url = `${process.env.REACT_APP_API}/themes/${props.themeID}`;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
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
              <p style={{ fontSize: "0.8rem" }}>{color.name} </p>
              <p style={{ fontSize: "0.8rem" }}>{color.hex}</p>
            </IonCol>
          ))}
        </IonRow>
        <IonRow style={{ marginTop: "2rem" }}>
          <p>
            Please note: There are many unnamed colors. The names displayed here
            correspond to the closest color that has a name if the displayed
            color doesn't have one.
          </p>
        </IonRow>
      </IonGrid>
    </>
  ) : (
    <IonSpinner name="bubbles" color="tertiary" />
  );
};

export default SingleTheme;
