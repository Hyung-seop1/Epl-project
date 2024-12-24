import { useEffect, useState } from "react";
import fixtureData from "../data/fixture.json";
import informationData from "../data/information.json";

export default function Standing() {
    const [teamsArray, setTeamsArray] = useState([]);

    useEffect(() => {
        let teamPoints = {};
        let teamName = {};
        let teamLogo = {};
        let matchPts = {};
        let win = {};
        let loose = {};
        let draw = {};
        let goalFor = {};
        let goalAgainst = {};
        let lastFive = {};

        informationData.teams.forEach((team) => {
            // initializing both id and name
            teamName[team.id] = team.name;
            teamPoints[team.id] = 0;
            teamLogo[team.id] = team.short_name;
            matchPts[team.id] = 0;
            win[team.id] = 0;
            loose[team.id] = 0;
            draw[team.id] = 0;
            goalFor[team.id] = 0;
            goalAgainst[team.id] = 0;
            lastFive[team.id] = [];
        });

        fixtureData.forEach((fixture) => {
            // If game is finished
            if (fixture.finished) {
                // Check for total points of each team, win, loose
                if (fixture.team_a_score > fixture.team_h_score) {
                    teamPoints[fixture.team_a] += 3;
                    win[fixture.team_a] += 1;
                    loose[fixture.team_h] += 1;
                    lastFive[fixture.team_a].push("W");
                    lastFive[fixture.team_h].push("L");
                } else if (fixture.team_a_score < fixture.team_h_score) {
                    teamPoints[fixture.team_h] += 3;
                    win[fixture.team_h] += 1;
                    loose[fixture.team_a] += 1;
                    lastFive[fixture.team_h].push("W");
                    lastFive[fixture.team_a].push("L");
                } else {
                    teamPoints[fixture.team_a] += 1;
                    teamPoints[fixture.team_h] += 1;
                    draw[fixture.team_a] += 1;
                    draw[fixture.team_h] += 1;
                    lastFive[fixture.team_a].push("D");
                    lastFive[fixture.team_h].push("D");
                }

                // Increment each team match potints
                matchPts[fixture.team_a] += 1;
                matchPts[fixture.team_h] += 1;

                // Caulating total goals for each team
                goalFor[fixture.team_a] += fixture.team_a_score;
                goalAgainst[fixture.team_a] += fixture.team_h_score;

                goalFor[fixture.team_h] += fixture.team_h_score;
                goalAgainst[fixture.team_h] += fixture.team_a_score;
            }
        });

        // Converting Word to Icon indicates W L D
        const convertToIcon = (results) => {
            return results.map((result, index) => (
                <span key={index} className="last">
                    {result === "W" ? (
                        <i className="bx bxs-check-circle"></i>
                    ) : result === "L" ? (
                        <i className="bx bxs-x-circle"></i>
                    ) : (
                        <i className="bx bxs-minus-circle"></i>
                    )}
                </span>
            ));
        };

        // Use the state setter to update the teamsArray state
        const updatedTeamsArray = Object.entries(teamPoints).map(
            ([id, points]) => ({
                id,
                name: teamName[id],
                points,
                logo: teamLogo[id],
                matchesPlayed: matchPts[id],
                matchWin: win[id],
                matchLoose: loose[id],
                matchDraw: draw[id],
                gf: goalFor[id],
                ga: goalAgainst[id],
                recentEvent: convertToIcon(lastFive[id].slice(-5)),
            })
        );

        // Sorting the array by points in descending order
        updatedTeamsArray.sort((a, b) => {
            // Check for GD between teams that has same points
            if (b.points == a.points) {
                return b.gf - b.ga - (a.gf - a.ga);
            } else {
                return b.points - a.points;
            }
        });
        // Update state with the sorted array
        setTeamsArray(updatedTeamsArray);
    }, []);

    return (
        <div className="standings">
            <table className="features">
                <thead className="season">
                    <tr>
                        <th colSpan="11">
                            Season
                            <br />
                            <span className="num">2024 - 25</span>
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr className="table-head">
                        <th>Pos</th>
                        <th>Club</th>
                        <th>Mp</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>Gf</th>
                        <th>Ga</th>
                        <th>Gd</th>
                        <th>Pts</th>
                        <th>Last 5</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {teamsArray.map((team, index) => (
                        <tr key={team.id}>
                            <td style={{ position: "relative" }}>
                                <div
                                    // Checks for the position and changes color
                                    className={`champs ${
                                        index + 1 <= 3
                                            ? "top-three"
                                            : index + 1 === 4
                                            ? "fourth"
                                            : index + 1 >= 18
                                            ? "last-three"
                                            : ""
                                    }`}
                                ></div>
                                {index + 1}
                            </td>
                            <td>
                                <div className="club">
                                    <img
                                        className="club-logo"
                                        src={`img/logo/${team.logo}.png`}
                                        alt={team.name}
                                    ></img>
                                    <span>{team.name}</span>
                                </div>
                            </td>
                            <td>{team.matchesPlayed}</td>
                            <td>{team.matchWin}</td>
                            <td>{team.matchDraw}</td>
                            <td>{team.matchLoose}</td>
                            <td>{team.gf}</td>
                            <td>{team.ga}</td>
                            <td>{team.gf - team.ga}</td>
                            <td>{team.points}</td>
                            <td>{team.recentEvent}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="champsInfo">
                <ul>
                    <p>
                        <b>Qualification/Relegation</b>
                    </p>
                    <li>
                        <div className="champions"></div>UEFA champions League
                        group stage
                    </li>
                    <li>
                        <div className="europa"></div>Europa League group stage
                    </li>
                    <li>
                        <div className="relegation"></div>Relegation
                    </li>
                </ul>
            </div>
        </div>
    );
}
