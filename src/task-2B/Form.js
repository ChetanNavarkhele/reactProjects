import React, { useState } from 'react'
import classes from "./form2b.module.css"

function Form() {

    const [select, setSelect] = useState("")


    const handleRadioChange = (e) => {
        setSelect(e.target.value)
        console.log(e.target.value);
    }
    return (
        <>
            <h5>Contact Form</h5>
            <div className={classes.container}>
                <div className={classes.innerContainer}>
                    <div className={classes.row1}>
                        <div className={classes.formGroup}>
                            <label htmlFor="firstName">First Name</label>
                            <input type='text' id='firstName' placeholder="Enter First Name"></input>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type='text' id='lastName' placeholder="Enter Last Name"></input>
                        </div>
                    </div>
                    <div className={classes.row2}>
                        <div className={classes.formGroup}>
                            <label htmlFor="contactType">How should we contact you?</label>
                            {/* <select id='contactType' onChange={handleSelect}>
                            <option>Choose Option</option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                        </select> */}
                            <div className={classes.formRadio}>
                                <div>
                                    <label><input type="radio" name="option" value="phone" id="phone" onChange={handleRadioChange}></input>
                                    Phone</label>
                                </div>

                                <div>
                                    <label><input type="radio" name="option" value="email" id="email" onChange={handleRadioChange}></input>
                                    Email</label>
                                </div>
                            </div>
                        </div>
                        {select === 'phone' &&
                            <div className={classes.formGroup}>
                                <label htmlFor="phone">Phone Number</label>
                                <input type='number' id='phone'></input>
                            </div>}

                        {select === 'email' &&
                            <div className={classes.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input type='email' id='email'></input>
                            </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form