import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
} from "@ionic/react";
import { useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    error,
    setError,
    user,
    setUser,
  } = useContext(AuthContext);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formState;
  const [showHeader, setShowHeader] = useState(true);

  const onSubmit = async e => {
    e.preventDefault();
    for (const field in formState) {
      if (!formState[field]) return alert(`Please fill in your ${field}`);
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
      credentials: "include",
    };
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API}/user/login`,
        options
      );
      const { token, message, result } = await res.json();
      if (message) {
        setError(message);
        console.log(message);
        return () => setTimeout(setError(""), 5000);
      } else if (token) {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        setUser(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setShowHeader(false);
  };

  if (isAuthenticated && user) return <Redirect to="/page/Account" />;

  return (
    <IonContent>
      <div className="container" style={{ paddingBottom: "2rem" }}>
        {showHeader ? (
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
        ) : null}
        <>
          <h1>Please log in to save color combinations</h1>
          <form onSubmit={onSubmit}>
            <IonList>
              <IonItem>
                <IonLabel position="floating" htmlFor="email">
                  E-Mail
                </IonLabel>
                <IonInput
                  type="email"
                  name="email"
                  value={email}
                  onIonChange={onChange}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating" htmlFor="password">
                  Password
                </IonLabel>
                <IonInput
                  type="password"
                  name="password"
                  value={password}
                  onIonChange={onChange}
                ></IonInput>
              </IonItem>
            </IonList>
            <IonButton
              type="submit"
              onClick={e => console.log("clicked")}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              Login
            </IonButton>
            {/* Could be prettier */}
            {error && <div>{error}</div>}
          </form>
        </>
      </div>
    </IonContent>
  );
};

export default Login;
