import React, { useState } from 'react'
import AssociationService from "../Services/ServicesAssociation";

import Nav from './Nav'

const AddUser = () => {
    
    const [nom_user, setNomuser] = useState("")
    const [prenom_user, setPrenomuser] = useState("")
    const [email, setEmail] = useState("")
    const [motdepasse, setMotdepasse] = useState("")
    const [id_role, setIdrole] = useState()

    const handleSubmit=()=>{
        //info contient les information d'ajout
        const info = {nom_user,prenom_user,email,motdepasse,id_role}
         AddUser(info)
        
      };
      const AddUser = (info) => {
        AssociationService.Add_User(info)
          .then((response) => {
            console.log(response);
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
<div class="row"  >
  <div class="col-12">
    <div class="card ">
      <div class="card-header">
      </div>
      <div class="card-body">
      <div className="content">
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="title">Ajout d'un nouveau utilisateur</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="row" onSubmit={handleSubmit}>
                <div className="col-md-5 pr-md-1">
                  <div className="form-group">
                  {/* <label>Nom D'association (disabled)</label> */}
                    <label>Nom </label>
                    <input type="text" name="nom_association" className="form-control" value={nom_user}  onChange={e=>setNomuser(e.target.value)} />
                  </div>
                </div>
                <div className="col-md-3 px-md-1">
                  <div className="form-group">
                    <label>prenom</label>
                    <input type="text" name="adresse" className="form-control" value={prenom_user}  onChange={e=>setPrenomuser(e.target.value)}  />
                  </div>
                </div>
                <div className="col-md-4 pl-md-1">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">email</label>
                    <input type="email" name="email"  className="form-control"  value={email}  onChange={e=>setEmail(e.target.value)} />
                  </div>
                </div>
                
              </div>
              <div className="row">
                <div className="col-md-6 ">
                 <div className="form-group">
                 <label>mot de passe</label>
                    <input type="text" name="adresse"  className="form-control" value={motdepasse}  onChange={e=>setMotdepasse(e.target.value)}  />
                  </div>
                  </div>
                  <div className="col-md-6 ">
                  <div className="form-group">
                    <label>role</label>
                    <select id="inputState" class="form-control">
                      <option selected >Choose...</option>  
                      {/* <option  selected >{role.titre}</option>   */}
                      {/* value={role.id} onClick={setIdrole(role.id)} */}
                      </select>
                  </div>
                </div>
                </div>
              
           
           
            </form>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-fill btn-primary">Ajouter</button>
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

export default AddUser