/**
 * @file Stats.jsx
 * @description This file defines the `Stats` component, which displays player performance statistics
 * for the English Premier League (EPL). The component visualizes data related to player
 * goals, assists, yellow cards, and red cards. It provides a detailed view of top-performing players
 * in various aspects of the game, showcasing club affiliation and statistics.
 *
 * Features:
 * - Displays player statistics including goals, assists, yellow cards, and red cards.
 * - Sorting players by performance in each category (goals, assists, yellow/red cards).
 * - Visualization of player contributions and disciplinary actions.
 * - Utilizes data from `fixture.json` and `information.json` to dynamically update player statistics.
 *
 * Data Sources:
 * - `fixture.json`: Contains match fixture information and player statistics for goals, assists, and cards.
 * - `information.json`: Provides details of players and teams including IDs, names, short names, and team affiliations.
 *
 * @author Hyung-seop Lee
 * @date Jan.2.2025
 *
 */

import { useEffect, useState } from "react";
import fixtureData from "../../data/fixture.json";
import informationData from "../../data/information.json";
import logos from "../component/getImg";

export default function Stats() {
    const [playersArray, setPlayersArray] = useState([]);
    const [assistArray, setAssistArray] = useState([]);
    const [yellowArray, setYellowArray] = useState([]);
    const [redArray, setRedArray] = useState([]);

    useEffect(() => {
        let goals = {};
        let teamName = {};
        let teamLogo = {};
        let playerName = {};
        let assists = {};
        let yellows = {};
        let reds = {};

        informationData.teams.forEach((team) => {
            teamName[team.id] = team.name;
            teamLogo[team.id] = team.short_name;
        });

        // Initializing the data that need
        informationData.elements.forEach((element) => {
            goals[element.id] = 0;
            assists[element.id] = 0;
            yellows[element.id] = 0;
            reds[element.id] = 0;
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
                const yellowStatus = fixture.stats.find(
                    (stat) => stat.identifier === "yellow_cards"
                );
                const redStatus = fixture.stats.find(
                    (stat) => stat.identifier === "red_cards"
                );
                if (goalStatus) {
                    goalStatus.h.forEach((goal) => {
                        goals[goal.element] += goal.value;
                    });
                    goalStatus.a.forEach((goal) => {
                        goals[goal.element] += goal.value;
                    });
                }

                if (assistStatus) {
                    assistStatus.h.forEach((assist) => {
                        assists[assist.element] += assist.value;
                    });
                    assistStatus.a.forEach((assist) => {
                        assists[assist.element] += assist.value;
                    });
                }

                if (yellowStatus) {
                    yellowStatus.h.forEach((yellow) => {
                        yellows[yellow.element] += yellow.value;
                    });
                    yellowStatus.a.forEach((yellow) => {
                        yellows[yellow.element] += yellow.value;
                    });
                }

                if (redStatus) {
                    redStatus.h.forEach((red) => {
                        reds[red.element] += red.value;
                    });
                    redStatus.a.forEach((red) => {
                        reds[red.element] += red.value;
                    });
                }
            }
        });

        const updatedPlayersArray = informationData.elements.map((element) => ({
            id: element.id,
            name: teamName[element.team],
            logo: teamLogo[element.team],
            player: playerName[element.id],
            goal: goals[element.id],
            assist: assists[element.id],
            yellowCard: yellows[element.id],
            redCard: reds[element.id],
        }));

        const topPlayers = updatedPlayersArray
            .sort((a, b) => b.goal - a.goal)
            .slice(0, 5);

        const topAssist = updatedPlayersArray
            .sort((a, b) => b.assist - a.assist)
            .slice(0, 5);

        const topYellow = updatedPlayersArray
            .sort((a, b) => b.yellowCard - a.yellowCard)
            .slice(0, 7);

        const topRed = updatedPlayersArray
            .sort((a, b) => b.redCard - a.redCard)
            .slice(0, 10);

        setPlayersArray(topPlayers);
        setAssistArray(topAssist);
        setYellowArray(topYellow);
        setRedArray(topRed);
    }, []);

    return (
        <div className="stats">
            <h2 className="header">Goals</h2>
            <table className="features">
                <thead>
                    <tr className="table-head">
                        <th>Player</th>
                        <th>Club</th>
                        <th>Goals</th>
                    </tr>
                </thead>
                <tbody>
                    {playersArray.map((team) => (
                        <tr key={team.id}>
                            <td className="yellowName">{team.player}</td>
                            <td>
                                <div className="club">
                                    <img
                                        className="club-logo"
                                        src={logos[team.logo]}
                                        alt={team.name}
                                    ></img>
                                    <span>{team.name}</span>
                                </div>
                            </td>

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
                        <th>Player</th>
                        <th>Club</th>
                        <th>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    {assistArray.map((team) => (
                        <tr key={team.id}>
                            <td>{team.player}</td>
                            <td>
                                <div className="club">
                                    <img
                                        className="club-logo"
                                        src={logos[team.logo]}
                                        alt={team.name}
                                    ></img>
                                    <span>{team.name}</span>
                                </div>
                            </td>

                            <td>{team.assist}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="header">
                <br />
                Yellow cards
                <div className="yellow"></div>
            </h2>
            <table className="features">
                <thead>
                    <tr className="table-head">
                        <th>Player</th>
                        <th>Club</th>
                        <th>Yellow cards</th>
                    </tr>
                </thead>
                <tbody>
                    {yellowArray.map((team) => (
                        <tr key={team.id}>
                            <td>{team.player}</td>
                            <td>
                                <div className="club">
                                    <img
                                        className="club-logo"
                                        src={logos[team.logo]}
                                        alt={team.name}
                                    ></img>
                                    <span>{team.name}</span>
                                </div>
                            </td>
                            <td>{team.yellowCard}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="header">
                <br />
                Red Cards
                <div className="red"></div>
            </h2>
            <table className="features">
                <thead>
                    <tr className="table-head">
                        <th>Player</th>
                        <th>Club</th>
                        <th>Red Cards</th>
                    </tr>
                </thead>
                <tbody>
                    {redArray.map((team) => (
                        <tr key={team.id}>
                            <td>{team.player}</td>
                            <td>
                                <div className="club">
                                    <img
                                        className="club-logo"
                                        src={logos[team.logo]}
                                        alt={team.name}
                                    ></img>
                                    <span>{team.name}</span>
                                </div>
                            </td>
                            <td>{team.redCard}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
