import React , { Component } from 'react';

class List extends Component{
    constructor(props){
        super(props);
        this.calculate=this.calculate.bind(this);
    }
    del(ele){
        console.log('in del',ele,this.props.list)
        this.props.del(ele);  
    }
    edit(ele){
        let elem;
        elem=this.refs[ele].innerHTML;
        this.props.ed(ele,elem);
    }
    calculate(val){
        return val?"true":"false";
    }
    render(){
        var listItem =this.props.list.map((listItem,i) =>   
                <li key={i}>
                <span contentEditable={this.calculate(this.props.editable[i])} ref={i}>{listItem}</span>
                    <div className='deleteList' onClick={this.del.bind(this,i)}>
                        -
                    </div>
                    <div className='editList' onClick={this.edit.bind(this,i)}>
                        +
                    </div>
        </li>);
        return(
            <React.Fragment>
                <ul className="added">{listItem}</ul>
            </React.Fragment>           
        );
    }
}

export default List;
