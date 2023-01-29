import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { book, bookOutline, chatbubbles, ellipse, home, homeOutline, newspaper, newspaperOutline, person, personAddOutline, personOutline, square, triangle } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './global.css'


// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


// import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

// all other imports
import { useContext } from 'react';
import { SettingsContext, SettingsContextType } from './contexts/SettingsContext';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard/Dashboard';
import Materials from './screens/Materials';
import Feed from './screens/Feed';
import Me from './screens/Me';
import Assignments from './screens/Assignments/Assignments';
import AssignmentDetail from './screens/AssignmentDetail';
// import Question from './screens/Question';
import Questions from './screens/Question/Questions';




setupIonicReact();

const App: React.FC = () => {
  const { showTabs } = useContext(SettingsContext) as SettingsContextType


  return (
    <IonApp>
      <IonReactRouter>

        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/mateirals">
          <Materials />
        </Route>
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/me">
          <Me />
        </Route>
        <Route exact path="/assignments">
          <Assignments />
        </Route>
        <Route exact path="/assignment/:id">
          <AssignmentDetail />
        </Route>
        <Route exact path="/questions">
          <Questions />
        </Route>

        {
          showTabs && (
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/">
                  <Landing />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/materials">
                  <Materials />
                </Route>
                <Route exact path="/feed">
                  <Feed />
                </Route>
                <Route exact path="/me">
                  <Me />
                </Route>
                <Route exact path="/assignments">
                  <Assignments />
                </Route>
                <Route exact path="/assignment/:id">
                  <AssignmentDetail />
                </Route>
                <Route exact path="/questions">
                  <Questions />
                </Route>
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/dashboard">
                  <IonIcon icon={home} />
                </IonTabButton>
                <IonTabButton tab="tab2" href="/materials">
                  <IonIcon icon={book} />
                </IonTabButton>
                <IonTabButton tab="tab3" href="/feed">
                  <IonIcon icon={chatbubbles} />
                </IonTabButton>
                <IonTabButton tab="tab4" href="/me">
                  <IonIcon icon={person} />
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          )
        }
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
