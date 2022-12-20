import React from "react";
import { Component } from "react";

class PersonalInformation extends Component {
    render () {
        return (
            <form id="PersonalInformation>">
                <input type="text" name="firstName" defaultValue="First Name" />
                <input type="text" name="lastName" defaultValue="Last Name" />
                <input type="text" name="title" defaultValue="Title" />
                <input type="text" name="address" defaultValue="Address" />
                <input type="text" name="phoneNumber" defaultValue="Phone Number" />
                <input type="text" name="email" defaultValue="Email Address" />
                <input type="text" name="description" defaultValue="Description" />
            </form>
        ) 
    }
}

export default PersonalInformation;