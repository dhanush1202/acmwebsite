import React from 'react';
import './background.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Body1 from './Body1';


export default function Back() {
    const options = {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ["#966988", "#866996"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.1
          },
          size: {
            value: { min: 1, max: 8 }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            }
          }
        }
      };
    
      const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
      }, []);
    
      return (
        <div className="App">
          <Particles options={options} init={particlesInit} />
          <Body1 className="items"/>
          

        </div>
      );
}
