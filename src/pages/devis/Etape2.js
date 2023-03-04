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
         <h4 className=" row cardFormulaire-title  justify-content-center  ">Etape 2 : Votre Projet </h4>
        
      </div>
      <div className="  ">
      <div className="row  justify-content-center ">
        <select name="type" type="text" placeholder="type de votre projet" className="formSelect form-select">
        <option >Pompage au fil de soleil</option>
            <option>Pompage raccordé STEG</option>
            <option>Maison raccordé STEG </option>
            <option>Maison non raccordé STEG </option>

        </select>
      </div>
      <div className="row  justify-content-center">
      <select name="type" type="text" placeholder="technologie" className="formSelect form-select ">
      <option >Allemande</option>
            <option>Chinoise</option>
            
      </select>
      </div>
      
    <div className="abc ">
        
    <Link  href={'/devis/Cordonnees'} >  <button className="form-button">Précédent</button> </Link>
    <Link  href={'/devis/Etape3'} >  <button className="form-button">Suivant</button> </Link>
  
    </div>

      </div>

    </div>
    </div>
<Footer/>
</div>
);

}