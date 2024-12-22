import { useEffect, useState } from "react";
import fixtureData from "../data/fixture.json";
import informationData from "../data/information.json";

function Stats() {
    const [playersArray, setPlayersArray] = useState([]);

    useEffect(() => {
        let goals = {};
        let teamName = {};
        let teamLogo = {};
        let playerName = {};
        let assists = 0;

        informationData.teams.forEach((team) => {
            teamName[team.id] = team.name;
            teamLogo[team.id] = team.short_name;
        });

        informationData.elements.forEach((element) => {
            goals[element.id] = 0;
            assists[element.id] = 0;
            playerName[
                element.id
            ] = `${element.first_name} ${element.second_name}`;
        });

        fixtureData.forEach((fixture) => {
            // If game is finished
            if (fixture.finished) {
                const goalStatus = fixture.stats.find(
                    (stat) => stat.identifier === "goals_scored"
                );
                const assistStatus = fixture.stats.find(
                    (stat) => stat.identifier === "assists"
                );
                if (goalStatus) {
                    goalStatus.h.forEach((goal) => {
                        goals[goal.element] += 1;
                    });
                    goalStatus.a.forEach((goal) => {
                        goals[goal.element] += 1;
                    });
                }
            }
        });

        const updatedPlayersArray = informationData.elements.map((element) => ({
            id: element.id,
            goal: goals[element.id],
            name: teamName[element.team],
            logo: teamLogo[element.team],
            player: playerName[element.id],
        }));

        const topPlayers = updatedPlayersArray
            .sort((a, b) => b.goal - a.goal)
            .slice(0, 5);

        setPlayersArray(topPlayers);
    }, []);

    return (
        <div className="stats">
            <h2 className="header">Goals</h2>
            <table className="features">
                <thead>
                    <tr className="table-head">
                        <th></th>
                        <th>Club</th>
                        <th>Player</th>
                        <th>Goals</th>
                    </tr>
                </thead>
                <tbody>
                    {playersArray.map((team, index) => (
                        <tr key={team.id}>
                            <td>{index + 1}</td>
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
                            <td>{team.player}</td>
                            <td>{team.goal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="header">
                <br />
                Assists
            </h2>
            <table className="features">
                <thead>
                    <tr className="table-head">
                        <th></th>
                        <th>Club</th>
                        <th>Player</th>
                        <th>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    {playersArray.map((team, index) => (
                        <tr key={team.id}>
                            <td>{index + 1}</td>
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
                            <td>{team.player}</td>
                            <td>{team.goal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Stats;
