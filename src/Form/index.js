import React from "react";
import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" placeholder="What's left to do?" />
        <button className="form__button">Add</button>
    </form>
)

export default Form;