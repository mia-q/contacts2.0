import React from "react";

function NoContacts({hasContacts}) {
    return (
        <div className="no-contacts">
            <h3 style={{display: hasContacts ? "none" : "block"}}>No Contacts...</h3>
        </div>
    );
}

export default NoContacts;