import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { sortByDate } from "../../helpers"
//hook
import { useTimelineFetch } from "../../hooks/useTimelineFetch";


//components
import Spinner from "../Spinner";
import TimelineCredits from "../TimelineCredits";
import TAB from "../TAB";






const Timeline = () => {
    const { id } = useParams();
    const { state: timeline, loading, error } = useTimelineFetch(id);
    const [castOrder, setcastOrder] = useState("desc");
    const [crewOrder, setcrewOrder] = useState("desc");


    if (loading)
        return <Spinner />

    if (error)
        return <div> Something Went Wrong....</div>

    const sortedCast = sortByDate(timeline.cast, castOrder);
    const sortedCrew = sortByDate(timeline.crew, crewOrder);
    return (
        <>

            <TAB header="Acting">
                <select onChange={(e) => setcastOrder(e.target.value)} class="Acting-option">
                    <option value="desc">Newest first</option>
                    <option value="asc">Oldest first</option>
                </select>

                {sortedCast.map(castObject => (
                    <TimelineCredits
                        key={castObject.id}
                        date={castObject.release_date}
                        title={castObject.title}
                        character={castObject.character}
                    />

                ))
                }
            </TAB>

            <TAB header="Crew">
                <select onChange={(e) => setcrewOrder(e.target.value)} class="Crew-option">
                    <option value="desc">Newest first</option>
                    <option value="asc">Oldest first</option>
                </select>
                {sortedCrew.map(crewObject => (
                    <TimelineCredits
                        key={crewObject.id}
                        date={crewObject.release_date}
                        title={crewObject.title}
                        character={crewObject.job}
                    />

                ))
                }
            </TAB>


        </>
    )

}


export default Timeline;