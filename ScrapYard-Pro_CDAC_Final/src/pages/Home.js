import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <>
      {/* <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>e-Scrap Yard</h1>
          <br />
          <p>Earn from Scrap</p>
          <Link to="/about">
            <button> Explore Here </button>
          </Link>
        </div>
      </div> */}
      <div className="container my-5 py-5">
        <div className="row">
          {/* <div className="col-sm-3">
            <div className="card my-2">
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">
                  An active item
                </li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div> */}
          {/* </div> */}
          {/* <div className="col-sm-9">
            <div className="row"> */}
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images (2).jpeg`}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">E-ScrapYard</h4></a>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images (1).jpeg`}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">E-ScrapYard</h4></a>
            
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images.jpeg`}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">E-ScrapYard</h4></a>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/grabber.jpg`}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">E-ScrapYard</h4></a>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/banner.jpg`}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">E-ScrapYard</h4></a>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/banneer.jpg`}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">E-ScrapYard</h4></a>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div>
      </div> */}
    </>
  );
}

export default Home;