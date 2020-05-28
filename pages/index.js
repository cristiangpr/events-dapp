import React, { Component, Fragment } from 'react';
import { Form, Button, Message, Grid, Input, Container } from 'semantic-ui-react';

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
    this.setState({ message: "" });
  
    await helloBlockchain.methods.SendRequest(this.state.requestMessage).send({
        from: accounts[0],
        
  
      });
      this.setState({ message: "request recieved" });
  
  }
   onSubmitResponse = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: "" });
  
    await helloBlockchain.methods.SendRequest(this.state.responseMessage).send({
        from: accounts[0],
        
      });
      this.setState({ message: "response recieved" });
  
  }
  
   render() {
     return (
  <Container  >
   <Grid >
     <Grid.Row style={{textAlign: 'center'}}>
       <Grid.Column width={16} ><h2>Hello Blockchain</h2 ></Grid.Column>
     </Grid.Row>
     <Grid.Row style={{textAlign: 'center'}}>
       <Grid.Column width={16} ><h2>HTTPS Access Key: https://crismember.blockchain.azure.com:3200/yJovSnoQJ1p-woB_L2otZUPf  </h2 ></Grid.Column>
     </Grid.Row>
     <Grid.Row>
       
    
     <Grid.Column width={8}>
      
  
   
    <Form onSubmit={this.onSubmit} success={!!this.state.message}>
      <Form.Field>
      <h4>Send a Request</h4>
        
        
           <Input
             value={this.state.requestMessage}
             onChange={e => this.setState({requestMessage: e.target.value})}
           />
</Form.Field>
      
        <Button primary>Enter</Button>
        <Message success  content={this.state.message} />
    </Form>
    </Grid.Column>
    <Grid.Column width={8}>
    <Form onSubmit={this.onSubmitResponse}  success={!!this.state.message}>
    <Form.Field>
      <h4>Send a Response</h4>
      
        
           <Input
             value={this.state.responseMessage}
             onChange={e => this.setState({responseMessage: e.target.value})}
           />
</Form.Field>
          
        <Button primary>Enter</Button>
       
        
    </Form>
    
    </Grid.Column>
    </Grid.Row>
   
    
    </Grid>
    </Container>
  );
};
}
export default App;