import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props); // Always call this at the start of a constructor

        // THIS IS THE ONLY TIME we do direct assignment to this.state
        // Any other time you want to change state, use setState()
        this.state = {
            lat: null,   // Use null whenever you need placeholder for *numerical* value
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {   // Success callback
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {        // Failure callback
                this.setState({ errorMessage: err.message });
            }
        );
    };

    // React *requires* us to define the render() method
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        };

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        };
        
        return <div>Loading...</div>;
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
