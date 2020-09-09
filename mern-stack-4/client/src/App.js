import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';

// Componentes
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import { Provider } from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';

class App extends React.Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Provider store={store}>
        <div>
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList/>
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
