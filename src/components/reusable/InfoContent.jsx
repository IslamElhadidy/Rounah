import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function InfoContent() {
    const [information , setInformation] = useState([])

    const url = 'https://admin.kaairatalrounah.sa'


    const getInformation = async () => {
        const response = await axios.get(`${url}/api/information`, {  
            headers: {
           'Accept-Language': window.localStorage.getItem("i18nextLng")

          }});

        setInformation(response.data.data.data)
        console.log(response.data.data.data);

        
    }

    useEffect(() => {
        getInformation()
      } , [])


  return (
    
    <div className='content'>
        
            {
                information && information.map((inf) => {
                    return (

                        <div className='content d-flex justify-content-center flex-column mb-5 align-items-center'>
                            <h4>{inf.title}</h4>           
                            <p className='text-center'>{inf.content}</p>
                        </div>
                    )
                })
            }
    </div>

    
  )
}

export default InfoContent
