import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyConverter from './components/currency-converter/currencyConverter';
import './styles.scss';
import ErrorComponent from './components/error/errorComponent';

class App extends React.Component {
    render() {
        return (
            <div>
                <ErrorComponent />
                <CurrencyConverter />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)