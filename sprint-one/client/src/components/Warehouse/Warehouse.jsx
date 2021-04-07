import React, {useEffect, useState, useCallback} from 'react';
import del from "../../Assets/Icons/delete_outline-24px.svg";
import edit from "../../Assets/Icons/edit-24px.svg";
import axios from "axios";
import "./Warehouse.css"
// import {Link} from "react-router-dom"

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
        <div className="warehouse">
            <div className="search">
                <div>
                    <h1 className="search__title">Warehouses</h1>
                </div>
                <div>
                    <input className="search__bar" type="text" name="search"  placeholder= "Search" />
                </div>
                <div>
                    <button className="search__button">+ Add New Warehouse </button>
                </div>
            </div>
        {responseData?.map((data)=>{
                return(
                <div key={data.id}>
                
                    <div className="card">           
                        <div>
                            <h4 className="card__label">WAREHOUSE</h4>
                            <p className="card__text--name">{data.name}</p>
                        </div>
                        <div>
                            <h4 className="card__label">ADDRESS</h4>
                            <p className="card__text--br">{data.address}</p>
                            <p className="card__text--br">{data.city} {data.counrty}</p>
                        </div>
                        <div>
                            <img className="card__img--delete" src={del} />
                        </div>
                        <div>
                            <h4 className="card__label">CONTACT NAME</h4>
                            <p className="card__text">{data.contact.name}</p>
                        </div>
                        <div>
                            <h4 className="card__label">CONTACT INFORMATION</h4>
                            <p className="card__text--br">{data.contact.phone}</p>
                            <p className="card__text--br">{data.contact.email}</p>
                        </div>
                        <div>
                            <img className="card__img--edit" src={edit} />
                        </div>
                    </div>
                </div>
                )

            })}
     </div>
    )
}


export default Warehouse