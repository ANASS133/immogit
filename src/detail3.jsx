import './App.css'

export default function Description(props) {
  return (
    <div className="detail3">
      <div className="container-3">
        <div className="description">
          <h3>Description</h3>
        </div>
        <p className="accompanying">
          <span className="accompanying-sub-4"></span><span></span>
        </p>
      </div>
      <div className="container-1">
        <div className="container-7">
          <span className="descriptionn">
            <br />
{props.description}            <br />
            <br />
            <br />
            
          </span>
          <span className="villa">
            {props.type}
          </span>
        </div>
        <div className="container-6">
          <div className="they-are">
            they are: 
          </div>
          <div className="container-8">
            <div className="fleurs-1">
            </div>
            <div className="terrasse-1">
            </div>
            <div className="agent-des-douanes-1">
            </div>
          </div>
          <div className="container-9">
            <span className="jardin">
              Jardin
            </span>
            <span className="terras">
              Terras
            </span>
            <span className="concierge">
              Concierge
            </span>
          </div>
          <div className="container">
            <div className="maison-intelligente-1">
            </div>
            <div className="camera-de-securite-1">
            </div>
            <div className="cheminee-1">
            </div>
          </div>
          <div className="container-4">
            <span className="connect">
              Connecté
            </span>
            <span className="scurit">
              sécurité
            </span>
            <span className="chemin">
              cheminé
            </span>
          </div>
          <div className="container-10">
            <div className="container-2">
              <div className="porte-blind">
                porte blindé
              </div>
              <div className="climatis">
                climatisé
              </div>
            </div>
            <div className="container-5">
              <div className="un-meuble-1">
              </div>
              <span className="meubl">
                meublé
              </span>
            </div>
            <div className="climatisation-1">
            </div>
          </div>
          <div className="porte-intelligente-1">
          </div>
        </div>
      </div>
    </div>
  )
}