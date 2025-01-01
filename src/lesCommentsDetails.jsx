import React, { useState } from 'react';
function Commentairee(){
    const [newcommentaire, setNewcommentaire] = useState('');
    const [commentaire, setcommentaire] = useState([]);

    const handleInputChange = (event) => {
        setNewcommentaire(event.target.value);
    };

    const AddCommentaire = () => {
        const newcommentair = [...commentaire, { commentaire: newcommentaire }];
        setcommentaire(newcommentair);
        setNewcommentaire('');
    };

    return (<>  <div className="comments11"><div id="h2Commentaire">
        <h2>Commentaire</h2></div><div id='k'>
            <div id='cardComment'>
                
                <div id='card'>
                    {commentaire.map((commentaire, index) => (
                        <ul className='cardUserComent'>
                            <li key={index}>
                                <div className='user'>
                                    <img src='./az.png' alt="" />
                                    <b>user name</b>
                                </div>
                                <p>{commentaire.commentaire}</p><br />
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    ))}
                </div>
                <div id='form'>
                    <img src='az.png' alt="" />
                    <input className="form-control form-control-lg" type="text" value={newcommentaire} onChange={handleInputChange}></input>
                    <button className="btn" onClick={AddCommentaire}> <h5>Add</h5>  </button>
                </div>

            </div>
            <div id='kk'>
                <h2>maps</h2>
                <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53542.58060151831!2d-7.660858832975011!3d32.99293057587309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda6055da9429e99%3A0x3f8d5e95dedefa12!2sSettat!5e0!3m2!1sfr!2sma!4v1711406461003!5m2!1sfr!2sma"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>

        </div></div></>
    );
};

export default Commentairee;
