import React from 'react'
import { Link } from 'react-router-dom'

const CardAssociation = () => {
   // private Long id;
  //   private String nomAssociation;
  //   private String numeroTel; 
  //   private String adresse;
  //   private String email;
  //   private String dateCreation;
  //   private String description;
  return (
    <div className="card" style={{width: '20rem',backgroundColor:"#32325d"}}>
    <img className="card-img-top" src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/275842535_4873340732743921_1714142547581638960_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OJBAlLa8JQcAX_t8ggG&tn=Ugq_Mb2h74L688Om&_nc_ht=scontent.ftun9-1.fna&oh=00_AfCqs-6SpMpA74iVGcEmSqBpD3oqhPU7_zIgO50u_tQ5wg&oe=639436F7" alt="Card image cap" />
    <div className="card-body">
      <h4 className="card-title">jci Sakiet Eddaier</h4>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" className="btn btn-primary">info</a> */}
      <Link to={`/associationacc`}><a href="#" className="btn btn-primary">info</a></Link>
    </div>
  </div>
  )
}

export default CardAssociation