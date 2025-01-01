import React from 'react';
import Header from './header';
export default function BestComments() {
  return (
 <div className="backgr">
    <div className="firstPage">
    <div className="welcome-to-our-home">
      Welcome To Our Home
    </div>
    <br />
    <div className="p">
      Sur notre site Internet, vous pouvez trouver<br />
      de nombreuses belles maisons pour passer <br />
      vos vacances ou vous installer.<br />
      
    </div>
    <div className="button">
      <span className="continue">
        <a href="/acceuil">
        Continue</a>
      </span>
      <div className="group-63">
        <div className="fi-rr-arrow-small-right">
          <img className="vector" src="continue.png" />
        </div>
      </div>
    </div>
  </div></div>
  );
}
