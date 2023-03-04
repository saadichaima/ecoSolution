import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const img_panneau_sol = new URL("../../../public/assets/panneau_sur_sol.png", import.meta.url);
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
      <div className=" row  justify-content-center ">
        <div className="col">
            <label>Emplacement:</label>
        </div>
        <div className="col">
            <input type="radio" name="emplacement" id="toit" value="sur le toit" />
            <img className="imgPaneau" src={img_panneau_sol}></img>
            <label for="toit">sur le toit</label>
        </div>
        <div className="col">
            <input type="radio" name="emplacement" id="sol" value="sur le sol" />
            <label for="sol">sur le sol</label>
        </div>
      </div>
 
      
    <div className="row justify-content-end">
    <button className="form-button ">précédent</button>
    
    <button className="form-button">Suivant</button>

    </div>

      </div>

    </div>
    </div>
<Footer/>
</div>
);

}