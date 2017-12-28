import React, { Component } from 'react'

class FORM extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: { name:'vinoth',pwd:'qwerty', age:'12'},
            name:''
          }
        this.handlechangevent = this.handlechangevent.bind(this);
        this.Submit = this.Submit.bind(this);
        this.Update = this.Update.bind(this);
    }
    handlechangevent(event){
        let user = Object.assign({}, this.state.user);    //creating copy of object
        user.name = event.target.value;                        //updating value
        this.setState({user});
    }

    Update(state){
        //this.setState(object.assign({},this.state,state));
    }

    Submit(){
        alert('hi');
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
     }
     componentDidMount() {
        console.log('Component DID MOUNT!')
     }
     componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
        render() {
            return(
                <form onSubmit={this.Submit}>
                   <label> User Name:  <input type='text' value={this.state.user.name} name={this.state.user.name} onChange={this.handlechangevent}/></label><br/><br/>
                   <label> Pass Word:  <input type='password' value={this.state.user.pwd} name={this.state.user.pwd} onChange={this.handlechangevent}/></label><br/><br/>
                   <button style={{height: '30px'}}>{'Submit'}</button>
                </form>
            );
        }
}

export default FORM