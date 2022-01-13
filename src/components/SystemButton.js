import React from "react";

function SystemButton({text}) {

    return (
        <button className="system-button"
                type="button"
        >
            {text}
        </button>
    );
}

export default SystemButton;