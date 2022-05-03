import styles from './Card.module.css';

export default function Card({ name, phone, email, image, id }) {
    return (
        <div className={`${styles.card} text-center shadow`}>
            <div className={styles['card-header']}>
                <img
                    src={image.url}
                    alt={image.alt}
                    className={styles['card-img']}
                />
            </div>
            <div className='card-body'>
                <h3 className='card-title'>{name}</h3>
                <p className='card-subtitle'>{phone}</p>
                <p className='card-text'>{email}</p>
            </div>
        </div>
    );
}
