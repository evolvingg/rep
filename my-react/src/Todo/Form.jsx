import React , { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.clickHandler=this.clickHandler.bind(this);
        console.log("vhbjxcvbxnbvnxb vcxjxgcvj",this.props)
    }
    clickHandler(){
        let val=this.refs.textField.value;
        console.log(this.refs);
        this.props.calledonclick(val);
    }
    render(){
        return(
            <React.Fragment>
                <input type="text" placeholder="todo" className="todoinput" ref="textField"/>
                <button className="todobutton" onClick={this.clickHandler}>Click me</button>
            </React.Fragment>           
        );
    }
}

export default Form;
