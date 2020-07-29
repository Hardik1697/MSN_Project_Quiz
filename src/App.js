import React, { Component } from 'react';
import Header from './reading';

class App extends React.Component {
    state = {
        visible: true
    };

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default App;