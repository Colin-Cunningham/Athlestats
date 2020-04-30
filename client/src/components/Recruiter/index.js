import React from "react";
import Nav from "../Nav/index";
import Wrapper from "../Wrapper/Index";
import Link from "react-router-dom";

function Recruiter() {
  return (
    <>
      <Nav />
      <Wrapper>
        <div className="container-fluid">
          <h1>Recruiter</h1>
          <div className="bd-highlight">
            <div id="info1" className="p-2 bd-highlight cont">
              <i className="fas fa-dumbbell fa-3x"></i>
              <br />
              <p>
                Stay up to date on your latest stats, coordinate with your coach
                to see where you can improve your game! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dolore id dolor quibusdam
                quaerat, tempora commodi. Culpa, sunt incidunt porro placeat
                obcaecati ex quasi, rem ut aliquid error, officia cumque
                blanditiis.
              </p>
            </div>
            <div className="p-2 bd-highlight cont">
              <i className="fas fa-link fa-3x"></i>
              <br />
              <p>
                Link up with your team, just enter your team code and start
                keeping track of your stats! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Dolorum, quod fuga soluta enim
                facilis neque doloribus cupiditate porro aspernatur perferendis
                unde nihil eveniet nemo sapiente iusto dolorem obcaecati
                mollitia? Quod?
              </p>
            </div>
            <div className="p-2 bd-highlight cont">
              <i className="fas fa-hands-helping fa-3x"></i>
              <br />
              <p>
                A MAJOR goal of AthleStat is to connect you with recruiters in
                safe, productive ways. All recruiters are verified, and you will
                send you an email if interested. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aliquid ducimus, iusto tempora
                unde, labore hic velit perferendis quod veritatis eum assumenda
                est molestias voluptatibus neque modi architecto maxime deserunt
                autem.
              </p>
            </div>
            <Link to="/signup">
              <p value="Log in" className="login">
                Sound good for you? Register for free here!
              </p>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Recruiter;
