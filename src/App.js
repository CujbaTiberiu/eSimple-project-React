import './App.css';
import { IdProvider } from './Components/IdContext';
import MainPage from './Components/MainPage';
import Select from './Components/Select';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <IdProvider>
        <Select />
        <MainPage />
      </IdProvider>
      {/* <Test /> */}
    </div>
  );
}

export default App;
