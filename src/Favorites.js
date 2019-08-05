import React from 'react';
import MovieList from './MovieList.js';

class Favorites extends React.Component {
    constructor(props) {
        super();

        this.state = {
            movies: props.movies
        }
      }

    render() {
        return (
        <div>
            <h1>Favorites</h1>
            <MovieList movies={this.state.movies} />;
        </div>
        )
    };
}

export default Favorites;