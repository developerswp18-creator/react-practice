import styles from "./Netflix.module.css";

export const SeriesCards = (props) => {
    const { imgsrc, name, rating, description, genre, cast, releaseYear, link } = props.data;
    const btn_style = {
                    padding: "1.2rem 2.4rem",
                    border: "none",
                    fontSize: "1.6rem",
                    backgroundColor: rating >= "8.5" ? "#7dcea0" : "#f7dc6f",
                    color: "black",
                    fontWeight: "bold",
                    cursor: "pointer",
    }
    return (
        <li className={styles.card} key={props.data.id}>
            <div>
               <img src={imgsrc} alt={name} width="15%" height="20%" />
            </div>
            <div className={styles['card-content']}>
              <h2 className={styles['card-heading']}> {name} </h2>
              <h3> <span className={rating >= "8.5" ? styles['super-hit'] : styles['average']}>{rating}</span> </h3>
              <p> {description} </p>
              <p> Genre: {genre}</p>
              <p> Cast: {cast}</p>
              <p> {releaseYear}</p>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button style={btn_style}>
                    Watch Now
                </button>
              </a>
            </div>
        </li>
    );
}