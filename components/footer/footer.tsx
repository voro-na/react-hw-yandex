import Link from "next/link";
import styles from './footer.module.css'
import {FC} from "react";

const Footer: FC = () => {
    return <div className={styles.footer}>
        <Link href='/questionsAnswers' className={styles.link}>Вопросы-ответы</Link>
        <Link href='/aboutUs' className={styles.link}>О нас</Link>
    </div>
}

export default Footer
