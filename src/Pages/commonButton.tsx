import React from 'react';
import '../Style/style.css';

interface Props{
    onClick:(e:any)=>void,
    title:string

}
class CommonButton extends React.Component<Props>{
    constructor(props:any){
    super(props);
    }
render(){
    return(
            <button value={this.props.title}  onClick={this.props.onClick}>
             {this.props.title}
            </button>
    );
}
}
export default CommonButton;