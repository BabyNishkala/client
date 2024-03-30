import React, { useState } from 'react'
import Products from '../products';
const Final=()=>{
    const[search,setsearch]=useState('');
    const [data,setdata]=useState([]);
    const YOUR_APP_ID="ff1c69b8";
    const YOUR_APP_KEY="cc5348dd84c81659c5809906dbd26ace";

    const submithandler=e=>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
            response => response.json()
            ).then(
                data=>setdata(data.hits)
            )
    }
    return <div>
        <center>
            <h1 className='heading'>MADE WITH LOVE</h1>
            <form className='search' onSubmit={submithandler}>
                <input type="text" placeholder='Order Please'value={search}
                onChange={(e)=>setsearch(e.target.value)}/>
                <input type="submit" className='btn btn-primary' value="Search"/> 
            </form>
            {data.length>=1 ? <Products data={data}/>:null}
        </center>
    </div>
} 
export default Final;