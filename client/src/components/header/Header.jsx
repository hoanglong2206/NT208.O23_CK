import {faBed, faCameraRetro, faCar, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "./header.css"

function Header() {
  return (
    <div className="header">
        <div className="headerContainer">  
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCameraRetro}/>
                    <span>Attraction</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">Sign in, save money</h1>
            <p className="headerDesc">
                Save 10% or more at participating properties – just look for the blue Genius label.
            </p>
            <button className="headerBtn">Sign in or Register</button>
        </div>
    </div>
  )
}

export default Header