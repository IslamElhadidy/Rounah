import React from 'react'
// import customer1 from '../../assets/images/customer2.png'
// import customer2 from '../../assets/images/customer2 (2).png'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';
function SpecialCustomers({client}) {


  return (
    <>
    {
      client && client.map((client) => {
        return (
            <Link to={`/clientproduct/${client.id}`} key={client.id} className="customer__2">
              <img src={client.image} alt="" />
            </Link>
            
        )
      })
    }


    </>
  )
}

export default SpecialCustomers
