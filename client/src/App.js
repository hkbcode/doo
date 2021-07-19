import './App.css';
import Greeter from './artifact/Greeter.json'

import { Drizzle } from "@drizzle/store";

// complete this, to be continued...

const drizzleOptions = {
  contracts: [Greeter],

}

const drizzle = new Drizzle(drizzleOptions);

function App() {
  return (
    <div className="App">
   
   <h1> Dapps with Reactjs </h1>



    </div>
  );
}

export default App;
