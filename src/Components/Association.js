import React from 'react'
import Nav from './Nav'

const Association = () => {
  return (
 // private Long id;
  //   private String nomAssociation;
  //   private String numeroTel; 
  //   private String adresse;
  //   private String email;
  //   private String dateCreation;
  //   private String description;


    // let { id } = useParams();
    // const association =
    //  associations.find(el=>el.id==id)
    <div>
          <div className="wrapper">
            {/* Sidebar */}
          {/* <SideBar></SideBar> */}
          <div className="main-panel">
            {/* Navbar */}
           <Nav></Nav>
            <div className="modal modal-search fade" id="searchModal" tabIndex={-1} role="dialog" aria-labelledby="searchModal" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="SEARCH" />
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End Navbar */}
            <div style={{width:"1000px",display:"inline-block",
  justifyContent: "center",
  marginBottom: "100px",
  marginTop: "80px"}}>
        <div class="row">
          <div class="col-12">
            <div class="card ">
              <div class="card-header">
                {/* <h4 class="card-title"> La liste des associations</h4> */}
              </div>
              <div class="card-body">
              <div class="card card-nav-tabs">
    <div class="card-header card-header-warning">
      les information 
    </div>
    <div class="card-body">
    {/* <img style={{ width:"50%",height:"50%"}}className="card-img-top" src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/275842535_4873340732743921_1714142547581638960_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OJBAlLa8JQcAX_t8ggG&tn=Ugq_Mb2h74L688Om&_nc_ht=scontent.ftun9-1.fna&oh=00_AfCqs-6SpMpA74iVGcEmSqBpD3oqhPU7_zIgO50u_tQ5wg&oe=639436F7" alt="Card image cap" /> */}
    
      {/* 
      <h4 class="card-title">Nom d'association</h4>
      <p class="card-text">description</p>
      <p>
      Date de création le .... 
      Adresse dans 
      email.. 
      numero de telephone .. 
      le projet ..... 
      </p>
       */}
        <div className="col-md-4">
    <div className="card card-user">
      <div className="card-body">
        <p className="card-text">
        </p><div className="author">
          <div className="block block-one" />
          <div className="block block-two" />
          <div className="block block-three" />
          <div className="block block-four" />
          <a href="javascript:void(0)">
            <img className="avatar" src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/275842535_4873340732743921_1714142547581638960_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OJBAlLa8JQcAX_t8ggG&tn=Ugq_Mb2h74L688Om&_nc_ht=scontent.ftun9-1.fna&oh=00_AfCqs-6SpMpA74iVGcEmSqBpD3oqhPU7_zIgO50u_tQ5wg&oe=639436F7" alt="Card image cap" alt="..." />
            <h5 className="title">nom association</h5>
          </a>
          <p className="description">
            Ceo/Co-Founder
          </p>
        </div>
        <p />
        <div className="card-description">
          Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
        </div>
      </div>
      <div className="card-footer">
        <div className="button-container">
          <button href="javascript:void(0)" className="btn btn-icon btn-round btn-facebook">
            <i className="fab fa-facebook" />
          </button>
          <button href="javascript:void(0)" className="btn btn-icon btn-round btn-twitter">
            <i className="fab fa-twitter" />
          </button>
          <button href="javascript:void(0)" className="btn btn-icon btn-round btn-google">
            <i className="fab fa-google-plus" />
          </button>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
            </div>
          </div>
         
        </div>
      </div>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Association