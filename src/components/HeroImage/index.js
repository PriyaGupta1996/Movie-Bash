import react from "react";
import PropTypes from "prop-types";

//styles
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ image, title, text }) =>
(
    <Wrapper image={image}>
        {/* first image is the prop */}
        <Content>
            <Text>
                <h1>{title}</h1>
                {/* javascript expression is written in {} in JSX. */}
                <p>{text}</p>
            </Text>
        </Content>

    </Wrapper>
)

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}





export default HeroImage;

