import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store/store'
import './App.css';
import CakeContainer from './component/cake/CakeContainer.component';
import HooksCakeContainer from './component/cake/HooksCakeContainer.component';
import IceCreamContainer from '../src/component/icecream/IceCream.component'
import HooksIceCream from './component/icecream/HooksIceCream.component';
import PizzaContainer from './component/pizza/PizzaContainer.component';
import HooksPizzaContainer from './component/pizza/HooksPizza.component';
import NewCakeContainer from './component/input-quantity/NewCakeContainer.component';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <HooksIceCream />
        <IceCreamContainer />
        <HooksPizzaContainer />
        <PizzaContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
