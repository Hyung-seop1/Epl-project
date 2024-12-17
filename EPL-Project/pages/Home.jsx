import Today from "../component/Today";

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="content">
                    <h4>" WHERE PASSION MEETS THE PREMIER LEAGUE "</h4>
                    <h1>
                        Welcome to My <span className="fill">EPL</span>{" "}
                        Information Website
                    </h1>
                    <p>
                        CREATED BY : <span>HYUNG SEOP LEE</span>
                    </p>
                    <Today />
                    <button className="btn">My Profile</button>
                </div>
                <div className="image">
                    <img src="img/homeImg.webp" alt="epl" />
                </div>
            </div>
        </>
    )
}