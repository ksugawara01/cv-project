import React from "react";
import { Component } from "react";

class ExperienceForm extends Component {
    render () {
        return (
            <form id="ExperienceForm>">
                <input type="text" name="position" defaultValue="Position" />
                <input type="text" name="company" defaultValue="Company" />
                <input type="text" name="city" defaultValue="City" />
                <input type="text" name="startDate" defaultValue="Start Date" />
                <input type="text" name="endDate" defaultValue="End Date" />
                <button type="button">Delete</button>
            </form>
        ) 
    }
}

export default ExperienceForm;