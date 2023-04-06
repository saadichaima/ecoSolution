export default function Blog({ titre, description, contenu,image }) {
  return (
    <div className="cardBlog text-center">
      <div className="card-body text-dark">
        <img className="cardse-img1" src={image} />

        <h4 className="card-title">{titre}</h4>
        <p className="card-text text-secondary">{contenu}</p>
     
      </div>
    </div>
  );
}
