import {
  IonContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import './Menu.css';
import { AuthContext } from "../context/AuthContext";
import {useContext} from 'react';

interface AppPage {
  title: string;
  url: string;
}

interface ProtectedPage {
  title: string;
  url: string;
}

interface AuthPage {
  title: string;
  url: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home'
  },
  {
    title: 'ColorCombo',
    url: '/page/ColorCombo'
  },
  {
    title: 'Themes',
    url: '/page/Themes'
  },
  {
    title: 'About',
    url: '/page/About'
  }
];

const protectedPages: ProtectedPage[] = [ 
  {
    title: 'Account',
    url: '/page/Account'
  },
  {
    title: "LogOut",
    url: "/page/LogOut"
  }
];

const authPages: AuthPage[] = [
  {
    title: 'LogIn',
    url: '/page/LogIn'
  },
  {
    title: 'SignUp',
    url: '/page/SignUp'
  }
];

const Menu: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated, error, setError } = useContext(
    AuthContext
  );

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <picture>
              <source srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Logo3_Dark.jpg" media="(prefers-color-scheme: dark)"></source>
              <source srcSet="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Logo3.jpg" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"></source>
              <img src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Logo3.jpg" ></img>
            </picture>
            </IonListHeader>
          <IonNote>ColIn - Your Color Inspirator</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonItemDivider></IonItemDivider>
          {!isAuthenticated && authPages.map((authPage, index) => {
            return (
            <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === authPage.url ? 'selected' : ''} routerLink={authPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{authPage.title}</IonLabel>
                </IonItem>
            </IonMenuToggle>);
          })}
          {isAuthenticated && protectedPages.map((protectedPage, index) => {
            return (
            <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === protectedPage.url ? 'selected' : ''} routerLink={protectedPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{protectedPage.title}</IonLabel>
                </IonItem>
            </IonMenuToggle>);
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
