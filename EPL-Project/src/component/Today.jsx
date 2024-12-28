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
