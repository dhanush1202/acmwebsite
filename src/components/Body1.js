import React from "react";
import "./button.css";
import Typewriter from "typewriter-effect";
import "./typewriter.css";

export default function Body1() {
  return (
    <div>
      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="row">
          <div className="col-sm-4">
            <img src="acm_logo.png" alt="" style={{ height: "10rem" }} />
          </div>
          <div className="col-sm-8 my-4">
            <h2 className="type">
              
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("ASSOCIATION FOR COMPUTING MACHINERY STUDENT CHAPTER OF VNRVJIET")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("We raise by lifting others")
                    
                    .pauseFor(1000)
                    .deleteAll()
                    
                    .typeString("ASSOCIATION FOR COMPUTING MACHINERY STUDENT CHAPTER OF VNRVJIET")

                    .start();
                }}
              />
            </h2>
            <div className="container my-4">
              {/* buttons done */}

              <a href="#" className="cta">
                <span className="textbut">About Us</span>
                <svg
                  className="svg"
                  width="13px"
                  height="10px"
                  viewBox="0 0 13 10"
                >
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>

              <a href="" className="cta mx-5">
                <span>Contact us</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
