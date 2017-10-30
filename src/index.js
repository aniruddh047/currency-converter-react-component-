import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyConverter from './components/currency-converter/currencyConverter';
import './styles.scss';

class App extends React.Component {
    render() {
        return (
            <div>
                <CurrencyConverter />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)