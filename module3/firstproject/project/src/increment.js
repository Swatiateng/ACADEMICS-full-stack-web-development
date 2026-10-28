import React,{useState} from 'react';
export default Counter;
function Counter(){
    const[count ,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    return (
        <div style={{textAlign:'center',marginTop:'50px'}} >
            <h1>current count:{count}</h1>
            <button onClick={increment}  style={{padding:'10px',fontSize:'16px',color:'white',backgroundColor:'blue'}}>INCREMENT</button>

        </div>
    );
}
