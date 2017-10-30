import React from 'react';

var currencyArray;
export default class SelectComponent extends React.Component {
    updateCurrencyType(e){
        var value = e.target.value;
        currencyArray = this.props.dataArray;
        if(this.props.convType === "data-from"){
            this.props.updateFromType(value);
        }
        else {
            this.props.updateToType(value);
        }   
    }
    
    render() { 
        return (
            <div className="slds-form-element custom-select">
                <div className="slds-form-element__control">
                    <div className="slds-select_container">
                        <select className="slds-select select--background" onChange={this.updateCurrencyType.bind(this)}>
                            <option>EUR</option>
                            <option>CAD</option>
                            <option>USD</option>
                        </select>
                    </div>
                </div>
            </div>
        )   
    }
}
