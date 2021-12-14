import React from "react"
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
    //console.log(timeline.cast);
    //console.log(timeline.crew);

    if (loading)
        return <Spinner />

    if (error)
        return <div> Something Went Wrong....</div>

    const sortedCast = sortByDate(timeline.cast);
    const sortedCrew = sortByDate(timeline.crew);
    return (
        <>
            <TAB header="Acting">
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