import React from 'react';
import CommonButton from './commonButton';
import '../Style/style.css';

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
    componentDidMount(){
        const localData: string = localStorage.getItem('store') as string;
        if(localData){
            const localParsedData: string[] = JSON.parse(localData);
            this.setState({
                store: localParsedData
            })
        }
    }

    getValue=(e:any)=>{
     this.setState({
         val:this.state.val+''+e
     })
    }
    evaluateValue=()=>{
        if(this.state.val){
            this.setState({
                val:eval(this.state.val)+"",
                store:this.state.store.concat(this.state.val+" = "+eval(this.state.val))
            });
            localStorage.setItem('store',JSON.stringify(this.state.store.concat(this.state.val+" = "+eval(this.state.val))));
        }
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
    clearWholeHistory=()=>{
        this.setState({
            store:[]
        });
        localStorage.clear();
    }
    clearIndexValue=(index:number)=>{
     const currentStore: string[] = this.state.store;
    currentStore.splice(index,1);
    this.setState({
    store: currentStore
       })
    }
    historyToggle = ()=>{
        this.setState({
            historyVisible: !this.state.historyVisible
        })
    }
    render(){
        return(
            <div className='outerDiv'> 
            <table style={{padding:15}}>
                <tr>
                 <td colSpan={4}>
                 {
                     this.state.historyVisible ? 
                     <div className='innerDiv'>
                         {
                             this.state.store.map((item: string, index: number) => {
                                 return <div className='mapDiv' key={index}>
                                     <p>{item}</p>
                                     <p onClick={()=>this.clearIndexValue(index)}>X</p>
                                 </div>
                             })
                         }
                     </div>
                        : 
                        <div className='innerDiv'>
                            <p>{this.state.val}</p>
                        </div>
                 }
                 </td>
                </tr>
                <tr>
                    <td>
                        <CommonButton title={"C"}   onClick={this.clearValue}/>
                    </td>
                    <td>
                    <CommonButton title={"X"}   onClick={this.backVlue}/>
                    </td>
                    <td>
                    <CommonButton title={"%"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"/"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <CommonButton title={"7"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"8"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"9"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"*"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <CommonButton title={"4"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"5"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"6"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"-"}  onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <CommonButton title={"1"}  onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"2"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"3"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td>
                    <CommonButton title={"+"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                </tr>
                <tr>   
                    <td>
                    <CommonButton title={"H"}   onClick={this.historyToggle}/>
                    </td>
                    <td>
                    <CommonButton title={"ch"}   onClick={this.clearWholeHistory}/>
                    </td>
                    <td>
                    <CommonButton title={"0"}   onClick={(e)=>this.getValue(e.target.value)}/>
                    </td>
                    <td colSpan={2}>
                    <CommonButton title={"="}   onClick={this.evaluateValue}/>
                    </td>
                </tr>
            </table>
            </div>
        );
    }
}
export default Calculator;