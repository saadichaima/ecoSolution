import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
export default function Cordonees(){
return(
<div>
<Navbar/>
<div className=" container  justify-content-center row">
<div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
      <div >
         <h4 className=" row cardFormulaire-title  justify-content-center  ">Etape 1 : Inserer vos données</h4>
        
      </div>
      <div className="  ">
      <div className="row  justify-content-center ">
      <input type="text" name="nom" placeholder="nom" className="formInput" /> 
      </div>
      <div className="row  justify-content-center">
      <input type="text" name="prenom" placeholder="prenom" className="formInput" /> 
      </div>
      <div className="row  justify-content-center">
      <input type="text" name="phoneNumber" placeholder="Phone Number" className="formInput" /> 
      </div>
      <div className="row  justify-content-center ">
      <input type="email" name="email" placeholder="Email" className="formInput" /> 
      </div>
           <div className="row  justify-content-center">
      <input type="text" name="adresse" placeholder="Adresse" className="formInput" /> 
      </div>
           <div className="row  justify-content-center">
      <input type="text" name="fonction" placeholder="Fonction" className="formInput" /> 
      </div>
           <div className="row justify-content-center ">
      <input type="text" name="age" placeholder="Age" className="formInput" /> 
      </div>
    <div className="">
  <Link className="row justify-content-end" href={'/devis/Etape2'} >  <button className="form-button">Next</button> </Link>

    </div>

      </div>

    </div>
    </div>
<Footer/>
</div>
);

}