import { useEffect, useState, useCallback } from 'react';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Importing CollabTool Page Components
import CollabTools from './pages/collabTools/CollabTools'

// Importing Home Page Components
import Home from './pages/home/Home'

// Importing Login Page Components
import Login from './pages/login/Login'


// Importing Profile Page Components
import Profile from './pages/profile/Profile'


// Importing Projects Page Components
import projects from './pages/projects/Projects'



// Importing Register Page Components
import Register from './pages/register/Register'


// Importing Team Page Components
import Team from './pages/team/Team'


// Importing user Panel Components
import RegisterForm from './Components/Forms/RegisterForm/RegisterForm'
import Panel from './Components/Panel/Panel';
import LoginForm from './Components/Forms/LoginForm/LoginForm';
import { getStorage } from './utils/storage';

// import components for Post
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Register from './Components/Register.js';
import ConfirmPassword from './Components/ConfirmPassword.js';
import PrivateRoute from './PrivateRoute';
import EditProfile from './Components/EditProfile.js';
import Logout from './Components//Logout.js';
import ProfileCookies from './Data/ProfileCookies.js';
import Error from './Data/Error.js';

const App = () => {
  const [toggle, setToggle] = useState('');

  const changeToggle = (toggle) => setToggle(toggle)

  const checkIsInitStorage = () => getStorage('users') && getStorage('users').length !== 0

  const checkUserIsRegister = useCallback(() => {
    if (checkIsInitStorage()) {
      const userId = getStorage('id')
      const users = getStorage('users')

      const [userRegistered] = users.filter(user => user.id === userId)

      userRegistered.isLogin && changeToggle('panel')
      !userRegistered.isLogin && changeToggle('login')
    } else changeToggle('register')
  }, [])

  useEffect(() => {
    checkUserIsRegister()
  }, [checkUserIsRegister])


  return (

  <BrowserRouter>
          <Switch>
            <PrivateRoute path="/" component={Home} exact />
            <PrivateRoute path="/editprofile" component={EditProfile} />
            <Route path="/confirmpassword" component={ConfirmPassword} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
   </BrowserRouter>
    <>
      { toggle === 'register' && <RegisterForm onRegister={checkUserIsRegister}  onLogin={changeToggle} /> }
      { toggle === 'login' && <LoginForm onRegister={changeToggle} onLogin={checkUserIsRegister} /> }
      { toggle === 'panel' && <Panel onLogOut={checkUserIsRegister} /> }
    </>
  )
}

export  default App