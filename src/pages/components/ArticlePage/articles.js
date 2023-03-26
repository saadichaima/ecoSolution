import { useEffect ,useState} from "react";
import Article from "./article"
import { items } from "./item";

export default function Articles() {
    const [articleCardsContent, setArticleCardsContent] = useState([]);
    const PROTOCOLANDHOSTNAMEPARTOFTHEURL = 'http://localhost:5050/';

    useEffect(() => {
        fetch(PROTOCOLANDHOSTNAMEPARTOFTHEURL + 'articles')
            .then((response) => response.json())
            .then((data) => {
                setArticleCardsContent(data);
                console.log(articleCardsContent);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className="articles-container">
            <div className="articles">
                {articleCardsContent.map((element, key) => <Article key={key} id={element._id} title={element.titre} content={element.contenu} description={element.description} images={element.images} />)}


            </div>
        </div>
    )
}