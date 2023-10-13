import { React , useState} from 'react'
import Map from "./Map"
import Loading from "../../Loading/Loading"
import "./Restaurant.css"
import { DataCafe } from "./DataCafe"
import PinDropIcon from '@mui/icons-material/PinDrop';
import CallIcon from '@mui/icons-material/Call';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const Restaurant = () => {
  // useEffect(() => {
  //   Map;
  // }, );
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='Cafe'>
      <div className="map">
      {/* { {isLoading ? (
          <Loading />
        ) : ( */}
        <Map />
        {/* )} } */}
      </div>
      <div className="cards">
        {
          DataCafe.map((item, index) => {
            return(
              <div className="boxc" key={index}>

                <div className="imgc">
                    <img className='imgcafe' src={item.imgcs} alt="" />
                </div>
                <div className="namec" id='divvv'>
                  <div className='nameco'><h3>{item.Name}</h3></div>
                  <div className='btnco'><button>open</button></div>
                    
                </div>
                <div className="location" id='divvv'>
                    <PinDropIcon id="icons"/><h5 className='loca'>{item.Location}</h5>
                </div>
                <div className="phonec" id='divvv'>
                    <CallIcon id="icons"/><h4>{item.phonenumber}</h4>
                </div>
                <div className="timec" id='divvv'>
                  <HomeWorkIcon id="icons"/><h5 className='timeh'>Working Hours:</h5> <h4 className='timet'>{item.time}</h4>
                </div>
                <div className="btnc">
                  <button className='button'>Weekly hours</button>
                </div>
              </div>
            )
          })  
        }
      </div>
    </div>
  )
}

export default Restaurant