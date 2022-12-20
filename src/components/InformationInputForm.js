import React from "react";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";
import { Component } from "react";

class InformationInputForm extends Component {
    render () {
        return (
            <div id="InformationInputForm>">
                <PersonalInformation />
                <Experience />
                <Education />
            </div>
        ) 
    }
}

export default InformationInputForm;
