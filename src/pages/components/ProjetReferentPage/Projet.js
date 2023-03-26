const img5 = new URL("./blog123.png", import.meta.url);
import { useEffect, useState } from "react";
import { items } from "./items";
export default function Projet() {
    const [projets, setProjets] = useState([]);
    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = 'http://localhost:5050'

    useEffect(() => {
        fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/projets`)
            .then(response => response.json())
            .then(data => {
                console.log('hedhi idata', data);
                setProjets(data);
            }).catch(error => console.log(error));
    }, []);

    return (
        <div>
            {projets.map((item, index) => {
                return (
                    <div key={index} className="proj container-fluid d-flex justify-content-center ">

                        <div className="row justify-content-center">
                            <div className=" col-sm-12 col-md-6">
                                <img className="cards-blog1" 
                                    src={`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/imagesProjet/${item.images[0]}`}>

                                </img>

                            </div>
                            <div className=" col-sm-12 col-md-6">
                                <h4 className="proj-title">
                                    {item.titre}
                                </h4>
                                <p className="proj-text text-secondary">
                                    {item.description}
                                </p>
                                <button className="project-button">lire la suite</button>
                            </div>
                        </div>
                    </div>

                )
            })

            }
        </div>
    );
}
