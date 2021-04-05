import React from 'react';
import "../src/Assets/Icons/delete_outline-24px.svg";
import "../src/Assets/Icons/edit-24px.svg";
// import {Link} from "react-router-dom"

function Warehouse() {
    return (
        <div className="warehouse">
            <div>
                <div>
                <img className="warehouse__logo" alt="Instock Logo" />
                </div>
                <div>
                    <input className="warehouse__bar" type="text" name="search"  placeholder= "Search" />
                </div>
                <div>
                <button className="warehouse__button">+ Add New Warehouse </button>
                </div>
            </div>
            <div className="card">           
                <div className="card__name">
                    <h4>WAREHOUSE</h4>
                    {/* <p className="card__name--text">{data.name}</p> */}
                </div>
                <div className="card__address">
                    <h4>ADDRESS</h4>
                    {/* <p className="card__address--text">{data.address}<br>{data.city}, {data.counrty}</br></p> */}
                </div>
                <div>
                    <img className="card__img--delete" src="../src/Assets/Icons/delete_outline-24px.svg" />
                </div>
                <div className="card__contact">
                    <h4>CONTACT NAME</h4>
                    {/* <p className="card__contact--text">{data.contact.name}</p> */}
                </div>
                <div className="card__info">
                    <h4>CONTACT INFORMATION</h4>
                    {/* <p className="card__info--text">{data.contact.phone}<br>{data.contact.email}</br></p> */}
                </div>
                <div>
                    <img className="card__img--edit" src="../src/Assets/Icons/edit-24px.svg" />
                </div>
            </div>
        </div>
    )
}


export default Warehouse