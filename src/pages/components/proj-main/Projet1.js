const img5 = new URL("./blog12.png", import.meta.url);
export default function Projet1({id,titre,description,adresse,video,productionAnuelle,type}) {
  return (
    <div className="proj container-fluid d-flex justify-content-center ">
      
        <div className="row justify-content-center">
          <div className=" col-sm-12 col-md-6">
          <img className="cards-blog1" src={img5}></img>
            
          </div>
          <div className=" col-sm-12 col-md-6">
          <h4 className="proj-title">
            {titre}
          </h4>
          <p className="proj-text text-secondary">
          {description}
            </p>     
            <button className="project-button">read more</button>
             </div>
        </div>
      </div>
  );
}
