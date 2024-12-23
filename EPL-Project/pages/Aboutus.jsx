export default function Aboutus() {
    return (
        <>
            <div className="aboutUs">
                <div>
                    <img src="img/Winner.jpg.webp" alt="epl" />
                </div>
                <div className="introduce">
                    <div className="photo">
                        <img src="img/me.jpg" className="me"></img>
                    </div>
                    <div className="content">
                        <h2>About Me</h2>
                        <p>
                            "This website was created out of a deep passion for
                            football. My interest in the Premier League (EPL)
                            grew significantly after becoming a fan of Tottenham
                            Hotspur and following Son Heung-min's remarkable
                            performances. This project was developed using
                            React, and although there are areas for improvement,
                            I am committed to continually enhancing it. Through
                            this process, I have gained valuable experience in
                            learning new technologies and solving problems,
                            which has contributed to my personal and
                            professional growth."
                        </p>
                        <div className="personalLink">
                            <h3>More Info:</h3>
                            <div className="linkofmine">
                                <div className="aboutme-linkedin"></div>
                                <i class="bx bxl-linkedin-square"></i>
                                <i class="bx bxl-github"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
