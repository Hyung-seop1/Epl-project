export default function Navbar() {
    return (
        <nav>
                <div class="nav-logo">
                    <a href="index.html">
                        <img src="img/epl_logo.png" alt="logo" />
                    </a>
                </div>
                <ul class="nav-links">
                    <li class="link">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="link">
                        <a href="#">Teams</a>
                    </li>
                    <li class="link">
                        <a href="#">Players</a>
                    </li>
                    <li class="link">
                        <a href="#">Standings</a>
                    </li>
                    <li class="link">
                        <a href="#">Stats</a>
                    </li>
                </ul>
                <button class="btn">Login</button>
            </nav>
    )
}