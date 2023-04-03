
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const url = "https://admin.kaairatalrounah.sa"
function Form() {
    const navigate = useNavigate();

    // const [fname,setFname] = useState('')
    // const [lname,setLname] = useState('')
    // const [email,setEmail] = useState('')
    // const [number,setNumber] = useState('')
    // const [city,setCity] = useState('')
    // const [show,setShow] = useState(false)
    const [sent , setsent] =useState(false)
    const [formError , setformError] = React.useState({})

    

    const [formData , setFormData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        city:"",
        feedback : "",
        country : "saudi arabia"
    })

    const change= (e) => {
        // setFname(e.target.value)
        // setLname(e.target.value)
        // setEmail(e.target.value)
        // setNumber(e.target.value)
        // setCity(e.target.value)

        const {name , value , type , checked } = e.target
       
        setFormData((prev => {
            return {
                ...prev,
               [name] : type === "file" ?  e.target.files[0] : value
              
            }
        }))
    }
    const FormHandler = async(e) => {
            e.preventDefault();
            // if(fname.length == "" && lname.length == "" && email.length == ""  && number.length == "" && city.length == "") {
            //     setShow(true)
            //     return;
            // }
            console.log(formData);
        
            await  axios.post(`${url}/api/customer-contact-us`, formData , {  headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': 'multipart/form-data;',
              }} ).then((res)=>
          {
            if(res.data.status === 1){
              setsent(true)
               console.log(sent)            
            }
           } ).then(() => { setTimeout(() => {
            navigate('/');
           }, 1000)
          }).catch((res) => {
            setformError( res.response.data.errors )
            console.log(formError)
          })
    }
    const [t , i18n] = useTranslation()
  return (
    <>
        <form  onSubmit={FormHandler}>
             <div className="left-box">
                        <input className='text-end' type="text" name="first_name" id="" placeholder='First name' value={formData.first_name} onChange={change} />
                        <p className='text-danger text-end px-2'>{formError.first_name}</p>
                        <input  className='text-end'type="text" name="last_name" id="" placeholder='Last name' value={formData.last_name} onChange={change} />
                        <p className='text-danger text-end px-2'>{formError.last_name}</p>
                        <input className='text-end' type="email" name="email" id="" placeholder='Email' value={formData.email} onChange={change}  />
                        <p className='text-danger text-end px-2'>{formError.email}</p>

                        <input className='text-end' type="number" name="phone" id="" placeholder='Phone Numbers' value={formData.phone} onChange={change}  />
                        <p className='text-danger text-end px-2'>{formError.phone}</p>

                        <input className='text-end' type="text" name="country" id="" placeholder='Saudi Arabia' value={formData.country} disabled />
                        <div className="select-group one-select">
                                <select id="" placeholder='City'  name="city" onChange={change} value={formData.city}>
                                    <option className='text-end' value="" disabled defaultValue>City</option>
                                    <option className='text-end' value="Abha">Abha</option>
                                    <option className='text-end' value="Al Bukayriyah">Al Bukayriyah</option>
                                    <option className='text-end' value="Baljurashi">Baljurashi</option>
                                    <option className='text-end' value="Bisha">Bisha</option>
                                    <option className='text-end' value="Buraydah">Buraydah</option>
                                    <option className='text-end' value="Al Bahah">Al Bahah</option>
                                    <option className='text-end' value="Dammam">Dammam</option>
                                    <option className='text-end' value="Dhahran">Dhahran</option>
                                    <option className='text-end' value="Diriyah">Diriyah</option>
                                    <option className='text-end' value="Dawadmi">Dawadmi</option>
                                    <option className='text-end' value="Al Gwei'iyyah">Al Gwei'iyyah</option>
                                    <option className='text-end' value="Hautat Sudair">Hautat Sudair</option>
                                    <option className='text-end' value="Al Hareeq">Al Hareeq</option>
                                    <option className='text-end' value="Hotat Bani Tamin">Hotat Bani Tamin</option>
                                    <option className='text-end' value="Hofuf">Hofuf</option>
                                    <option className='text-end' value="Hafr Al Batin">Hafr Al Batin</option>
                                    <option className='text-end' value="Al Jawf">Al Jawf</option>
                                    <option className='text-end' value="Jeddah">Jeddah</option>
                                    <option className='text-end' value="Jizan">Jizan</option>
                                    <option className='text-end' value="Jubail">Jubail</option>
                                    <option className='text-end' value="Khafji">Khafji</option>
                                    <option className='text-end' value="Khamis Mushayt">Khamis Mushayt</option>
                                    <option className='text-end' value="Khobar">Khobar</option>
                                    <option className='text-end' value="Al Majma'ah">Al Majma'ah</option>
                                    <option className='text-end' value="Al Mubarraz">Al Mubarraz</option>
                                    <option className='text-end' value="Mecca">Mecca</option>
                                    <option className='text-end' value="Medina">Medina</option>
                                    <option className='text-end' value="Muzahmiyya">Muzahmiyya</option>
                                    <option className='text-end' value="Najran">Najran</option>
                                    <option className='text-end' value="Al Namas">Al Namas</option>
                                    <option className='text-end' value="Al Qunfudhah">Al Qunfudhah</option>
                                    <option className='text-end' value="Ar Rass">Ar Rass</option>
                                    <option className='text-end' value="Ras Tanura">Ras Tanura</option>
                                    <option className='text-end' value="Riyadh">Riyadh</option>
                                    <option className='text-end' value="Sakakah">Sakakah</option>
                                    <option className='text-end' value="Shaqraa">Shaqraa</option>
                                    <option className='text-end' value="Taif">Taif</option>
                                    <option className='text-end' value="Tabuk">Tabuk</option>
                                    <option className='text-end' value="Tanomah">Tanomah</option>
                                    <option className='text-end' value="Al `ula">Al `ula</option>
                                    <option className='text-end' value="Unaizah">Unaizah</option>
                                    <option className='text-end' value="Uyan Aljuwa">Uyan Aljuwa</option>
                                    <option className='text-end' value="Wadi Al Dawasir">Wadi Al Dawasir</option>
                                    <option className='text-end' value="Yanbu">Yanbu</option>
                                    <option className='text-end' value="Zulfi">Zulfi</option>
                                </select>
                        </div>
                        <p className='text-danger text-end px-2'>{formError.city}</p>

                        <textarea className='text-end' name="feedback" id="" cols="1" rows="6" placeholder='Your Feedback'value={formData.feedback}  onChange={change}></textarea>
                        <p className='text-danger text-end px-2'>{formError.feedback}</p>

                        <button>Send</button>
             </div>
        </form>
    </>
  )
}

export default Form

