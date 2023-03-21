import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

const Standard = () => {
  return (
    <div>
   <div>
        <div className="wrapper">
            {/* Sidebar */}
          <SideBar></SideBar>
          <div className="main-panel">
            {/* Navbar */}
           <NavBar></NavBar>
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
            <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card ">
              <div class="card-header">
                {/* <h4 class="card-title"> La liste des associations</h4> */}
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  {/* les elements de la liste ici */}
                 < div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card ">
          <div class="card-header">
            {/* <h4 class="card-title"> La liste des associations</h4> */}
          </div>
          <div class="card-body">
          <div className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="title">Ajout d'une association</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-5 pr-md-1">
                      <div className="form-group">
                      {/* <label>Nom D'association (disabled)</label> */}
                        <label>Nom D'association </label>
                        <input type="text" name="nom_association"className="form-control" placeholder="Company" defaultValue="Creative Code Inc." />
                      </div>
                    </div>
                    <div className="col-md-3 px-md-1">
                      <div className="form-group">
                        <label>Adresse</label>
                        <input type="text" name="adresse"  className="form-control" placeholder="Username" defaultValue="michael23" />
                      </div>
                    </div>
                    <div className="col-md-4 pl-md-1">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">email</label>
                        <input type="email" name="email"  className="form-control" placeholder="mike@email.com" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-md-1">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="Company" defaultValue="Mike" />
                      </div>
                    </div>
                    <div className="col-md-6 pl-md-1">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" defaultValue="Andrew" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 pr-md-1">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" placeholder="City" defaultValue="Mike" />
                      </div>
                    </div>
                    <div className="col-md-4 px-md-1">
                      <div className="form-group">
                        <label>Country</label>
                        <input type="text" className="form-control" placeholder="Country" defaultValue="Andrew" />
                      </div>
                    </div>
                    <div className="col-md-4 pl-md-1">
                      <div className="form-group">
                        <label>Postal Code</label>
                        <input type="number" className="form-control" placeholder="ZIP Code" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group">
                        <label>About Me</label>
                        <textarea rows={4} cols={80} className="form-control" placeholder="Here can be your description" value="Mike" defaultValue={"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."} />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-fill btn-primary">Save</button>
              </div>
            </div>
          </div>
         {/* <UserProfile></UserProfile> */}
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
        
      </div>
    
  </div></div>
  )
}

export default Standard