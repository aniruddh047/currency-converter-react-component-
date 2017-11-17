import React from 'react';
import InputComponent from '../input/inputComponent';
import SelectComponent from '../select/selectComponent';

var rates ={}
var inputValue;
var fromValue=1;
var toValue=1;
var currencyArray;
export default class CurrencyConverter extends React.Component {
    constructor(){
        super();
        this.fetchData = this.fetchData.bind(this);  
        this.calculate = this.calculate.bind(this);
        this.getInput = this.getInput.bind(this);
        this.updateFromType = this.updateFromType.bind(this);
        this.updateToType = this.updateToType.bind(this);      
        this.state = {
            result : 0
        }
    }
    componentWillMount(){
        this.fetchData();
        var app = document.getElementById('app');
        app.style.width = ''+window.innerWidth+'px';
        app.style.height = ''+window.innerHeight+'px'; 
        
    }
    fetchData(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var dataObject = JSON.parse(this.responseText);
            rates = dataObject.rates;
            rates.EUR = 1;
            console.log('rates is ',rates)
            currencyArray = Object.keys(rates);
          }else if(this.status == 404){
            document.write('page not found');
          }
        };
        var requiredUnits = 'USD,CAD'
        var targetUrl = 'http://api.fixer.io/latest?symbols='+requiredUnits;
        xhttp.open("GET", targetUrl, true);
        xhttp.send();   
    }
    calculate(){
        // console.log(typeof inputValue) 
        var pattern = /^\d+$/;
        if(pattern.test(inputValue)){
            // hide error container
            document.getElementsByClassName('error-container')[0].style.display = 'none';
            
            var newVal =inputValue*(toValue/fromValue);
            newVal = newVal.toFixed(2);
            this.setState({result:newVal});
        }else{
            // show error container
            document.getElementsByClassName('error-container')[0].style.display = 'block';
        }
    }
    getInput(input){
        inputValue=input;
        document.getElementsByClassName('error-container')[0].style.display = 'none';
        this.calculate(); 
    }
    updateFromType(fromUnit){
       var fromVal = rates[fromUnit];
       fromValue = fromVal;
       this.calculate(); 
    }

    updateToType(toUnit){
        var toVal = rates[toUnit];
        toValue = toVal;
        this.calculate(); 
    }
    render() {
        return (
            <div className="currency-container">
                <h3>Currency converter</h3>
                <InputComponent label="Type in an amount and select currency:" getInput={this.getInput}/>
                <SelectComponent convType="data-from" updateFromType = {this.updateFromType} dataArray={currencyArray} />
                <InputComponent label="Converted amount:" dataTarget="true" result={this.state.result}/>
                <SelectComponent convType="data-to" updateToType = {this.updateToType}/>
                <a className="disclaimer__link" href="https://www.google.com" target="_blank">Disclaimer</a>
            </div>
        )   
    }
}
