import styles from "./Progress.module.css";
import CircleProgress from "./circleProgress";
import UseGetWindowSize from "../utils/UseGetWindowSize";
import { items } from "./progressItems";
export default function Progress() {
  const size = UseGetWindowSize();
  if (size.width <1000) {
    return(
        <div className={styles.container}>
      <h1 className={styles.first_title_mobile} >Offrir de meilleurs résultats à nos clients</h1>
      <div className={styles.counter_container_mobile}>   
      {items.map((element, key) => <CircleProgress key={key} id={element.id} title={element.title} number={element.number} image={element.image} />)}
         
        </div>
        </div>
    );
  }

    return (
      <div className={styles.container}>
      <h1 className={styles.first_title} >Offrir de meilleurs résultats à nos clients</h1>
      <div className={styles.counter_container}>   
      {items.map((element, key) => <CircleProgress key={key} id={element.id} title={element.title} number={element.number} image={element.image} />)}
         
        </div>
        </div>
    );
  }