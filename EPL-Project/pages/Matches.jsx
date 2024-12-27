import { useEffect, useState } from "react";
import fixtureData from "../data/fixture.json";
import informationData from "../data/information.json";
import format from "date-fns/format";

export default function Matches() {
    // Set as default "1" for match day
    const [currentEvent, setCurrentEvent] = useState(1);
    const totalEvents = 38;
    const [teamsArray, setTeamsArray] = useState({});
    const [groupedData, setGroupedData] = useState({});

    useEffect(() => {
        let teamName = {};
        let teamLogo = {};

        informationData.teams.forEach((team) => {
            teamName[team.id] = team.name;
            teamLogo[team.id] = team.short_name;
        });

        setTeamsArray({ teamName, teamLogo });

        // Grouping the fixture data
        const grouped = fixtureData.reduce((acc, match) => {
            if (!acc[match.event]) {
                acc[match.event] = [];
            }
            acc[match.event].push(match);
            return acc;
        }, {});
        setGroupedData(grouped);
    }, []);

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
                            <div className="teamA">
                                <img
                                    className="club-logo"
                                    src={`img/logo/${
                                        teamsArray.teamLogo[match.team_a]
                                    }.png`}
                                    alt={teamsArray.teamName[match.team_a]}
                                />
                                <div className="teamAName">
                                    {teamsArray.teamName[match.team_a]}
                                </div>
                                <div className="teamScore">
                                    {match.team_a_score}
                                </div>
                            </div>
                            <div className="teamH">
                                <img
                                    className="club-logo"
                                    src={`img/logo/${
                                        teamsArray.teamLogo[match.team_h]
                                    }.png`}
                                    alt={teamsArray.teamName[match.team_h]}
                                />
                                <div className="teamHName">
                                    {teamsArray.teamName[match.team_h]}
                                </div>
                                <div className="teamScore">
                                    {match.team_h_score}
                                </div>
                            </div>
                        </div>
                        <div className="matchTime">
                            {format(new Date(match.kickoff_time), "EEE, MMM d")}
                            <div>
                                {format(new Date(match.kickoff_time), "h:mm a")}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
