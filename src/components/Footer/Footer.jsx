import "./Footer.css";
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="copyright">
    <p>
    ©{t('copy_right')} 2023 <a href="https://github.com/Priya-Pdh" className="footer-item">Priya Pradhan</a>,
     <a href="https://github.com/bdnaima" className="footer-item"> Naima Malik</a> &  <a href="https://github.com/sarahosterhed" className="footer-item">Sarah Österhed</a> 
    </p>
  </footer>
  )
}

export default Footer
