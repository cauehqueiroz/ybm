import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom' 
import Home from './Home.js';
import Favorites from './Favorites.js';
import About from './About.js';
import Details from './Details.js';

class AppMain extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [
                {
                    "Position": 1,
                    "Title": "Spider-Man: Far from Home",
                    "Year": "2019",
                    "imdbID": "tt6320628",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
                },
                {
                    "Position": 2,
                    "Title": "Avengers: Endgame",
                    "Year": "2019",
                    "imdbID": "tt4154796",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
                },
                {
                    "Position": 3,
                    "Title": "Star Wars: Episode IV - A New Hope",
                    "Year": "1977",
                    "imdbID": "tt0076759",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                },
                {
                    "Position": 4,
                    "Title": "John Wick",
                    "Year": "2014",
                    "imdbID": "tt2911666",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
                },
                {
                    "Position": 5,
                    "Title": "Toy Story",
                    "Year": "1995",
                    "imdbID": "tt0114709",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
                },
                {
                    "Position": 6,
                    "Title": "The Lord of the Rings: The Fellowship of the Ring",
                    "Year": "2001",
                    "imdbID": "tt0120737",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
                },
                {
                    "Position": 7,
                    "Title": "The Lord of the Rings: The Return of the King",
                    "Year": "2003",
                    "imdbID": "tt0167260",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                },
                {
                    "Position": 8,
                    "Title": "The Lord of the Rings: The Two Towers",
                    "Year": "2002",
                    "imdbID": "tt0167261",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                },
                {
                    "Position": 9,
                    "Title": "The Simpsons",
                    "Year": "1989",
                    "imdbID": "tt0096697",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
                },
                {
                    "Position": 10,
                    "Title": "Spider-Man: Into the Spider-Verse",
                    "Year": "2018",
                    "imdbID": "tt4633694",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
                },
                {
                    "Position": 11,
                    "Title": "The Office",
                    "Year": "2005",
                    "imdbID": "tt0386676",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTgzNjAzMDE0NF5BMl5BanBnXkFtZTcwNTEyMzM3OA@@._V1_SX300.jpg"
                },
                {
                    "Position": 12,
                    "Title": "How I Met Your Mother",
                    "Year": "2005",
                    "imdbID": "tt0460649",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZWJjMDEzZjUtYWE1Yy00M2ZiLThlMmItODljNTAzODFiMzc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
                },
                {
                    "Position": 13,
                    "Title": "The Flash",
                    "Year": "2014",
                    "imdbID": "tt3107288",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI1MDAwNDM4OV5BMl5BanBnXkFtZTgwNjUwNDIxNjM@._V1_SX300.jpg"
                },
                {
                    "Position": 14,
                    "Title": "Dark",
                    "Year": "2017",
                    "imdbID": "tt5753856",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMmIyZjA3NGUtYjlhNS00ZDlkLWI0MDgtMDc2YWNjNGMwYWZhXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
                },
                {
                    "Position": 15,
                    "Title": "Daredevil",
                    "Year": "2015",
                    "imdbID": "tt3322312",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_SX300.jpg"
                },
            ]
        }
      }

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
                    <Route path="/" exact={true} render={(props) => <Home  movies={this.state.movies}/>} />
                    <Route path="/favorites" render={(props) => <Favorites  movies={this.state.movies}/>} />
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