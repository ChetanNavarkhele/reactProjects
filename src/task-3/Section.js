import React, { useState } from 'react'
import classes from "./section.module.css"

function Section() {

    const [sectionHeader, setSectionHeader] = useState('');
    const [sectionDetails, setSectionDetails] = useState('');
    const [sections, setSections] = useState([]);

    const handleHeaderChange = (event) => {
        setSectionHeader(event.target.value);
    };

    const handleDetailsChange = (event) => {
        setSectionDetails(event.target.value);
    };

    const handleAddSection = () => {
        if (sectionHeader !== '' && sectionDetails !== '') {
            const newSection = { header: sectionHeader, details: sectionDetails };
            setSections([...sections, newSection]);
            setSectionHeader('');
            setSectionDetails('');
        }
    };
    return (
        <>
            <div className={classes.container}>
                <div className={classes.leftPanel}>
                    <h1>Add Section</h1>
                    <div className={classes.formGroup}>
                        <label>Section Header</label>
                        <input
                            type="text"
                            value={sectionHeader}
                            onChange={handleHeaderChange}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label>Section Details</label>
                        <textarea
                            type="text"
                            value={sectionDetails}
                            onChange={handleDetailsChange}
                        />
                    </div>
                
                <button onClick={handleAddSection}>Add</button>
                </div>
                <div className={classes.rightPanel}>
                    {sections.map((section, index) => (
                        <div key={index}>
                            <details className={classes.sectionDetails}>
                                <summary>{section.header}</summary>
                                <p>{section.details}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Section;
