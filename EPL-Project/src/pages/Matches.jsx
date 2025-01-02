/**
 * @file Matches.jsx
 * @description This file defines the `Matches` component, which displays match information for the
 * English Premier League (EPL). The component utilizes fixture data and team information to render
 * match details, including team names, logos, scores, and kickoff times. Users can navigate through
 * matchdays using previous and next buttons, with match data grouped by event (matchday).
 *
 * Features:
 * - Displays match details for the current matchday, including team names, logos, scores, and kickoff times.
 * - Navigation to view previous and next matchdays.
 * - Uses `useEffect` for data grouping and mapping team IDs to names and logos.
 * - Utilizes date-fns for formatting kickoff times.
 *
 * Data Sources:
 * - `fixture.json`: Contains fixture information such as matchdays, teams, scores, and kickoff times.
 * - `information.json`: Contains team details, including IDs, names, and short names for mapping logos.
 *
 * @author Hyung-seop Lee
 * @date Jan.2.2025
 *
 */

import { useEffect, useState } from "react";
import fixtureData from "../../data/fixture.json";
import informationData from "../../data/information.json";
import format from "date-fns/format";
import logos from "../component/getImg";

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
                                    src={
                                        logos[teamsArray.teamLogo[match.team_a]]
                                    }
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
                                    src={
                                        logos[teamsArray.teamLogo[match.team_h]]
                                    }
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
