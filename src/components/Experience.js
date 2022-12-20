import React from "react";
import ExperienceForm from "./ExperienceForm";
import { Component } from "react";

class Experience extends Component {
    render () {
        return (
            <div>
                <ExperienceForm />
                <button type="button">Add More Experience</button>
            </div>
        ) 
    }
}

export default Experience;
