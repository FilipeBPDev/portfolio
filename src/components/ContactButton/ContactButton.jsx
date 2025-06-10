import styles from './ContactButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';


export default function ContactButton() {
  const handleClick = () => {
    window.open('https://wa.me/5511949155219', '_blank');
    // ou: document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className={styles.contactButton} onClick={handleClick}>
      <FaWhatsapp />
      <span>Fale comigo</span>
    </button>
  );
}