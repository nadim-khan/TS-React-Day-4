import * as React from 'react';

interface IProps{
    countBy?:number;
}
interface IState{
    count?:number;
}

class Descriptions extends React.Component<IProps,IState>{
     public static defaultProps: Partial<IProps>={
         countBy:1
     }

     public state:IState = {
         count:0
     }

     public increase = ()=>{
         const countBy:number = this.props.countBy;
         const count:number =this.state.count+countBy;
         this.setState({count})
     }

     public render(){
        return(<div>
            <p>My Favoute Number {this.state.count}</p>
            <button onClick={this.increase}>Increase by {this.props.countBy}</button>
        </div>)
    };
}

export default Descriptions;