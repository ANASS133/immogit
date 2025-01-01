import "./App.css"
export default function Caracteristique(props){
    
  return (
    <div className="Caracteristique">
      <div className="crtique">
       <h3> Crétique</h3><br />
        
      </div>
      <div className="container-3">
        <div className="container-2">
          <p className="caractristiques">
            <span className="caractristiques-sub-12"><br />caractristiques</span>
          </p><hr /><br />
          <div className="container-1">
            <span className="surface">
              Surface
            </span>
            <span className="chaufage">
              Chaufage
            </span>
            <span className="pice">
              Piéce
            </span>
            <span className="chambre">
              Chambre
            </span>
            <span className="salle-de-bain">
              Salle de bain
            </span>
            <span className="salon">
              Salon
            </span>
          </div>
          <div className="container">
            <span className="m">
              {props.surface}
            </span>
            <div className="electricit">
              {props.chaufage}
            </div>
            <div className="container-2">
              {props.piece}
            </div>
            <div className="container-1">
              {props.chambre}
            </div>
            <div className="container">
              {props.SalleDeBain}
            </div>
            <div className="container-3">
              {props.salon}
            </div>
          </div>
        </div>
      </div>
      <p className="voire-plus-de-caractristiques">
        <span className="voire-plus-de-caractristiques-sub-12"></span><span></span>
      </p>
    </div>
  )
}