import { useEffect, useState } from "react";
import fixtureData from "../data/fixture.json";
import informationData from "../data/information.json";

function Stats() {
    return (
        <div className="stats">
            <h2 className="header">Stats</h2>
            <table className="features">
                <thead>
                    <tr className="table-head">
                        <th>Club</th>
                        <th>Player</th>
                        <th>Goals</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Manchester City</td>
                        <td>Elin Haaland</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Stats;
