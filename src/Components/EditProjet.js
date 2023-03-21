import React, { useState } from 'react'
import AssociationService from "../Services/ServicesAssociation";
import Nav from './Nav';

const EditProjet = () => {
  // const [nomProjet, setNomProjet] = useState("")
  // const [dateProjet, setDateProjet] = useState("")
  // const [description, setDescription] = useState("")

  const [id_projet, setId_projet] = useState()
    const [nomProjet, setNomProjet] = useState("")
const [dateProjet, setDateProjet] = useState("")
const [description, setDescription] = useState("")
const handleSubmit=()=>{
    //info contient les information d'ajout
     const info = {nomProjet,dateProjet,description}
     const id=id_projet
     Editprojet(info,id)
    
  };
  const Editprojet = (info,id) => {
    AssociationService.Edit_projet(info,id)
      .then((response) => {
        console.log(response);
        setNomProjet(response.data.nomProjet)
        setDateProjet(response.data.dateProjet)
        setDescription(response.data.description)
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div> <div className="wrapper">
    {/* Navbar */}
    <Nav></Nav>
    {/* End Navbar */}
  <div className="main-panel">
    
    <div style={{width:"1000px",display:"inline-block",
justifyContent: "center",
marginBottom: "100px",
marginTop: "80px"}}>
<div class="row" >
  <div class="col-12">
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
            <h5 className="title">Modifier un projet</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="row"  onSubmit={handleSubmit}>
                <div className="col-md-5 pr-md-1">
                  <div className="form-group">
                  {/* <label>Nom D'association (disabled)</label> */}
                    <label>Nom du projet </label>
                    <input type="text" name="nom_association" value={nomProjet}  onChange={e=>setNomProjet(e.target.value)} className="form-control" placeholder="Company" />
                  </div>
                </div>
                <div className="col-md-3 px-md-1">
                  <div className="form-group">
                    <label>Date du projet</label>
                    <input type="date" name="adresse" value={dateProjet} onChange={e=>setDateProjet(e.target.value)} className="form-control" placeholder="Username"  />
                  </div>
                </div>
                <div className="col-md-4 pl-md-1">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">description</label>
                    <input type="email" name="email" value={description} onChange={e=>setDescription(e.target.value)} className="form-control"  />
                  </div>
                </div>
                
              </div>
              
              {/* <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                  </div>
                </div>
              </div> */}
              {/* <div className="row">
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
                    <label>Numero telephone</label>
                    <input type="number" className="form-control" placeholder="ZIP Code" />
                  </div>
                </div>
              </div> */}
             
            </form>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-fill btn-primary">Modifier</button>
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
</div></div>
  )
}

export default EditProjet