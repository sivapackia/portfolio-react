import logo from './logo.svg';
import './App.css';
import Router from "./portfolio/Router";
import Store from "./portfolio/Store"
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="">
      <Provider store={Store}>
         <Router/>
      </Provider>
    </div>
  );
}
export default App;
