import React from "react";
import { Component } from "react";

class EducationForm extends Component {
    render () {
        return (
            <form id="EducationForm>">
                <input type="text" name="university" defaultValue="University" />
                <input type="text" name="city" defaultValue="City" />
                <input type="text" name="degree" defaultValue="Degree" />
                <input type="text" name="startDate" defaultValue="Start Date" />
                <input type="text" name="endDate" defaultValue="End Date" />
                <button type="button">Delete</button>
            </form>
        ) 
    }
}

export default EducationForm;