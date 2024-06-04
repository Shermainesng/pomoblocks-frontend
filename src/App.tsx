import './App.css';
import Tabs from './components/Tabs';
import Wrapper from './components/MainContainer';
// import AuthProvider, { useAuthContext } from './context/AuthContext';
// import Login from './pages/login';
// import Signup from './pages/signup';
import TaskProvider from './context/TaskContext';
import Routing from './routes';
import TabComponent from './components/Tabs';

function App() {

  return (
    <div className="">
      <TaskProvider> 
           <Routing/>
      </TaskProvider>
    </div>
  );
}

export default App;
