import { useState, useEffect } from 'react';
import API from '../API';

//helpers
import { isPersistedState } from '../helpers';

export const useMoviefetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {

            try {

                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                //director
                const directors = credits.crew.filter(member =>
                    member.job === 'Director');


                setState(
                    {
                        ...movie, actor: credits.cast, directors: directors
                    })
                setLoading(false);

            } catch (error) {
                setError(true);
            }
        };

        const sessionState = isPersistedState(movieId);
        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie();

    }, [movieId])

    //write to session Storage

    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))

    }, [movieId, state])


    return { state, loading, error };
}
