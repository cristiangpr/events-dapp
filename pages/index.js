import React, { Component, Fragment } from 'react';
import { Form, Button, Message, Grid, Container } from 'semantic-ui-react';

import helloBlockchain from '../helloBlockchain';
import web3 from '../web3';



class App extends Component {
  state = {
    contracState: '',
    requestMessage: '',
    responseMessage: '',
    message: '',
   

  };
   onSubmit = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: "waiting" });
  
    await helloBlockchain.methods.SendRequest(this.state.requestMessage).send({
        from: accounts[0],
        
  
      });
      this.setState({ message: "request sent" });
  
  }
   onSubmitResponse = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: "waiting" });
  
    await helloBlockchain.methods.SendRequest(this.state.responseMessage).send({
        from: accounts[0],
        
      });
      this.setState({ message: "response sent" });
  
  }
  
   render() {
     return (
  <Container  >
   <Grid >
     <Grid.Row style={{textAlign: 'center'}}>
       <Grid.Column width={16} ><h2>Hello Blockchain</h2 ></Grid.Column>
     </Grid.Row>
     <Grid.Row>
    
     <Grid.Column width={8}>
      
  
   
    <Form onSubmit={this.onSubmit}>
      <h4>Send a Request</h4>
        <div>
        
           <input
             value={this.state.requestMessage}
             onChange={e => this.setState({requestMessage: e.target.value})}
           />

        </div>
        <Button primary>Enter</Button>
    </Form>
    </Grid.Column>
    <Grid.Column width={8}>
    <Form onSubmit={this.onSubmitResponse}>
      <h4>Send a Response</h4>
        <div>
        
           <input
             value={this.state.responseMessage}
             onChange={e => this.setState({responseMessage: e.target.value})}
           />

        </div>
        <Button primary>Enter</Button>
    </Form>
    </Grid.Column>
    </Grid.Row>
    <Message success  content={this.state.message} />
    
    </Grid>
    </Container>
  );
};
}
export default App;