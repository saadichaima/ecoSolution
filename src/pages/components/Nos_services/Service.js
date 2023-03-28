
export default function Service({ title, description, image }) {
  console.log(title);
  return (
    <div className="cardBlog text-center">
      <div className="card-body text-dark">
        <img className="cards-img" src={image} />
        
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{description}</p>
        <div className="lire"></div>
      </div>
      
   
    </div>
  );
}
