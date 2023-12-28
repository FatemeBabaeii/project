import styles from "./DetailsPage.module.scss"

const DetailsPage = ({ data }) => {

    return (
        <div className={`${styles.details}`} >
            <div key={data.id}>
                <img src={data.image} alt={data.name} width={200} height={200} />
                <h2>{data.name}</h2>
                <h4>{data.price}</h4>
                <p>{data.details}</p>
               

                {data.stock === 0 ? ( 
                    <div>
                        <p>{`ناموجود`}</p>
                        <button className={styles.btn}>خبرم کنید</button>
                    </div>
                ) : (
                    <div> 
                        <p>{`تنها ${data.stock} عدد در انبار باقی مانده`}</p>
                        <button className={styles.btn}>افزودن به سبد خرید</button>
                    </div> 
                )}

            </div>
        </div>
    )
}

export default DetailsPage
