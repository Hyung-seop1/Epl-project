import Today from "../component/Today";
import homeImg from "/src/img/homeImg.webp";

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
                    <img src={homeImg} alt="epl" />
                </div>
            </div>
            <div className="icons">
                <div
                    className="instagram"
                    onClick={() =>
                        window.open(
                            "https://www.instagram.com/premierleague/",
                            "_blank"
                        )
                    }
                >
                    <i class="bx bxl-instagram"></i>
                </div>
                <div
                    className="facebook"
                    onClick={() =>
                        window.open(
                            "https://www.facebook.com/premierleague/",
                            "_blank"
                        )
                    }
                >
                    <i class="bx bxl-facebook-square"></i>
                </div>
                <div
                    className="twitter"
                    onClick={() =>
                        window.open(
                            "https://x.com/premierleague?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                            "_blank"
                        )
                    }
                >
                    <i class="bx bxl-twitter"></i>
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
            <div>
                <p className="copyright">
                    Copyright &copy; 2024 All rights reserved.
                </p>
            </div>
        </>
    );
}
