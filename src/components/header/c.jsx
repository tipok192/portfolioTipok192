import img1 from "../../img/img1.png"
import img2 from "../../img/img2.png"
import s from "./c.module.css"
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();
  const [open , setOpen] = useState(false)
  function languageChange(language) {
    i18n.changeLanguage(`${language}`)
  }

    return ( 
      <>
        <div className={s.body}>
          <div>
            <Link to="/"><img src={img1} alt="logo" className={s.img}/></Link>
          </div>
          <div className={s.barsBody}>
            <img onClick={()=>{setOpen(!open)}} src={img2} alt="bars" className={s.bars}/>
          </div>
          <div className={s.hrefs}>
          <div><Link className={s.a} to="/about_me">{t("about")}</Link></div>
            <div><Link className={s.a} to="/contact_with_me">{t("contact")}</Link></div>
          
            <div><button onClick={()=>{languageChange("en")}} className={s.btn} href="#">{t("l1")}</button></div>
            <div><button onClick={()=>{languageChange("ru")}} className={s.btn} href="#">{t("l2")}</button></div>
          </div>
        </div>

        <div className={open === true? s.open : s.close}>
            <div><Link className={s.a} to="/about_me">{t("about")}</Link></div>
            <div><Link className={s.a} to="/contact_with_me">{t("contact")}</Link></div>
            <div className={s.opendiv}><button onClick={()=>{languageChange("en")}} className={s.btn} href="#">{t("l1")}</button></div>
            <div className={s.opendiv}><button onClick={()=>{languageChange("ru")}} className={s.btn} href="#">{t("l2")}</button></div>
        </div>
         
      </>
      );

}

export default Header;