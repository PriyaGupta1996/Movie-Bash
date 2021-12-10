import React from "react";
import PropTypes from 'prop-types';

//styles

import { Wrapper, Image } from './Actor.styles';
import { Link } from 'react-router-dom';

const Actor = ({ clickable, id, name, character, imageUrl }) => (

    <Wrapper>

        {clickable ? (

            <Link to={`/person/${id}`}>
                <Image src={imageUrl} alt='actor-thumb' />
            </Link>) : (<Image src={imageUrl} alt='actor-thumb' />)}
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);
Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,

}
export default Actor;