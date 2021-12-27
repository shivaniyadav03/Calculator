import React from 'react';
interface Props{
    onClick:(e:any)=>void,
    title:string,
    style:any,

}
class CommonButton extends React.Component<Props>{
    constructor(props:any){
    super(props);
    }
render(){
    return(
            <button value={this.props.title} onClick={this.props.onClick} style={this.props.style}>
             {this.props.title}
            </button>
    );
}
}
export default CommonButton;