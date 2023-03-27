export default function Blog({titre,description,contenu}) {
  return (
    <div className="cardBlog text-center">
      <div className="card-body text-dark">
        <img className="cardse-img1" src="https://cdn28.modele-lettre-gratuit.com/lettres/img/partenariat.jpg"/>

        <h4 className="card-title">{titre}</h4>
        <p className="card-text text-secondary">{description}</p>
        <div className="lire"></div>
      </div>
    </div>
  );
}
