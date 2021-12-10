import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

//Image
import searchIcon from "../../images/search-icon.svg"
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true); //so that the timer is not rendered again and again even when we have  not tocuhed the search field of input.

    useEffect(() => {

        if (initial.current) {
            initial.current = false;
            //console.log(initial.current+"HI");
            return;
        }
        // console.log(initial.current+"HI there");

        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    callback: PropTypes.func, //as it is a function which is going as an arguemnt. 
}
export default SearchBar;