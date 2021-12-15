import { useEffect, useState } from "react";
import API from "../API";

export const useFetchSocial = actorid => {

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {

                setLoading(true);
                setError(false);
                const social = await API.fetchSocial(actorid);
                console.log(social);
                setState({
                    ...social
                })


                setLoading(false);


            }
            catch (error) {
                setError(true);

            }


        }

        fetchSocialLinks();

    }, [actorid])

    return { state, error, loading };

}

