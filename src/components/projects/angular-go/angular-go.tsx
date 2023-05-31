
export default function AngularGo() {
    return (
        <main className="project-main">
            <header className="project-header">

                <div className="project-heading-statement">
                    <h1>Azure Active Directory B2C Kata </h1>
                    <h3>JUST ME</h3>
                    <h2>An Adequately Rich Learning Project</h2>

                </div>

            </header>
            <article className="project-article">
                <div className="article-container">
                    <img src="/images/Play-1024x647.png" alt="play go" />
                    <div className="multi-col">
                        <div className="left-col-33">
                            <div className="p-title">SCOPE OF THE PROJECT</div>
                        </div>
                        <div className="right-col-rest">

                            <p>The purpose of the project is to provide an adequately rich domain for the
                                exploration of multiple technologies. In my experience, many learning projects are too simple to challenge a
                                developer to deeply exercise a technology. The developer can find themselves doing little more than
                                repeating the pre-packaged solutions provided in tutorials.</p>
                            <p>By being a relatively full featured project, this project helps me explore:</p>
                            <ul>
                                <li>Azure Active Directory B2C</li>
                                <li>Angular</li>
                                <li>Azure DevOps – CI/CD</li>
                                <li>Service Oriented Architecture</li>
                                <li>Docker</li>
                                <li>Micro Services</li>
                            </ul>
                            <p>4 User Interface projects share:</p>
                            <ul>
                                <li>A common domain logic API for game rules and player matching logic.
                                </li>
                                <li>A common Azure Active Directory B2C Membership Authentication system.</li>

                            </ul>


                            <p>TThe User Interface Projects:</p>
                            <ul>
                                <li>Angular Go Game</li>
                                <li>ASP.NET MVC Go Game</li>
                                <li>Console Application Go Game (nope, not kidding)</li>
                                <li>Service Oriented Architecture</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
            <article className="project-article">
                <div className="article-container">
                    <div className="multi-col">
                        <div className="left-col-33">
                            <div className="p-title">WHAT IS A “GO” GAME?</div>
                        </div>
                        <div className="right-col-rest">
                            <img src="/images/450px-FloorGoban.jpg" alt="go game" />
                            <p>“Go is an abstract strategy board game for two players, in which the aim is to surround more territory than the opponent. The game was invented in China more than 2,500 years ago and is believed to be the oldest board game continuously played to the present day.” Wikipedia</p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="project-article">
                <div className="article-container">
                    <div className="multi-col">
                        <div className="left-col-33">
                            <div className="p-title">COMPARING GO TO CHESS</div>
                        </div>
                        <div className="right-col-rest">
                            <p>Like Chess, Go is a two person board game where chance plays no role in
                                deciding the outcome of the game. Both games have steep learning curves
                                and players can spend decades improving their skills in either game.
                            </p>
                            <p>That said, an argument can be made that Go is considerably more difficult
                                for computer algorithms to “learn” and it has proven to be more difficult
                                for computers to compete with master Go players.
                            </p>
                            <p>It required approximately 20 more years for computer based strategies to
                                compete in Go than in Chess. Google Deep Mind defeated world the champion
                                Go Player in 2016 (approximately 20 years after a computers began to dominate
                                human chess players). It was not possible for computer algorithms to compete
                                with human Go champions until machine learning technologies reached an adequate
                                level of maturity.
                            </p>
                            <p>Here is one comparison that helps explain why Go is more challenging for computer
                                algorithms than Chess. There are just vastly more possible moves in Go than in chess.
                                The following compares just the possible options in <b>just the first two moves</b>
                                of each game.
                            </p>
                            <p>Possible first and second moves in chess = 20 * 20 = 400.</p>
                            <p>Possible first and second moves in Go = 362 * 361 = 130,682.</p>
                            <p>A rough approximation of the <b>order of magnitude</b> of all the possible moves in a
                                Go game is 362! (362 factorial = 362*361*360…*2*1). Its a really big number in
                                the neighborhood of 5 followed by 770 zeros. That is considerably more than the
                                number of atoms in the known universe, in case you were wondering.</p>
                            <p>Thus, the “brute force” mapping of all useful moves as has been practiced in Chess,
                                is not feasible in Go.</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="project-article">
                <div className="article-container">
                    <div className="multi-col">
                        <div className="left-col-33">
                            <div className="p-title">APPLICATION FEATURES</div>
                        </div>
                        <div className="right-col-rest">
                            <p>Register as a new member and later login to use the Go Game application via Azure B2C.
                            </p>
                            <img src="/images/login.png" alt="login" />
                            <p>View your games in progress.
                            </p>
                            <img src="/images/availableGames-1024x498.png"  alt="available games" />
                            <p>Search for other users and invite them to play a game.
                            </p>
                            <img src="/images/Search-1024x722.png"  alt="search" />
                            <p>View your open invitations from other players and “accept” or “reject” them.
                            </p>
                            <img src="/images/Invitations.png"  alt="invitatioins" />
                            <p>Play the game. Users can enter moves by clicking on the grid when it is their turn.</p>
                            <img src="/images/Play-1024x647.png"  alt="play" />
                            <p>Note: The application does not play go against you. It only facilitates games between
                                users, referees each move and keeps a record of “captured stones” which are used in computing
                                each players score. The application also enforces the rules of the game including “ko” and
                                the rule against moves that kill your own stones. The application cannot yet compute the final
                                score of a go game.</p>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}