import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import './App.css';
import { About } from './components/Navigation/components/About/About';
import { Contacts } from './components/Navigation/components/Contacts/Contacts';
import { AddContact } from './components/Navigation/components/AddContact/AddContact';
import { Test } from './components/Navigation/components/Test/Test';


class App extends React.Component {
  state = {
      contacts: ["vasya", 'petya']
  }

  addContact = (contact) => {
    this.setState((prevState) => ({
      ...prevState,
      contacts: [...prevState.contacts, contact]
    }))
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <div>homepage vsem privet</div>}/>
          <Route path="/about" component={About} />
          <Route path="/contacts" render={(props) => <Contacts {...props} contacts={this.state.contacts}/>} />
          <Route path="/addcontact" render={(props) => <AddContact {...props} addContact={this.addContact}/>}/>
          <Route path="/test/:id" render={(props) => <Test {...props} id={props.match.params.id}/>} />
          <Route path="/" render={() => <div>404</div>}/>
        </Switch>
      </div>
    )
  }
}


export default App;
