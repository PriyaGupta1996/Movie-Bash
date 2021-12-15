import React, { useState } from "react";
import { useParams } from 'react-router';
import { Content, Text } from '../ActorDesc/ActorDesc.styles';
import Thumb from "../Thumb";
import Timeline from "../Timeline";
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import twitter from "../../images/twitter.svg"
import Spinner from "../Spinner";


//hooks
import { useFetchSocial } from "../../hooks/useFetchSocial";




const ActorDesc = ({ actor, imageURL }) => {
    const { id } = useParams();
    let actor_year = new Date(actor.birthday).getFullYear();
    let today_year = new Date().getFullYear();
    let age = today_year - actor_year;
    const [readMore, setReadMore] = useState(true);
    const { state: social, error, loading } = useFetchSocial(id);

    console.log(social);

    //social Ids
    const insta = social.instagram_id;
    const fb = social.facebook_id;
    const tweet = social.twitter_id;

    if (loading)
        return <Spinner></Spinner>
    if (error)
        return <div>Cant display the social links</div>

    return (
        <Content>
            <div className="bio">
                <h1>{actor.name}</h1>

                <p className="bio-text">{actor.biography ? (readMore ? actor.biography.slice(0, 150) : actor.biography) : "The Biogpraphy is not available"}</p>
                <span className="hover-me" onClick={() => setReadMore(!readMore)}> {readMore ? "...read more" : "...show less"}</span>
                <Timeline />
            </div>

            <div className="aligns">
                <div className="photo">
                    <Thumb
                        image={imageURL} clickable={false} alt='movie-thumb'
                    />
                </div>
                <div className="social-links">
                    <img src={facebook} href="" alt="noimage"></img>
                    <a href="https://www.instagram.com/{insta}/" ><img src={instagram} alt="noimage"></img></a>
                    <img src={twitter} href=" " alt="noimage"></img>


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