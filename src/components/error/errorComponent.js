import React from 'react';

export default class ErrorComponent extends React.Component {

    render() { 
        return (
            <div className="slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_info error-container" role="alert">
                <h2>Please correct errors in input.</h2>
            </div>
        )   
    }
}
