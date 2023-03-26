import UseGetWindowSize from "../utils/UseGetWindowSize";
import { useRouter } from "next/router";

export default function Article({ id, title, content, description, images }) {
  const PROTOCOLANDHOSTNAMEPARTOFTHEURL = "http://localhost:5050/";

  const router = useRouter();
  const size = UseGetWindowSize();
  console.log(size);
  if (size.width < 600) {
    return (
      <div className="container-article-mobile">
        <img
          className="article-image-mobile"
          src={PROTOCOLANDHOSTNAMEPARTOFTHEURL + "imagesArticle/" + images[0]}
        />
        <h2 className="titre-article">{title}</h2>
        <div className="content-article">{content}</div>

        <div
          className="button-article"
          onClick={() => {
            router.push({
              pathname: "/secondpagearticle",
              query: {
                id: id,
               
              },
            });
          }}>
          Lire la suite
        </div>
      </div>
    );
  }
  return (
    <div className="container-article">
      <div className="column1-article">
        <img
          className="article-image"
          src={PROTOCOLANDHOSTNAMEPARTOFTHEURL + "imagesArticle/" + images[0]}
        />
      </div>
      <div className="column2-article">
        <h2 className="titre-article">{title}</h2>
        <div className="content-article">{content}</div>
        <div className="button-article-container">
          <div
            className="button-article"
            onClick={() => {
              router.push({
                pathname: "/secondpagearticle",
                query: {
                  id: id,
               
                },
              });
            }}>
            Lire la suite
          </div>
        </div>
      </div>
    </div>
  );
}
