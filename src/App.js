import './App.css';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/Authcontext';

function App() {
  return (
    <div className="app">      
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    </div>
  );
}

export default App;
