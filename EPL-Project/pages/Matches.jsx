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
            <div>
                {Object.entries(groupedData).map(([event, matches]) => (
                    <div key={event}>
                        <h2>Matchday {event} of 38</h2>
                        {matches.map((match, index) => (
                            <div key={index}>
                                <strong>Team A:</strong> {match.team_a}
                                <br />
                                <strong>Team H:</strong> {match.team_h}
                                <br />
                                <hr />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            ;
        </>
    );
}
