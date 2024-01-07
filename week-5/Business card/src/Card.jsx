import React from 'react';
import './Card.css';

export function Card(props) {
  return (
    <div className="center">
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              {/* Your card content */}
              <h2 className="name" style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>{props.name}</h2>
              <p className="description" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>{props.description}</p>
              <br />
              <h3 className="Intrests" style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px' }}>Interests</h3>
              <ul style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
                <li>{props.intrest1}</li>
                <li>{props.intrest2}</li>
              </ul>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle" style={{ backgroundColor: 'lightgreen' }}></div>
              <div className="circle" id="right" style={{ backgroundColor: 'lightpink' }}></div>
              <div className="circle" id="bottom" style={{ backgroundColor: 'lightsalmon' }}></div>
            </div>
            <div className="front-content">
              <div className="buttons-container">
                <button className="buttonTwitter" style={{ backgroundColor: 'lightcoral', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>Twitter</button>
                <button className="buttonLinkedin" style={{ backgroundColor: 'lightblue', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>LinkedIn</button>
              </div>
              <div className="description">
                <div className="title">
                  <p className="title" style={{ fontSize: '18px' }}>
                    <strong>{props.name}</strong>
                  </p>
                  <svg
                    fillRule="nonzero"
                    height="15px"
                    width="15px"
                    viewBox="0,0,256,256"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      style={{ mixBlendMode: 'normal' }}
                      textAnchor="none"
                      fontSize="none"
                      fontWeight="none"
                      fontFamily="none"
                      strokeDashoffset="0"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeWidth="1"
                      stroke="none"
                      fillRule="nonzero"
                      fill="#20c997"
                    >
                      <g transform="scale(8,8)">
                        <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="card-footer" style={{ color: 'lightgrey', fontSize: '12px' }}>Custom Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
