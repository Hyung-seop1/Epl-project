import { useEffect, useState } from "react";
import fixtureData from "../data/fixture.json";
import informationData from "../data/information.json";

export default function Matches() {
    const groupedData = fixtureData.reduce((acc, match) => {
        if (!acc[match.event]) {
            acc[match.event] = [];
        }
        acc[match.event].push(match);
        return acc;
    }, {});

    return (
        <>
            <div className="matchTable">
                {Object.entries(groupedData).map(([event, matches]) => (
                    <div key={event}>
                        <h2>Matchday {event} of 38</h2>
                        {matches.map((match, index) => (
                            <div key={index} className="eachEvent">
                                <div className="teamInfo">
                                    Team A: {match.team_a} {match.team_a_score}
                                    <br />
                                    Team H: {match.team_h} {match.team_h_score}
                                    <br />
                                </div>
                                <div>{match.kickoff_time}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            ;
        </>
    );
}
