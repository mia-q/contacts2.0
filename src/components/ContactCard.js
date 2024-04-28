import React, { useState } from "react";
import placeHolderImage from "../images/person.png";
function ContactCard(props) {
    function handleDelete() {
        props.onDelete(props.id);
    }


        return (
            <div className="contact-card padding-10">
                <img 
                className="contact-photo"
                src={props.imgUrl ? props.imgUrl : placeHolderImage} 
                alt={props.name} 
                />
                <h3 className = "contact-name">{props.name}</h3>
                <div className="contact-number">
                    <p>Phone Number: </p>
                    <h4><i class="fa-solid fa-phone"></i>{props.number ? props.number : "no phone"}</h4>  
                </div>
                <div className="contact-email">
                    <p>Email: </p>
                    <h4 ><i class="fa-solid fa-envelope"></i>{props.email ? props.email : "no email"}</h4>
                </div>
                <div className="button-container">
                    <button onClick={handleDelete} className = "card-button cancel trash"><i className="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            );
    
}

export default ContactCard;