import axios from "axios";
import { useEffect, useState } from 'react';
import "./tenis.css"

const Tenis = () => {

   
    const [sneakers, setsneakers] = useState([]);
    const [pictursGrid, setPicturesGrid] = useState([]);

    const getApi = async () => {
      const response = await axios.get("http://127.0.0.1:5500/arquivo.html");
      setsneakers(response.data.sneakers);
      console.log(response);
      setPicturesGrid(response.data.sneakers)
      
    } 
  
    useEffect(() =>{
      getApi();
    }, [])


    return(
        <div>
             <div className="pictures-main">
             {pictursGrid.map((picture) => <h1 key={picture.id}><img style={{width: "90%", marginLeft: "45%", marginTop: "-2rem"}} src={picture.grid_picture_url} alt="img" id={picture.id + "rowId"} className="snkrs-pictures"/></h1>)}
             {sneakers.map((sneaker) => <h1 key={sneaker.id}>{sneaker.brand_name}</h1>)}
             </div>
        </div>
    )
}

export default Tenis;