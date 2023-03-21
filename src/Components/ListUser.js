import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import AssociationService from "../Services/ServicesAssociation";


const ListUser = () => {
    const deleteUser = (id) => {
        AssociationService.Delete_user(id)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div>
    <div>
 <div className="wrapper">
   <div className="main-panel">
     {/* Navbar */}
     <Nav></Nav>
     <div
       className="modal modal-search fade"
       id="searchModal"
       tabIndex={-1}
       role="dialog"
       aria-labelledby="searchModal"
       aria-hidden="true"
     >
       <div className="modal-dialog" role="document">
         <div className="modal-content">
           <div className="modal-header">
             <input
               type="text"
               className="form-control"
               id="inlineFormInputGroup"
               placeholder="SEARCH"
             />
             <button
               type="button"
               className="close"
               data-dismiss="modal"
               aria-label="Close"
             >
               <i className="tim-icons icon-simple-remove" />
             </button>
           </div>
         </div>
       </div>
     </div>

     {/* End Navbar */}
     <div
       style={{
         width: "1000px",
         display: "inline-block",
         justifyContent: "center",
         marginBottom: "100px",
         marginTop: "80px",
       }}
     >
       <div class="row">
         <div class="col-12">
           <div class="card ">
             <div class="card-header">
               <h4 class="card-title"> La liste des utilisateurs</h4>
             </div>
             <div class="card-body">
               {/* les elements de la liste ici */}

               <table className="table">
                 <thead>
                   <tr>
                     <th className="text-center">id</th>
                     <th>Nom utilisateur </th>
                     <th>prenom utilisateur</th>
                     
                     <th>Actions</th>
                   </tr>
                 </thead>
                 <tbody>
                   {/* <tr>
                     {projets.map((projet) => {
                       <>
                         <td className="text-center">{association.id}</td>
                         <td>{projet.nom_projet}</td>
                         <td>{projet.date_projet}</td>
                        
                       </>;
                     })}
                     <td className="td-actions ">
                       <button
                         type="button"
                         rel="tooltip"
                         className="btn btn-info btn-sm btn-icon"
                       >
                         <i className="tim-icons icon-single-02" />
                       </button>
                        <Link to={"/editProjet"}>
                       <button
                         type="button"
                         rel="tooltip"
                         className="btn btn-success btn-sm btn-icon"
                       >
                         <i className="tim-icons icon-settings" />
                       </button></Link>
                       <button
                         type="button"
                         rel="tooltip"
                         className="btn btn-danger btn-sm btn-icon"
                       >
                         <i className="tim-icons icon-simple-remove" />
                       </button>
                     </td>
                   </tr> */}

                   {/* à enlever */}
                   <tr>
                     <td className="text-center">2</td>
                     <td>John Doe</td>
                     <td>Design</td>
                    
                     <td className="td-actions ">
                       <button
                         type="button"
                         rel="tooltip"
                         className="btn btn-info btn-sm btn-round btn-icon"
                       >
                         <i className="tim-icons icon-single-02" />
                       </button>
                       <Link to={"/editProjet"}>
                       <button
                         type="button"
                         rel="tooltip"
                         className="btn btn-success btn-sm btn-round btn-icon"
                       >
                         <i className="tim-icons icon-settings" />
                       </button>
                       </Link>
                      
                       {/* a prendre */}
                       <button
                         data-toggle="modal"
                         data-target="#exampleModal"
                         type="button"
                         rel="tooltip"
                         className="btn btn-danger btn-sm btn-round btn-icon"
                       >
                         <i className="tim-icons icon-simple-remove" />
                       </button>

                       <div
                         class="modal fade"
                         id="exampleModal"
                         tabindex="-1"
                         role="dialog"
                         aria-labelledby="exampleModalLabel"
                         aria-hidden="true"
                       >
                         <div class="modal-dialog" role="document">
                           <div class="modal-content">
                             <div class="modal-header">
                               <h5
                                 class="modal-title"
                                 id="exampleModalLabel"
                               >
                                 Supprimer
                               </h5>
                               <div class="modal-body">
                                 <p>
                                   voulez vous supprimer le projet ?
                                 </p>
                               </div>
                               <button
                                 type="button"
                                 class="close"
                                 data-dismiss="modal"
                                 aria-hidden="true"
                               >
                                 <i class="tim-icons icon-simple-remove"></i>
                               </button>
                             </div>
                             <div class="modal-body">...</div>
                             <div class="modal-footer">
                               <button
                                 type="button"
                                 class="btn btn-secondary"
                                 data-dismiss="modal"
                               >
                                 Close
                               </button>
                               <button
                                 type="button"
                                 onClick={deleteUser}
                                 class="btn btn-primary"
                               >
                                 oui
                               </button>
                             </div>
                           </div>
                         </div>
                       </div>
                       {/* a prendre */}
                     </td>
                   </tr>
                   <tr>
                     <td className="text-center">3</td>
                     <td>Alex Mike</td>
                     <td>Design</td>
                     
                     <td className="td-actions ">
                       <button
                         type="button"
                         rel="tooltip"
                         className="btn btn-info btn-link btn-icon btn-sm"
                       >
                         <i className="tim-icons icon-single-02" />
                       </button>
                       <button
                         type="button"
                         rel="tooltip"
                         className="btn btn-success btn-link btn-icon btn-sm"
                       >
                         <i className="tim-icons icon-settings" />
                       </button>
                       <button
                         type="button"
                         rel="tooltip"
                         className="btn btn-danger btn-link btn-icon btn-sm"
                       >
                         <i className="tim-icons icon-simple-remove" />
                       </button>
                     </td>
                   </tr>
                   {/* à enlever */}
                 </tbody>
               </table>
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

export default ListUser