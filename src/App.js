import React from 'react';
// elementos
import Container from './styles/containers/container';
import Header from './components/Header/index'
// componentes
import CardList from './components/CardList/index';
import Form from './components/Form/index';


class App extends React.Component {
  state = {
    profiles: [],
  };
  
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  };
  
  render(){
    return(
      <Container>
          <Header />

          <Form onSubmit={this.addNewProfile} />
          <CardList profiles={this.state.profiles} />
      </Container>
    );
  }
}

export default App;
