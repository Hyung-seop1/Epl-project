import { useEffect, useState } from "react";
import fixtureData from "../data/fixture.json";
import informationData from "../data/information.json";

function Standing() {
  const [teamsArray, setTeamsArray] = useState([]);

  useEffect(() => {
    let teamPoints = {};
    let teamName = {};
    let teamLogo = {};
    let matchPts = {};

    informationData.teams.forEach((team) => {
      // initializing both id and name
      teamName[team.id] = team.name;
      teamPoints[team.id] = 0;
      teamLogo[team.id] = team.short_name;
      matchPts[team.id] = 0;
    });

    fixtureData.forEach((fixture) => {
      // If game is finished
      if (fixture.finished) {
        // Check for total points of each team
        if (fixture.team_a_score > fixture.team_h_score) {
          teamPoints[fixture.team_a] += 3;
        } else if (fixture.team_a_score < fixture.team_h_score) {
          teamPoints[fixture.team_h] += 3;
        } else {
          teamPoints[fixture.team_a] += 1;
          teamPoints[fixture.team_h] += 1;
        }

        // Increment each team match potints
        matchPts[fixture.team_a] += 1;
        matchPts[fixture.team_h] += 1;
      }
    });

    // Use the state setter to update the teamsArray state
    const updatedTeamsArray = Object.entries(teamPoints).map(
      ([id, points]) => ({
        id,
        name: teamName[id],
        points,
        logo: teamLogo[id],
        matchesPlayed: matchPts[id],
      })
    );

    // Sorting the array by points in descending order
    updatedTeamsArray.sort((a, b) => b.points - a.points);
    setTeamsArray(updatedTeamsArray); // Update state with the sorted array
  }, []);

  return (
    <div className="standings">
      <table className="features">
        <thead className="season">
          <tr>
            <th colSpan="10">
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
          </tr>
        </thead>
        <tbody>
          {teamsArray.map((team, index) => (
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
              <td>{team.matchesPlayed}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Standing;
