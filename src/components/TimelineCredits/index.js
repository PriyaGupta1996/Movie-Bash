import react from "react";
import { Wrapper } from "./TimelineCredits.styles"

const TimelineCredits = ({ date, title, character }) => {

    //let year = (new Date(date)).getFullYear();



    let year = date?.substring(0, 4);
    return (
        <Wrapper>
            <p>{date ? year : "--"} <text className="title"> {title} </text> as  < text className="character"> {character} </text> </p>
        </Wrapper>
    )


}

export default TimelineCredits;