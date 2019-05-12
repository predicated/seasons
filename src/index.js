import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Clock from './Clock';

class App extends React.Component {
    // THIS IS THE ONLY TIME we do direct assignment to state!
    // Any other time you want to change state, use setState()
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    };

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        };

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        };
        
        return <Spinner message="Please accept location request" />;
    };

    // React *requires* us to define the render() method
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
//    <Clock />,
    document.querySelector('#root')
);
 