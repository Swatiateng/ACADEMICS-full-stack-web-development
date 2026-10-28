import React from "react";
class CityComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={city:"Mysore"};
        console.log("Constructor.State intialized with Mysore");
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called");
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount:Componentmounted");
        setTimeout(()=>{
            this.setState({city:"Bangalore"});},20);
        }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate:Deciding to re-render or not");
        return true;}
        getSnapshotBeforeUpdate(prevProps,prevState){
            console.log("getSnapshotBeforeUpdate:City before update was"+prevState.city);
            return null;
    }
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate:City updated from"+prevState.city+"to"+this.state.city);
    }
    render() {
        console.log("Render method:Rendering UI");
        return (
            <div style={{fontFamily:"Arial",textAlign:"center",marginTop:"30px"}}>
                <h2>City: {this.state.city}</h2>
            </div>
        );
    }
}
export default CityComponent;

