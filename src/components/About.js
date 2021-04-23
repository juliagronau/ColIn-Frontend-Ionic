import { IonContent, IonIcon } from "@ionic/react";
import "./ExploreContainer.css";
import { colorPalette, brush } from "ionicons/icons";

const About = () => {
  return (
    <IonContent>
      <div className="container" style={{ padding: "2rem" }}>
        <picture>
          <source
            srcset="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Blumen_Dark.jpg"
            media="(prefers-color-scheme: dark)"
          ></source>
          <source
            srcset="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Blumen.jpg"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          ></source>
          <img
            src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Header_Blumen.jpg"
            alt="placeholder"
          />
        </picture>
        <h1>Hi, I'm Julia</h1>
        <p>
          I created this App as my final project during the Full-Stack Web & App
          Development Bootcamp at WBS Coding School.
        </p>
        <p>
          I am now a passionate developer, but I also love handlettering. When I
          started to letter, I was often very unhappy with my color choices and
          even after a year of handlettering, I sometimes still take too much
          time to decide on color combinations that I like.
        </p>
        <p>
          So in order to solve this problem and save myself from unnecessary
          frustration, I created ColIn.
        </p>
        <p>I hope you enjoy this App and find it helpful :)</p>
        <br></br>
        <IonIcon icon={colorPalette} size="large"></IonIcon>
        <IonIcon icon={brush} size="large"></IonIcon>
        <p>
          Josh Beckman created an awesome API for colors, that I have used for
          parts of this project:{" "}
          <a href="http://www.thecolorapi.com/" target="blank">
            http://www.thecolorapi.com/
          </a>
        </p>
        <p>
          Furthermore, Dmitry Koshevoy has built a great website that helped me
          finding names for the colors in the theme section:{" "}
          <a href="https://www.htmlcsscolor.com/" target="blank">
            https://www.htmlcsscolor.com/
          </a>
        </p>
        <p>
          Last but not least, I found great palettes on{" "}
          <a href="https://looka.com/blog/category/branding/" target="blank">
            https://looka.com/blog
          </a>{" "}
          and{" "}
          <a href="https://www.schemecolor.com/" target="blank">
            https://www.schemecolor.com/
          </a>
        </p>
      </div>
    </IonContent>
  );
};

export default About;
