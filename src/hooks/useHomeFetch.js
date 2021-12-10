import { useState, useEffect, useRef } from "react";
import API from '../API';

//helper
import { isPersistedState } from "../helpers";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}



export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);  //states getting set
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    //console.log(searchTerm);
    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]

            }))
        }
        catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    //initial and Search
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                setState(sessionState);
                return;
            }
        }

        fetchMovies(1, searchTerm) //it will run only once. 

    }, [searchTerm]) //the second arguemnt is the conditon when we want to trigger the first arguement function.

    //Load More

    useEffect(() => {
        if (!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page]);

    //write the session storage
    useEffect(() => {
        if (!searchTerm)
            sessionStorage.setItem('homeState', JSON.stringify(state));
        setLoading(false);
    }, [isLoadingMore, searchTerm, state])

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
}