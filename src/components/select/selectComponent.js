import React from 'react';

var currencyArray;
export default class SelectComponent extends React.Component {
    // currencyArray=this.props.data;
    updateCurrencyType(e){
        var value = e.target.value;
        // console.log(this.props.dataArray)
        currencyArray = this.props.dataArray;
        if(this.props.convType === "data-from"){
            this.props.updateFromType(value);
        }
        else {
            this.props.updateToType(value);
        }   
    }
    
    render() {
        // console.log(this.props.dataArray)
        // var array = this.props.dataArray.map(function(item){
            // return (<option>{item}</option>)
        // });
        return (
            // <div>
            //     <select onChange={this.updateCurrencyType.bind(this)}>
            //         <option>EUR</option>
            //         <option>USD</option>
            //         <option>CAD</option>
            //     </select>
            // </div>
            <div className="slds-form-element custom-select">
                <div className="slds-form-element__control">
                    <div className="slds-select_container">
                        <select className="slds-select select--background" onChange={this.updateCurrencyType.bind(this)}>
                        {/* <option>{array}</option> */}
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
