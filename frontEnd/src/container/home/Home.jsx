import React, { Component } from 'react';
import Login from '../../component/login/Login';
import MenuBar from '../../component/menuBar/MenuBar';
import Sugar from '../../img/sugar.jpg';

class Home extends Component {
    render() {
        return (
            <div class="App">
                <header className="App-header">
                    <MenuBar />
                    <Login />
                </header>
            </div>
        );
    }
}

export default Home;
