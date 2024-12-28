export default function Aboutus() {
    return (
        <>
            <div className="aboutUs">
                <div className="aboutme-background">
                    <img src="src/img/Winner.jpg.webp" alt="epl" />
                </div>
                <div className="introduce">
                    <div className="photo">
                        <img src="src/img/me.jpg" className="me"></img>
                    </div>
                    <div className="content">
                        <h2>About Us</h2>
                        <p>
                            "This website was created out of a deep passion for
                            football. My interest in the Premier League (EPL)
                            grew significantly after becoming a fan of Tottenham
                            Hotspur and following Son Heung-min's remarkable
                            performances. This project was developed using React
                            and integrates data from the Fantasy Premier League
                            API (fantasy.premierleague.com/api) to provide
                            real-time statistics and insights. Through this
                            process, I have gained valuable experience in
                            learning new technologies, solving problems, and
                            working with APIs, which has contributed to my
                            personal and professional growth."
                        </p>
                        <div className="personalLink">
                            <h3>More Information:</h3>
                            <div className="linkofmine">
                                <a
                                    href="https://www.linkedin.com/in/hyungseop-lee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bx bxl-linkedin-square"></i>
                                </a>
                                <a
                                    href="https://github.com/Hyung-seop1/Epl-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="bx bxl-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
