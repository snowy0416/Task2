import React from 'react';

export default function MyComponent() {
  return (
    <div>
        <div className="ttx">
       Welcome <span className='arrow'>&#8594;</span>
      </div>
      <div className="bg-black">
      <div className="cont1">
        <div className="left">
          <h1 className="tt">Soniya<br/>
            Munda
          </h1>
          <br/><div className="intro">
          <p>I’m a full-stack web developer, I specialize in crafting innovative solutions for the digital landscape. With a keen eye for both front-end design and back-end functionality. </p>
        </div></div>
        <div className="rights">
          <img className="img1" src="\src\assets\BIG GLOW.png" alt="logo" />
          <img  className="img2" src="\src\assets\SIDE CURVES.png" alt="logo" />
          <img  className="img3"  src="\src\assets\CV BALL.png" alt="logo" />
          <img  className="img4" src="\src\assets\MINI BALL.png" alt="logo"/>
        </div>
      </div>
      </div>
      {/* <hr className="hori" /> */}
    </div>
    
  );
}

