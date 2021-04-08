import React, {useEffect, useState, useCallback} from 'react';
import del from "../../Assets/Icons/delete_outline-24px.svg";
import edit from "../../Assets/Icons/edit-24px.svg";
import sort from "../../Assets/Icons/sort-24px.svg"
import arrow from "../../Assets/Icons/chevron_right-24px.svg"
import axios from "axios";
import "./Warehouse.css"
// import Header from "../Header/Header"
import {Link} from "react-router-dom"

const Warehouse=(props)=> {
    let [responseData, data] = useState(null);
    const fetchData = useCallback(() => {
      axios({
        "method": "GET",
        "url": "/api/warehouse/list",
        "params": {
          "language_code": "en"
        }
      })
      .then((response) => {
        data(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])

    useEffect(() => {
      fetchData()
    }, [fetchData])

    console.log(responseData)
    return (
        <div>
        {/* <Header /> */}
        <div className="warehouse">
            <div className="search">
                <div>
                    <h1 className="search__title">Warehouses</h1>
                </div>
                <div>
                    <input className="search__bar" type="text" name="search"  placeholder= "Search..." />
                    
                </div>
                <div>
                   <Link> <button className="search__button">+ Add New Warehouse </button></Link>
                </div>
            </div>
            <div className="bar">
                <div className="bar__labels">
                    <h4>WAREHOUSE</h4>
                    <img className="bar__arrows--warehouse" src={sort}/>
                </div>
                <div className="bar__labels">
                    <h4>ADDRESS</h4>
                    <img className="bar__arrows--address" src={sort}/>
                </div>
                <div className="bar__labels">
                    <h4>CONTACT NAME</h4>
                    <img className="bar__arrows--name" src={sort}/>
                </div>
                <div className="bar__labels">
                    <h4>CONTACT INFORMATION</h4>
                    <img className="bar__arrows--info" src={sort}/>
                </div>
                <div className="bar__labels">
                    <h4>ACTIONS</h4>
                </div>
            </div>
        {responseData?.map((data)=>{
                return(
                <div key={data.id}>
                
                    <div className="card">           
                        <div className="card__warehouse">
                            <h4 className="card__label">WAREHOUSE</h4>
                            <div className="arrow__align">
                                <p className="card__text--name">{data.name}</p>
                                <img className="arrow" src={arrow}/>
                            </div>
                        </div>
                        <div className="card__address">
                            <h4 className="card__label">ADDRESS</h4>
                            <p className="card__text">{data.address}, {""}
                            {data.city},{""} {data.country}</p>
                        </div>
                        <div>
                            <Link><img className="card__img--delete" src={del} /></Link>
                        </div>
                  
                        <div className="card__name">
                            <h4 className="card__label">CONTACT NAME</h4>
                            <p className="card__text">{data.contact.name}</p>
                        </div>
                        <div className="card__info">
                            <h4 className="card__label">CONTACT INFORMATION</h4>
                            <p className="card__text--br">{data.contact.phone}</p>
                            <p className="card__text--br">{data.contact.email}</p>
                        </div>
                        <div className="card__icons">
                            <div>
                            <Link> <img className="card__img--delete2" src={del} />
                            </Link>
                            </div>
                           <Link> <img className="card__img--edit" src={edit} /></Link>
                        </div>
                    </div>
                </div>
                )

            })}
     </div>
     </div>
    )
}


export default Warehouse