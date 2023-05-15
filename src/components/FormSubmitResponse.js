import React from "react";
import "../css/FormSubmitResponse.css";

const FormSubmitResponse = (props) => {
    return props.trigger ? (
        <div id="formSuccess">
            <div className="popup-inner">
                <button
                    className="close-button"
                    onClick={ () => props.setTrigger(false) }
                >
                    x
                </button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default FormSubmitResponse;