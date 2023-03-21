import React, { useState } from 'react'
import Nav from './Nav'

import AssociationService from "../Services/ServicesAssociation";

// const [Id_projet, setId_projet] = useState()


 // let { id } = useParams();
    // const association =
    //  associations.find(el=>el.id==id)
const EditAssociation = () => {
    //prend association :{association}
    const [id_Association, setId_Association] = useState()
  const [nomAssociation, setnomAssociation] = useState("")
  const [adresse, setAdresse] = useState("")
  const [dateCreation, setDateCreation] = useState("")
  const [numeroTel, setNumeroTel] = useState("")
  const [email, setEmail] = useState(0)
  const [description, setDescription] = useState("")
  const [Id_projet, setId_projet] = useState()


  const handleEdit=()=>{
    //info contient les information d'ajout
     const info = {nomAssociation,adresse,dateCreation,numeroTel,email,description,Id_projet}
     const id=id_Association
    //  const id=association.id
     Editassociation(info,id)
    
  };
  const Editassociation = (info,id) => {
    AssociationService.Edit_association(info,id)
      .then((response) => {
        console.log(response);
        setnomAssociation(response.data.nomAssociation)
        setAdresse(response.data.adresse)
        setDateCreation(response.data.dateCreation)
        setDescription(response.data.description)
        setEmail(response.data.email)
        setId_projet(response.data.Id_projet)
        setNumeroTel(response.data.numeroTel)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="wrapper">
        {/* Navbar */}
        <Nav></Nav>
        {/* End Navbar */}
      <div className="main-panel">
        
        <div style={{width:"1000px",display:"inline-block",
  justifyContent: "center",
  marginBottom: "100px",
  marginTop: "80px"}}>
    <div class="row"  onSubmit={handleEdit}>
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
                <h5 className="title">Modifier d'une association</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-5 pr-md-1">
                      <div className="form-group">
                      {/* <label>Nom D'association (disabled)</label> */}
                        <label>Nom D'association </label>
                        {/* value={association.nomAssociation}  */}
                        <input type="text" name="nomAssociation" value={nomAssociation}  onChange={e=>setnomAssociation(e.target.value)} className="form-control" placeholder="Company" />
                      </div>
                    </div>
                    <div className="col-md-3 px-md-1">
                      <div className="form-group">
                        <label>Adresse</label>
                        <input type="text" name="adresse" value={adresse} onChange={e=>setAdresse(e.target.value)} className="form-control" placeholder="Username"  />
                      </div>
                    </div>
                    <div className="col-md-4 pl-md-1">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">email</label>
                        <input type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control"  />
                      </div>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-md-4 pr-md-1">
                     <div className="form-group">
                        <label>Numero telephone</label>
                        <input type="number" value={numeroTel}  onChange={e=>setNumeroTel(e.target.value)}className="form-control"  />
                      </div>
                    </div>
                    <div className="col-md-4 pl-md-1">
                      <div className="form-group">
                        <label>projet</label>
                        <select id="inputState" class="form-control">
                          <option selected >Choose...</option>  
                          {/* <option selected >{projet.nom}</option>   */}
                          {/* value={projet.id} */}
                          </select>
                      </div>
                    </div>
                    <div className="col-md-4 pl-md-1">
                      <div className="form-group">
                        <label>Date de création</label>
                        <input type="date" value={dateCreation}  onChange={e=>setDateCreation(e.target.value)}className="form-control"  />
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
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group">
                        <label>description</label>
                        <textarea value={description}  onChange={e=>setDescription(e.target.value)} rows={4} cols={80} className="form-control"  placeholder={"décrire l'association "} />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit"  className="btn btn-fill btn-primary">Modifier</button>
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
  )
}

export default EditAssociation