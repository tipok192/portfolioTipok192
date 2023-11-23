import s from "./c.module.css"
import '../../i18n';
import { useTranslation } from 'react-i18next';
import img3 from "../../img/img3.png"
import img4 from "../../img/img4.png"
import img5 from "../../img/img5.png"




function Footer({db}) {
  const { t, i18n } = useTranslation();

    return ( 
        <div className={s.body}>
            <div className={s.box2}>
                <a href="https://www.facebook.com/" target="new_blank">
                  <img className={s.img1} src={img3} alt="facebook" />
                </a>
                <a href="https://ru.linkedin.com/" target="new_blank">
                  <img className={s.img2} src={img4} alt="in" />
                </a>
                <a href="https://www.instagram.com/" target="new_blank">
                  <img className={s.img3} src={img5} alt="insta" />
                </a>

            </div>

            <div className={s.text}>

            <div className={s.box}>
              <h1>{t('email')}</h1>
              <h2 className={s.email}>{db.email}</h2>
            </div>

            <div className={s.box}>
              <h1>{t("phone")}</h1>
              <h2>{db.phone}</h2>
            </div>
            </div>

        </div>
     );
}

export default Footer;