import React from 'react';
import CommonButton from './commonButton';

interface Props{

}
interface State{
    val:string,
    store:string[],
    historyVisible: boolean
}
class Calculator extends React.Component<Props,State>{
    constructor(props:State){
        super(props);
        this.state={
            val:"",
            store:[],
            historyVisible: false
        };
        
    }
    getValue=(e:any)=>{
     this.setState({
         val:this.state.val+''+e
     })
    }
    evaluateValue=()=>{
        this.setState({
            val:eval(this.state.val)+"",
            store:this.state.store.concat(this.state.val+" = "+eval(this.state.val))
        });
    }
    backVlue=()=>{
        this.setState({
            val:this.state.val.substring(0,this.state.val.length-1)
        })
    }
    clearValue=()=>{
        this.setState({
            val:""
        })
    }

    historyToggle = ()=>{
        this.setState({
            historyVisible: !this.state.historyVisible
        })
    }
    render(){
        return(
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flex:1,width:"100vw",height:"100vh"}}> 
            <table style={{padding:15}}>
                <tr>
                 <td colSpan={4}>
                 {
                     this.state.historyVisible ? 
                     <div style={{width:"95%",height:"100px",textAlign:"right",fontSize:"20px",overflow:"scroll"}}>
                         {
                             this.state.store.map((item: string, index: number) => {
                                 return <div style={{display:'flex', flexDirection:'row',justifyContent:"space-evenly"}} key={index}>
                                     <p>{item}</p>
                                     <p onClick={()=>{
                                         const currentStore: string[] = this.state.store;
                                         currentStore.splice(index,1);
                                         this.setState({
                                             store: currentStore
                                         })
                                     }}>X</p>
                                 </div>
                             })
                         }
                     </div>
                        : 
                    <textarea  style={{width:"95%",height:"100px",textAlign:"right",fontSize:"20px",overflow:"scroll"}} value={this.state.val} onChange={()=>{}}/>
                 }
                 </td>
                </tr>
                <tr>
                    <td>
                        <CommonButton title={"C"} style={{marginRight:5,padding:20,border:"1px solid black"}} onClick={this.clearValue}/>
                    </td>
                    <td>
                    <CommonButton title={"X"} style={{marginRight:5,padding:20,border:"1px solid black"}} onClick={this.backVlue}/>
                    </td>
                    <td>
                    <CommonButton title={"%"} style={{marginRight:5,padding:20,border:"1px solid black"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"/"} style={{padding:20,border:"1px solid black"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <CommonButton title={"7"} style={{marginRight:5,padding:20,border:"1px solid black"}}  onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"8"} style={{marginRight:5,padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"9"} style={{marginRight:5,padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"*"} style={{padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <CommonButton title={"4"} style={{marginRight:5,padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"5"} style={{marginRight:5,padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"6"} style={{marginRight:5,padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"-"} style={{padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <CommonButton title={"1"} style={{marginRight:5,padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"2"} style={{marginRight:5,padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"3"} style={{marginRight:5,padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"+"} style={{padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                </tr>
                <tr>   
                    <td>
                    <CommonButton title={"H"} style={{marginRight:5,padding:20,border:"1px solid black",fontSize:"15px"}} onClick={this.historyToggle}/>
                    </td>
                    <td>
                    <CommonButton title={"0"} style={{marginRight:5,padding:20,border:"1px solid black",fontSize:"15px"}} onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td colSpan={2}>
                    <CommonButton title={"="} style={{padding:20,paddingRight:51,paddingLeft:51,border:"1px solid black",fontSize:"15px"}} onClick={this.evaluateValue}/>
                    </td>
                </tr>
            </table>
            </div>
        );
    }
}
export default Calculator;