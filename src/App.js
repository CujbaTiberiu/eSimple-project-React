import './App.css';
import { IdProvider } from './Components/IdContext';
import MainPage from './Components/MainPage';
import Select from './Components/Select';

function App() {
  return (
    <div className="App">
      <IdProvider>
        <Select />
        <MainPage />
      </IdProvider>
    </div>
  );
}

export default App;
