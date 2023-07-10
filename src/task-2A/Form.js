import React, { useState } from 'react'
import "./form2a.css"

function Form() {

    const [select,setSelect] = useState("")


    const handleSelect =(e) => {
        setSelect(e.target.value)
        console.log(e.target.value);
    }
  return (
    <>
        <h5>Contact Form</h5>
        <div className='container'>
            <div className='innerContainer'>
                <div className='row1'>
                    <div className='formGroup'>
                        <label htmlFor="firstName">First Name</label>
                        <input type='text' id='firstName' placeholder="Enter First Name"></input>
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="lastName">Last Name</label>
                        <input type='text' id='lastName' placeholder="Enter Last Name"></input>
                    </div>
                </div>
                <div className='row2'>
                    <div className='formGroup'>
                        <label htmlFor="contactType">How should we contact you?</label>
                        <select id='contactType' onChange={handleSelect}>
                            <option>Choose Option</option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                        </select>
                    </div>
                    {select === 'phone' &&
                    <div className='formGroup'>
                        <label htmlFor="phone">Phone Number</label>
                        <input type='number' id='phone'></input>
                    </div>}

                    {select === 'email' &&
                    <div className='formGroup'>
                        <label htmlFor= "email">Email Address</label>
                        <input type='email' id='email'></input>
                    </div>}
                </div>
            </div>
        </div>
    </>
  )
}

export default Form