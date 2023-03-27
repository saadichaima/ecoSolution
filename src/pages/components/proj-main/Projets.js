import Projet1 from "./projet1";
import { useState,useEffect } from "react";
export default function Projets() {
  const [projetCardsContent, setProjetCardsContent] = useState([]);
  const PROTOCOLANDHOSTNAMEPARTOFTHEURL = 'http://localhost:5050/';

  useEffect(() => {
      fetch(PROTOCOLANDHOSTNAMEPARTOFTHEURL + 'latestProjets')
          .then((response) => response.json())
          .then((data) => {
              setProjetCardsContent(data);
              console.log(projetCardsContent);
          })
          .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="container-fluid  ">
        <div className="row justify-content-center ">
          <div className=" col-sm-12 col-md-10">
          {projetCardsContent.map((element, key) => <Projet1 key={key} id={element._id} titre={element.titre} adresse={element.adresse} description={element.description}  productionAnuelle={element.productionAnuelle} type= {element.type} video={element.video}/>)}

          </div>

      </div>
  
      </div>
      </div>
  );
}
