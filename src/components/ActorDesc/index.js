import React from "react";
import { Content, Text } from '../ActorDesc/ActorDesc.styles';
import Thumb from "../Thumb";



const ActorDesc = ({ actor, gender, birth, place, known_as, imageURL }) => (

    <Content>
        <div className="bio">
            <h1>{actor.name}</h1>
            <p>Biography: {actor.biography ? `${actor.biography}` : `${"NA"}`}</p>
        </div>

        <div className="aligns">
            <div className="photo">
                <Thumb
                    image={imageURL} clickable={false} alt='movie-thumb'
                />
            </div>
            <Text>
                <h2 >Personal Info</h2>
                <p> Known For: {actor.known_for_department}</p>
                <p> Gender: {actor.gender === 2 ? `${"Male"}` : `${"Female"}`}</p>
                <p> Birthday: {actor.birthday ? `${actor.birthday}` : `${"NA"}`}</p>
                <p> Place of Birth: {actor.place_of_birth ? `${actor.place_of_birth}` : `${"NA"}`}</p>
                <p className="known"> Also Known As: {actor.also_known_as ? `${actor.also_known_as}` : `${"NA"}`}</p>
            </Text>
        </div>
    </Content >

)


export default ActorDesc;