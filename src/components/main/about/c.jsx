import s from "./c.module.css"
import foto from "../../../img/foto.png"
import '../../../i18n';
import { useTranslation } from 'react-i18next';
function About({db}) {
  const { t, i18n } = useTranslation();

    return ( 
        <div><div className={s.gicBox}><div className={s.gic}></div></div>        
        

        <div>

        {/* ///////// */}
        <div className={s.bigBox}>
        <div className={s.imgBox}>
        <img className={s.img} src={foto} alt="my_foto" />
        </div>
        <div className={s.textBox}>
        <h1 className={s.h1}>{t(`about`)}</h1>
        <div className={s.span}>
        <span>{t(`text`)}</span>
        </div>
        </div>
        </div>
        {/* ///////// */}
        </div>



<div className={s.gicBox}><div className={s.gic}></div></div>

        </div>
     );
}

export default About;