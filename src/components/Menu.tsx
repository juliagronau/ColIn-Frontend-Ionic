import {
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import './Menu.css';

interface AppPage {
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
    title: 'LogIn',
    url: '/page/LogIn'
  },
  {
    title: 'SignUp',
    url: '/page/SignUp'
  },
  {
    title: 'About',
    url: '/page/About'
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader><IonImg src="https://colin-colorinspirator-assets.s3.eu-central-1.amazonaws.com/ColIn_Logo3.jpg" ></IonImg></IonListHeader>
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
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
