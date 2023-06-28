import React from "react";

export default function Info() {
  return (
    <div className="info-section">
      <h3 className="name">Kgotso Makhalimele</h3>
      <p className="description">Software Developer</p>

      <div className="contact-btn">
        <a href="mailto:kgotsom@protonmail.com">
        <sl-button size="small">
          <sl-icon name="envelope-at"></sl-icon> Email{" "}
        </sl-button>
        </a>
        <a href="https:github.com/kgotsosm" target="_blank">
        <sl-button size="small">
          <sl-icon name="github"></sl-icon> GitHub
        </sl-button>
        </a>
        <a href="https://www.linkedin.com/in/kgotso-makhalimele/" target="_blank">
        <sl-button size="small">
          <sl-icon name="linkedin"></sl-icon> LinkedIn
        </sl-button>
        </a>
      </div>

      <div>
        <h3 className="sum-head">About</h3>
        <p className="text">
          I am an aspiring full-stack developer with a passion for learning and
          growing my skills. My aim is to do meaningful work while still learning on the job.
        </p>
        <h3 className="sum-head">Interests</h3>
        <p className="text">My interests outside tech include keeping up to date with the latest sports and listening to DarkNet Diaries or 
        the Joe Rogan podcast. A fun fact about me is that my favourite animal is a honey badger.</p>
      </div>
    </div>
  );
}
