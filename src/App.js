import './App.css';
import Home from './components/Home/Home';

import { IssueContextProvider } from './context/IssueContext';

function App() {
  return (
    <div className="app">
      <IssueContextProvider>
        <Home/>
      </IssueContextProvider>
    </div>
  );
}

export default App;
