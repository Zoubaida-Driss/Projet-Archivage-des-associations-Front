import React, { useState } from 'react'
import Nav from './Nav'
import AssociationService from "../Services/ServicesAssociation";

import NavUser from './NavUser'

const AddDon = () => {
    
  const [idAssociation, setIdAssociation] = useState("")
  const [montant, setMontant] = useState("")
  const handleSubmit=()=>{
    //info contient les information d'ajout
     const info = {idAssociation,montant}
     AddDon(info)
    
  };
  const AddDon = (info) => {
    AssociationService.Add_Don(info)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
        <div className="wrapper">
        {/* Navbar */}
       <NavUser></NavUser>
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
                <h5 className="title">Donner un don</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row" onSubmit={handleSubmit}>
                    <div className="col-md-6 pr-md-1">
                      <div className="form-group">
                      {/* <label>Nom D'association (disabled)</label> */}
                        <label>Nom D'association </label>
                        <select id="inputState" class="form-control">
                          <option selected ></option>  
                          {/* <option  value={association.id} onChange={e=>setIdAssociation(e.target.value) selected >{association.nom}</option>   */}
                          {/* on prend liste des associations et on fait le map */}
                          </select>                      </div>
                    </div>
                    <div className="col-md-6 px-md-1">
                      <div className="form-group">
                        <label>montant</label>
                        <input type="number" value={montant}  onChange={e=>setMontant(e.target.value)} name="montant"  className="form-control"   />
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
    </div>
  )
}

export default AddDon