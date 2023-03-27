import Blog from "./Blog"
import Link from "next/link"
import { useState,useEffect } from "react";
export default function Blogs (){
  const [articleCardsContent, setArticleCardsContent] = useState([]);
  const PROTOCOLANDHOSTNAMEPARTOFTHEURL = 'http://localhost:5050/';

  useEffect(() => {
      fetch(PROTOCOLANDHOSTNAMEPARTOFTHEURL + 'latestArticles')
          .then((response) => response.json())
          .then((data) => {
              setArticleCardsContent(data);
              console.log(articleCardsContent);
          })
          .catch((error) => console.log(error));
  }, []);
return(
    <div>
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
      <div className="col ">
      {articleCardsContent.map((element, key) => <Blog key={key} id={element._id} titre={element.titre} contenu={element.contenu} description={element.description}  />)}
</div>


</div>
</div>
<div className="container-fluid d-flex justify-content-center">
<Link href="../../Articles"><button  className="blog-button  ">view all Articles</button></Link>
</div>

</div>

)
}