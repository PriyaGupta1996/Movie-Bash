import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

import { Wrapper, Content } from './BreadCrumb.styles';


const BreadCrumb = ({ Title }) =>
(

    <Wrapper>
        <Content>
            <Link to="/"> <span>Home</span></Link>
            <span>|</span>
            <span>{Title}</span>
        </Content>
    </Wrapper>
)

BreadCrumb.propTypes = {
    Title: Proptypes.string
}

export default BreadCrumb;