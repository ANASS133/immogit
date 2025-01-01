import Dimages from "./dimages";
import SellerInfos from "./sellerInfos";
import './App.css'
import { useParams } from 'react-router-dom';
import data from './data.jsx'
import Caracteristique from "./caractéristique.jsx";
import Description from "./detail3.jsx";
import Commentairee from "./lesCommentsDetails.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

 
export default function Pagedetail(){
   const { id } = useParams();
  const annonce = data.find((a) => a.id === parseInt(id));
  let name = annonce.seller
  let email = annonce.sellerEmail
  let description = annonce.description
  let surface = annonce.surface
  let chaufage = annonce.chaufage
  let piece = annonce.piéce
  let chambre = annonce.chambre
  let SalleDeBain = annonce.SalleDeBain
  let salon = annonce.salon
  let sellerDescriprion = annonce.sellerdescription
  let phone1= annonce.phone1


 return(
    <>
        <div className="page-detail-container">
            <div className="pictures">
                <Dimages />
            </div>
            <div className="seller">
                <SellerInfos seller = {name} name = {name} email={email} sellerdescription={sellerDescriprion} phone1 = {phone1} />
            </div>
            
        </div><br /><br /><div className="cara">
                <Caracteristique surface={surface} chaufage={chaufage} piece={piece} chambre={chambre} SalleDeBain={SalleDeBain}
                salon = {salon} />
            </div>
            
            <br /><br /><div className="description">
                <Description description = {description} /> <br /><br /><Commentairee/>
            </div><Footer/>
            </>
    );
}
