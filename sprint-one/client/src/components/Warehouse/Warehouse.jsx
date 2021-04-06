import React, {useEffect, useState, useCallback} from 'react';
import del from "../../Assets/Icons/delete_outline-24px.svg";
import edit from "../../Assets/Icons/edit-24px.svg";
import axios from "axios";
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
        <>
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
       {responseData?.map((data)=>{
            return(
            <div key={data.id} className="warehouse">
               
                <div className="card">           
                    <div className="card__name">
                        <h4>WAREHOUSE</h4>
                        <p className="card__name--text">{data.name}</p>
                    </div>
                    <div className="card__address">
                        <h4>ADDRESS</h4>
                        <p className="card__address--text">{data.address}</p>
                        <p>{data.city} {data.counrty}</p>
                    </div>
                    <div>
                        <img className="card__img--delete" src={del} />
                    </div>
                    <div className="card__contact">
                        <h4>CONTACT NAME</h4>
                        <p className="card__contact--text">{data.contact.name}</p>
                    </div>
                    <div className="card__info">
                        <h4>CONTACT INFORMATION</h4>
                        <p className="card__info--text">{data.contact.phone}</p>
                        <p>{data.contact.email}</p>
                    </div>
                    <div>
                        <img className="card__img--edit" src={edit} />
                    </div>
                </div>
            </div>
            )

        })}
     </>
    )
}


export default Warehouse