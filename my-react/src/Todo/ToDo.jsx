import React , { Component } from 'react';
import Form from './Form';
import List from './List';

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            edit:[]
        };
        this.calledonclick=this.calledonclick.bind(this);
    }
    calledonclick(val){
        this.setState({list:[...this.state.list,val],edit:[...this.state.edit,'']});
    }
    delete(i){
        this.state.list.splice(i,1);
        this.state.edit.splice(i,1);
        this.setState({list:this.state.list,edit:this.state.edit});
    }
    editItem(i,element){
        var edited=this.state.edit.slice(0);
        var listUpdate=this.state.list.slice(0);
        if(edited[i]){
            listUpdate[i]=element;
            this.setState({list:listUpdate})
        }
        edited[i]=!edited[i];
        this.setState({edit:edited});
    }
    render(){
        return(
        <React.Fragment>
            <Form calledonclick={this.calledonclick}/>
            <List list={this.state.list} editable={this.state.edit} del={this.delete.bind(this)} ed={this.editItem.bind(this)}/>
        </React.Fragment>           
        );
    }
}

export default ToDo;
