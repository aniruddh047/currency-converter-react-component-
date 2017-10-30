import React from 'react';

export default class InputComponent extends React.Component {
   
    sendInput(e){
        if(this.props.dataTarget !=="true") {
        var value = e.target.value;
        this.props.getInput(value);
        }
    }
    render() {
        if(!this.props.dataTarget){
            return (
            <div className="slds-form-element custom-form">
                <label className="slds-form-element__label" htmlFor="text-input-id-1">{this.props.label}</label>
                <div className="slds-form-element__control">
                  <input type="text" id="text-input-id-1" onChange={this.sendInput.bind(this)} className="slds-input" defaultValue="0"/>
                </div>
            </div>
            )   
        }
        else {
            return (
                <div className="slds-form-element custom-form">
                    <label className="slds-form-element__label" htmlFor="text-input-id-2">{this.props.label}</label>
                    <div className="slds-form-element__control">
                        <input type="text" id="text-input-id-2" onChange={this.sendInput.bind(this)} className="slds-input"  value={this.props.result} />
                    </div>
                </div>
            )  
        }
    }
}
