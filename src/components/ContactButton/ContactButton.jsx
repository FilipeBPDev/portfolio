import { FaWhatsapp } from 'react-icons/fa';
import useDeviceInfo from '../../hooks/useDeviceInfo';
import styles from './ContactButton.module.css';

export default function ContactButton() {
  const { isMobile, isTablet, isPortrait } = useDeviceInfo(768, 900);
  
  // "fale comigo" somente em desktop e em tablet na horizontal"
  const showText = !isMobile && !(isTablet && isPortrait);

  const handleClick = () => {
    window.open('https://wa.me/5511949155219', '_blank');
  };

  return (
    <button className={styles.contactButton} onClick={handleClick}>
      <FaWhatsapp />
      {showText && <span>Fale comigo</span>}
    </button>
  );
}