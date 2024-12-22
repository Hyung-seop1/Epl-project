import Today from "../component/Today";

export default function Home() {
    return (
        <>
            <div className="home">
                <span className="blur"></span>
                <span className="blur"></span>
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
                </div>
                <div className="image">
                    <img src="img/homeImg.webp" alt="epl" />
                </div>
            </div>
            <div className="icons">
                <div className="profile">
                    <i class="bx bxs-user-rectangle"></i>
                </div>
                <div
                    className="linkedIn"
                    onClick={() =>
                        window.open(
                            "https://www.linkedin.com/in/hyungseop-lee",
                            "_blank"
                        )
                    }
                >
                    <i class="bx bxl-linkedin-square"></i>
                </div>
                <div
                    className="gitHub"
                    onClick={() =>
                        window.open(
                            "https://github.com/Hyung-seop1/Epl-project",
                            "_blank"
                        )
                    }
                >
                    <i class="bx bxl-github"></i>
                </div>
            </div>
        </>
    );
}
