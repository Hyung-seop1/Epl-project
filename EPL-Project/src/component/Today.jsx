/**
 * @file Today.jsx
 * @description A React functional component that displays the current date in the format YYYY-MM-DD.
 * The date is updated dynamically using the `useEffect` hook and displayed inside a paragraph tag.
 *
 * @author Hyung-seop Lee
 * @date Jan. 2, 2025
 *
 * Usage:
 * Import this component and include it in your JSX code to display the current date:
 *
 */

import { useState, useEffect } from "react";

function Today() {
    const [currentDate, setCurrentDate] = useState("");
    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toISOString().split("T")[0]; // Format to YYYY-MM-DD
        setCurrentDate(formattedDate);
    });
    return (
        <p>
            UPDATED : <span id="date">{currentDate}</span>
        </p>
    );
}

export default Today;
