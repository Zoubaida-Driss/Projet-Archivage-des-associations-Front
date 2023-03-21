import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import AssociationService from "../Services/ServicesAssociation";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const ListAssociation = ({ associations }) => {
    // private Long id;
  //   private String nomAssociation;
  //   private String numeroTel; 
  //   private String adresse;
  //   private String email;
  //   private String dateCreation;
  //   private String description;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const deleteAssociation = (id) => {
    AssociationService.Delete_association(id)
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
                    <h4 class="card-title"> La liste des associations</h4>
                  </div>
                  <div class="card-body">
                    {/* les elements de la liste ici */}

                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-center">id</th>
                          <th>Nom D'association </th>
                          <th>email</th>
                          <th>Date de création</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <tr>
                          {associations.map((association) => {
                            <>
                              <td className="text-center">{association.id}</td>
                              <td>{association.nom_association}</td>
                              <td>{association.email}</td>
                              <td>{association.date_creation}</td>
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
                             <Link to={`/association/${association.id}`}>
                              
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
                          <td>2012</td>
                          <td className="td-actions ">
                            <button
                              type="button"
                              rel="tooltip"
                              className="btn btn-info btn-sm btn-round btn-icon"
                            >
                              <i className="tim-icons icon-single-02" />
                            </button>
                           <Link to={"/editAssociation"}>
                         
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
                                        voulez vous supprimer l'association ?
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
                                      onClick={deleteAssociation}
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
                          <td>2010</td>
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
  );
};

export default ListAssociation;
