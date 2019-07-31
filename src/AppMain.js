import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom' 
import Home from './Home.js';
import Favorites from './Favorites.js';
import About from './About.js';

class AppMain extends React.Component {
    // constructor() {
    //     super();
    //   }

    componentDidMount() {
        // fetch();
    }

    render() {
        return (
        <div>
            <BrowserRouter>
                <header>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">Favorites</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </header>
                <main id="main-content">
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/about" component={About} />
                </Switch>
                </main>
            </ BrowserRouter>
        </div>
        )
    };
}

export default AppMain;