const img5 = new URL("./blog123.png", import.meta.url);
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { items } from "./items";

export default function Projet() {
  const router = useRouter();
  const [projet, setProjet] = useState([]);
  const PROTOCOLANDHOSTNAMEPARTOFTHEURL = "http://localhost:5050/";
  useEffect(() => {
    fetch(PROTOCOLANDHOSTNAMEPARTOFTHEURL + "projets")
      .then((response) => response.json())
      .then((data) => {
        setProjet(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {projet.map((item, index) => {
        return (
          <div
            key={index}
            className="proj container-fluid d-flex justify-content-center ">
            <div className="row justify-content-center">
              <div className=" col-sm-12 col-md-6">
                <img
                  className="cards-blog1"
                  src={
                    PROTOCOLANDHOSTNAMEPARTOFTHEURL +
                    "imagesProjet/" +
                    item.images[0]
                  }></img>
              </div>
              <div className=" col-sm-12 col-md-6">
                <h4 className="proj-title">{item.titre}</h4>
                <h5 className="proj-text text-secondary">
                  {" "}
                  Adresse : {item.adresse}
                </h5>
                <h5 className="proj-text text-secondary">
                  {" "}
                  Production anuelle : {item.productionAnuelle}
                </h5>
                <h5 className="proj-text text-secondary">
                  {" "}
                  Type de projet : {item.type}
                </h5>

                <div
                  className="project-button"
                  onClick={() => {
                    router.push({
                      pathname: "/secondPageProjet",
                      query: { id: item.id },
                    });
                  }}>
                  Lire la suite
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
