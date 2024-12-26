import { useEffect, useState } from "react";
import fixtureData from "../data/fixture.json";
import informationData from "../data/information.json";

export default function Matches() {
    const [teamsArray, setTeamsArray] = useState([]);

    useEffect(() => {
        let teamName = {};
        let teamLogo = {};
        let teamGoal = {};
    });

    informationData.teams.forEach((team) => {
        teamName[team.id] = team.name;
        teamLogo[team.id] = team.short_name;
        teamGoal[team.id] = 0;
    });

    fixtureData.forEach((fixture) => {
        // If game is finished
        if (fixture.finished) {
            // Check for total points of each team, win, loose
            if (fixture.team_a_score > fixture.team_h_score) {
                teamGoal[fixture.team_a] += fixture.team_a_score;
            } else if (fixture.team_a_score < fixture.team_h_score) {
                teamPoints[fixture.team_h] += 3;
            } else {
                teamPoints[fixture.team_a] += 1;
                teamPoints[fixture.team_h] += 1;
            }
        }

        // Use the state setter to update the teamsArray state
        const updatedTeamsArray = Object.entries(teamPoints).map(
            ([id, points]) => ({
                id,
                name: teamName[id],
                points,
                logo: teamLogo[id],
            })
        );

        // Update state with the sorted array
        setTeamsArray(updatedTeamsArray);
    }, []);

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Matchday {} of 38</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
