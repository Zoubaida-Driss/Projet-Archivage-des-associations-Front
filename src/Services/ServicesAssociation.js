import axios from "axios";
const ASSOCIATION_API_BASE_URL = "/api/association";
const DON_API_BASE_URL="";
const PROJET_API_BASE_URL="/api/projet";
const USER_API_BASE_URL="/api/user"
const  TYPE_API_BASE_URL="/api/type"
const MEMBRE_API_BASE_URL="/api/membreComite"
const ROLE_API_BASE_URL="/api/role"
//Edit_association
class AssociationService {


  //ajouter association
  Add_association(association) {
    return axios.post(ASSOCIATION_API_BASE_URL, association);
  }
  //modifier association
  Edit_association(association, id) {
    return axios.put(ASSOCIATION_API_BASE_URL + "/" + id, association);
  }
  //liste des association
  getAssociations = () => {
    return axios.get(ASSOCIATION_API_BASE_URL+"/listeAssociation");
  };
  //get association by id
  getAssociationById = (id) => {
    return axios.get(ASSOCIATION_API_BASE_URL + "/detailAssociation/" + id);
  };
  //Delete_association
  Delete_association = (id) => {
    return axios.delete(ASSOCIATION_API_BASE_URL + "/deleteAssociation/" + id);
  };


  //Add_Don
  Add_Don(don) {
    return axios.post(DON_API_BASE_URL, don);
  }

  //Add_Projet
  Add_Projet(projet) {
    return axios.post(PROJET_API_BASE_URL, projet);
  }
  // //Liste des Projets
  // getProjets = () => {
  //   return axios.get(PROJET_API_BASE_URL+"");
  // };
  // //get projet by id
  // getProjetById = (id) => {
  //   return axios.get(PROJET_API_BASE_URL+ "/" + id);
  // };
  //Delete_projet
  Delete_projet = (id) => {
    return axios.delete(PROJET_API_BASE_URL + "/deleteProjet/" + id);
  };
  //Edit_projet
  Edit_projet(projet, id) {
    return axios.put(PROJET_API_BASE_URL + "/" + id, projet);
  }
//getProjetByIdAssociation
getProjetByIdAssociation = (id) => {
  return axios.get(PROJET_API_BASE_URL+ "/listeProjets/" + id);
};


  //Add_User
  Add_User(user) {
    return axios.post(USER_API_BASE_URL, user);
  }
  //Edit_user
  Edit_user(user, id) {
    return axios.put(USER_API_BASE_URL + "/" + id, user);
  }
  //Delete_user
  Delete_user = (id) => {
    return axios.delete(USER_API_BASE_URL + "/deleteUser/" + id);
  };
//getUsers
getUsers = () => {
  return axios.get(USER_API_BASE_URL+"/listeUser");
};

  //getTypes
  getTypes = () => {
    return axios.get(TYPE_API_BASE_URL+"/listeType");
  };


  //getMembres
  getMembres = () => {
    return axios.get(MEMBRE_API_BASE_URL+"/listeMembreComite");
  };

  //getRoles
  getRoles = () => {
    return axios.get(ROLE_API_BASE_URL+"/listeRole");
  };
}
export default new AssociationService();
