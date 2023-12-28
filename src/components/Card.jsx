import styles from "./Card.module.scss"

const Card = ({ data, handleDetailsProduct }) => {

    function handleClickBtn() {
        handleDetailsProduct()
    }
    return (
        <div className={styles.parent}>
        <div className={`${styles.productItem}`} key={data.id}>
            <img src={data.image} width={200} height={200} />
            <h3>{data.name}</h3>
            <p>{data.price}</p>
            <button className={styles.btn} onClick={handleClickBtn}>Details</button>
        </div>
        </div>
    )
}

export default Card