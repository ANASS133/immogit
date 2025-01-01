import './App.css'
export default function SellerInfos(props){
  return (
    <>
    <div className="sellerInfos ">
      
        <div className="container-20">
          <div className="container-36">
            <img src="/profil.jpeg" className='ellipse-12'>
            </img>
            <div className="container-8">
              <span className="lorem-ipsum">{props.seller}
              </span>
              <span className="properieter">
              Properieter
              </span>
            </div>
          </div>
          <div className="container-17">
            <span className="name">
            {props.name}
            </span>
          </div>
          <div className="container-16">
            <span className="phone">
            {props.phone1}
            </span>
          </div>
          <div className="container-39">
            <span className="email">
            {props.email}
            </span>
          </div>
          <div className="container-37">
            <span className="descreption">
            {props.sellerdescription}
            </span>
          </div>
          <div className="container-34">
            <div className="container-35">
              <button className="send-message">
              Send Message
              </button>
            </div>
            <div className="container-10">
              <button className="call">
              Call
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
