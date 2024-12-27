import { useEffect, useState } from "react";
import fixtureData from "../data/fixture.json";
import informationData from "../data/information.json";

export default function Matches() {
    const [currentEvent, setCurrentEvent] = useState(1);
    const totalEvents = 38;
    const groupedData = fixtureData.reduce((acc, match) => {
        if (!acc[match.event]) {
            acc[match.event] = [];
        }
        acc[match.event].push(match);
        return acc;
    }, {});

    const handlePrevEvent = () => {
        if (currentEvent > 1) {
            setCurrentEvent(currentEvent - 1);
        }
    };

    const handleNextEvent = () => {
        if (currentEvent < totalEvents) {
            setCurrentEvent(currentEvent + 1);
        }
    };
    return (
        <>
            <div className="matchTable">
                <h2 className="mathTitle">
                    <div className="prev">
                        <i
                            className="bx bxs-left-arrow"
                            onClick={handlePrevEvent}
                        ></i>
                    </div>
                    <div>
                        Matchday {currentEvent} of {totalEvents}
                    </div>

                    <div className="next">
                        <i
                            className="bx bxs-right-arrow"
                            onClick={handleNextEvent}
                        ></i>
                    </div>
                </h2>
                {groupedData[currentEvent]?.map((match, index) => (
                    <div key={index} className="eachEvent">
                        <div className="teamInfo">
                            Team A: {match.team_a} {match.team_a_score}
                            <br />
                            Team H: {match.team_h} {match.team_h_score}
                            <br />
                        </div>
                        <div className="matchTime">{match.kickoff_time}</div>
                    </div>
                ))}
            </div>
        </>
    );
}
