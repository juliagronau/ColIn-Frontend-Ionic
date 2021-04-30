import { IonContent } from "@ionic/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Logout = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(
    AuthContext
  );

  useEffect(() => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser({});
  }, []);

  return (
    <IonContent>
      <div className="container" style={{ paddingBottom: "2rem" }}>
        <picture>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Logout_Dark.jpg"
            media="(prefers-color-scheme: dark)"
          ></source>
          <source
            srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Logout.jpg"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          ></source>
          <img
            src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Logout.jpg"
            alt="Header Login"
          />
        </picture>
        <h1>You're logged out.</h1>
        <h2>See you next time.</h2>
      </div>
    </IonContent>
  );
};

export default Logout;
