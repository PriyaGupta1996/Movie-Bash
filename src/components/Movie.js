

import React from "react";
import { useParams } from 'react-router';

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb'
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

// hook
import { useMoviefetch } from '../hooks/useMovieFetch';

// image
import NoImage from '../images/no_image.jpg';

const Movie = function () {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMoviefetch(movieId);
    console.log(movie);
    if (loading)
        return <Spinner />
    if (error) return <div> Something went wrong.... </div>

    return (
        <>
            <BreadCrumb Title={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue} />

            <Grid header='Actors'>
                {movie.actor.map(actor => (
                    <Actor
                        clickable
                        key={actor.credit_id}
                        id={actor.id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage
                        } />

                ))}
            </Grid>
        </>
    );
};

export default Movie;
