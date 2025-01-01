import React from 'react';
import './bestComments.css';
import BBFirstComment from './BBFirstComment';
import BBSecondComment from './BBSecondComment';
import BBThirdComment from './BBThirdComment';

export default function BestComments() {
  return (
    <div className="bestcomments">
      <div className="container-4">
        <div className="good-reviews-by-customers">Good Reviews By Customers</div>
        <div className="lorem-ispum-elesto-curto-mina-judesr-for-enjiuyt-goof-dcrs-tyup-liek-tyuh-hiiyen-qeuzn-jduqnal-juezo-hsqtb-plsud-iysbj-luezjj">lorem ispum elesto curto mina judesr for enjiuyt goof dcrs tyup liek tyuh hiiyen qeuzn jduqnal juezo hsqtb plsud iysbj luezjj</div>
      

      <div className="comment-container">
        <BBFirstComment />
        <BBSecondComment />
        <BBThirdComment />
      </div>
    </div></div>
  );
}
