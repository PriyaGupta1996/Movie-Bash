import { useState, useEffect, useRef } from "react";
import API from '../API';



export const useTimelineFetch = (actorId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchTimeline = async () => {
            try {
                setLoading(true);
                setError(false);
                const actor = await API.fetchActorCredits(actorId);

                setState({
                    ...actor
                })
                setLoading(false);
            }
            catch (error) {
                setError(true);
            }
        };

        fetchTimeline();
    }, [actorId])

    return { state, loading, error };


}