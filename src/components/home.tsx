import { Link } from "react-router-dom"

export default function Home(){
    return (

    <main id="home-main">
    <header id="main-header">
      <div id="title-box-container">
        <div id="title-box">
          <div id="heading-name">STEVE LEVESCONTE</div>
          <div className="heading-statement">
            <h1>This is what I do. Look at it. If you like it, come find me.
              <span className="tooltip">*
                <span className="tooltiptext">* This is a quote from Nadieh Bremer’s “Being Freelance” podcast from April
                  26, 2020.</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <svg id="angle-hider" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0 0, 1200 200, 0 200" fill="#fff" />
      </svg>
    </header>
    <article id="hello-article">
      <header id="hello-header">
        HELLO
      </header>
      <div className="hello-copy">
        <h2>
          Welcome to “what I do”. On this site, I explain my personal development projects and show some of my
          professional work.</h2>
      </div>
    </article>
    <article>
      <header id="my-work-header">
        MY WORK
      </header>
      <div id="project-container">
        <div id="project-1">
          <div className="nav-link-box nav-link" id="nav-link-1">
            <div className="nav-link-inside-cont">
              <h3 className="nav-label">Public Access Portal</h3>
              <div className="nav-button-holder">
                <Link className="g-bitton nav-button" to="/projects/public-access" >VIEW PROJECT</Link>
              </div>
            </div>
          </div>
        </div>
        <div id="project-2">
          <div className="nav-link-box nav-link" id="nav-link-2">
            <div className="nav-link-inside-cont">
              <h3 className="nav-label">Public Payment Portal</h3>
              <div className="nav-button-holder">
                <Link className="g-bitton nav-button" to="/projects/public-payment" >VIEW PROJECT</Link>  
              </div>
            </div>
          </div>
        </div>
        <div id="project-3">
          <div className="nav-link-box nav-link" id="nav-link-3">
            <div className="nav-link-inside-cont">
              <h3 className="nav-label">Angular Azure B2C Membership Kata</h3>
              <div className="nav-button-holder">
                <Link className="g-bitton nav-button" to="/projects/angular-go" >VIEW PROJECT</Link>
              </div>
            </div>
          </div>
        </div>
        <div id="project-4">
          <div className="nav-link-box nav-link" id="nav-link-4">
            <div className="nav-link-inside-cont">
              <h3 className="nav-label">Docker Hosted Word Press</h3>
              <div className="nav-button-holder">
                <Link className="g-bitton nav-button" to="/projects/docker-wordpress" >VIEW PROJECT</Link>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </article>
  </main>

    )
}