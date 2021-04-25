import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
// import { Route } from 'workbox-routing';
import Home from '../components/Home';
import './Page.css';
import {Route} from 'react-router-dom';
import Theme from '../components/Theme/Theme';
import ColorCombo from '../components/ColorCombo/ColorCombo';
import RandomColorCombo from '../components/ColorCombo/RandomColorCombo';
import About from '../components/About';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRouterOutlet>
          <Route path="/page/Home" exact={true}>
            <Home />
          </Route>
          <Route path="/page/ColorCombo" exact={true}>
            <ColorCombo />
          </Route>
          <Route path="/page/Themes" exact={true}>
            <Theme />
          </Route>
          <Route path="/page/Random" exact={true}>
            <RandomColorCombo />
          </Route>
          <Route path="/page/LogIn" exact={true}>
            <Login />
          </Route>
          <Route path="/page/SignUp" exact={true}>
            <Signup />
          </Route>
          <Route path="/page/About" exact={true}>
            <About />
          </Route>
        </IonRouterOutlet>
      </IonContent>
    </IonPage>
   
  );
};

export default Page;
