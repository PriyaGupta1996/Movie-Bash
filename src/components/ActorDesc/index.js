import React from "react";
import { Content, Text } from '../ActorDesc/ActorDesc.styles';
import Thumb from "../Thumb";
import Timeline from "../Timeline";



const ActorDesc = ({ actor, imageURL }) => {

    let actor_year = new Date(actor.birthday).getFullYear();
    let today_year = new Date().getFullYear();
    let age = today_year - actor_year;



    return (
        <Content>
            <div className="bio">
                <h1>{actor.name}</h1>
                <p className="bio-text">{actor.biography ? `${actor.biography}` : `${"The Biogpraphy is not available"}`}</p>
                <Timeline />
            </div>

            <div className="aligns">
                <div className="photo">
                    <Thumb
                        image={imageURL} clickable={false} alt='movie-thumb'
                    />
                </div>
                <Text>
                    <h2  >Personal Info</h2>
                    <h3 className="actor-detail-heading"> Known For : </h3> {actor.known_for_department}
                    <p></p>
                    <h3 className="actor-detail-heading">Gender : </h3> {actor.gender === 2 ? "Male" : "Female"}
                    <p></p>
                    <h3 className="actor-detail-heading">Birthday : </h3>{actor.birthday ? actor.birthday + " (" + age + " years old )" : "NA"}
                    <p></p>
                    <h3 className="actor-detail-heading">Place of Birth :</h3> {actor.place_of_birth ? actor.place_of_birth : "NA"}
                    <p></p>
                    <h3 className="actor-detail-heading">Also Known As : </h3> {actor.also_known_as ? actor.also_known_as.map(name => <p>{name}</p>) : "NA"}

                </Text>
            </div>
        </Content >
    )

}


export default ActorDesc;