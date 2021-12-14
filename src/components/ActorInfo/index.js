import React from "react";
import { useParams } from 'react-router';

//config

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//components
import BreadCrumb from "../BreadCrumb";
import ActorDesc from '../ActorDesc';
import Spinner from "../Spinner";


//hook
import { useActorFetch } from "../../hooks/useActorFetch"

//image 
import NoImage from "../../images/no_image.jpg";


const ActorInfo = () => {
    const { id } = useParams();
    const { state: actor, loading, error } = useActorFetch(id)
    console.log(actor);


    if (loading)
        return <Spinner />
    if (error)
        return <div> Something went wrong....</div>

    return (
        <div>
            <BreadCrumb Title={actor.name} />
            <ActorDesc
                actor={actor}
                imageURL=
                {actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
            />

        </div>
    )





};


export default ActorInfo;
