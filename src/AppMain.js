import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom' 
import Home from './Home.js';
import Favorites from './Favorites.js';
import About from './About.js';
import Details from './Details.js';

class AppMain extends React.Component {
    // constructor() {
    //     super();
    //   }

    componentDidMount() {
        // fetch();
    }

    render() {
        return (
        <div className="container">
            <BrowserRouter>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">YBMs</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/favorites">Favorites</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link> 
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <main id="main-content">
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/about" component={About} />
                    <Route path="/details/:imdbID" component={Details} />
                </Switch>
                </main>
            </ BrowserRouter>
        </div>
        )
    };
}

export default AppMain;