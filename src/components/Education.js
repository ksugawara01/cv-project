import React from "react";
import EducationForm from "./EducationForm";
import { Component } from "react";

class Education extends Component {
    render () {
        return (
            <div>
                <EducationForm />
                <button type="button">Add More Education</button>
            </div>
        ) 
    }
}

export default Education;
