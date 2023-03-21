import logo from "./logo.svg";
import Accueil from "./Components/Accueil.js";
import "./App.css";
import AddAssociation from "./Components/AddAssociation";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Await,
} from "react-router-dom";

import Standard from "./Components/Standard";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import ListAssociation from "./Components/ListAssociation";
import AssociationService from "./Services/ServicesAssociation";
import Association from "./Components/Association";
import EditAssociation from "./Components/EditAssociation";
import AddDon from "./Components/AddDon";
import AddProjet from "./Components/AddProjet";
import ListProjet from "./Components/ListProjet";
import EditProjet from "./Components/EditProjet";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import UserProfile from "./Components/UserProfile";
import AssociationAcc from "./Components/AssociationAcc";

function App() {
  const [association, setAssociation] = useState({
    id: "",
    nom_association: "",
    adresse: "",
    date_creation: "",
    numero_tel: "",
    email: "",
    description: "",
    Id_projet: "",
  });
  const [projet, setProjet] = useState({
    id: "",
    nom_projet: "",
    date_projet: "",
    description: "",
  });
  const [roles, setRoles] = useState(null)
const [projetbyassoc, setProjetbyassoc] = useState(null)
  const [associations, setAssociations] = useState(null);
  const [users, setUsers] = useState(null)
  const [types, setTypes] = useState();
  const [membres, setMembres] = useState(null);
  const [projets, setProjets] = useState(null);
  //Liste des projet

  //methode d'ajout d'association
  // const Addassociation = (info) => {
  //   AssociationService.Add_association(info)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  //méthode de liste des associations

  // useEffect(() => {
  //   const fetchData = () => {
  //     setLoading(true);
  //     try {
  //       const respone = AssociationService.getAssociation();
  //       setAssociation(respone.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  const getassociations = () => {
    try {
      const respone = AssociationService.getAssociations();
      setAssociations(respone.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getprojets = () => {
    try {
      const respone = AssociationService.getProjets();
      setProjets(respone.data);
    } catch (error) {
      console.log(error);
    }
  };
  //get types
  const gettypes = () => {
    try {
      const respone = AssociationService.getTypes();
      setTypes(respone.data);
    } catch (error) {
      console.log(error);
    }
  };
  //get membres de comités
  const getmembres = () => {
    try {
      const respone = AssociationService.getMembres();
      setMembres(respone.data);
    } catch (error) {
      console.log(error);
    }
  };
  // get projet by id
  const getprojetById = (id) => {
    try {
      const respone = AssociationService.getProjetById(id);
      setProjet(respone.data);
    } catch (error) {
      console.log(error);
    }
  };
  // get users
  const getusers = (id) => {
    try {
      const respone = AssociationService.getUsers(id);
      setUsers(respone.data);
    } catch (error) {
      console.log(error);
    }
  };
// get roles
const getroles = (id) => {
  try {
    const respone = AssociationService.getRoles(id);
    setRoles(respone.data);
  } catch (error) {
    console.log(error);
  }
};

  // get association by id
  const getassociationById = (id) => {
    try {
      const respone = AssociationService.getAssociationById(id);
      setAssociation(respone.data);
    } catch (error) {
      console.log(error);
    }
  };
//get projet by id association
const getprojetByIdassociation = (id) => {
  try {
    const respone = AssociationService.getProjetByIdAssociation(id);
    setProjetbyassoc(respone.data);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil></Accueil>} />
          <Route path="/u" element={<UserProfile></UserProfile>} />
          <Route path="/login" element={<Login></Login>}></Route>
          {/* association */}
          <Route path="/listAssociation" element={<ListAssociation associations={associations}></ListAssociation>}></Route>
          <Route path="/addAssociation" element={<AddAssociation></AddAssociation>} ></Route>
          {/* <Route path="/association/:id" element={<Association associations={associations}></Association>}></Route> */}
          <Route path="/association"  element={<Association></Association>}></Route>
          {/* <Route path="/editAssociation/:id" element={<EditAssociation associations={associations} ></EditAssociation>}></Route> */}
          <Route path="/editAssociation"  element={<EditAssociation></EditAssociation>}></Route>
         {/* don */}
          <Route path="/addDon" element={<AddDon></AddDon>}></Route>
         {/* projet */}
          <Route path="/addProjet" element={<AddProjet></AddProjet>}></Route>
          <Route path="/listProjet" element={<ListProjet></ListProjet>}></Route>
          <Route path="/editProjet" element={<EditProjet></EditProjet>}></Route>
          {/* user */}
          <Route path="/addUser" element={<AddUser />}></Route>
          <Route path="/editUser" element={<EditUser />}></Route>
          <Route path="/associationacc"  element={<AssociationAcc></AssociationAcc>}></Route>
        </Routes>
      </Router>

      {/* <Standard></Standard> */}
    </div>
  );
}

export default App;
