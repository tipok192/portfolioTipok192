import s from "./c.module.css"
import '../../../i18n';
import { useTranslation } from 'react-i18next';



function Contact({db}) {
  const { t, i18n } = useTranslation();
  return ( 

<div>
    <div className={s.body}>
        <div className={s.gicBox}><div className={s.gic}></div></div>            
        <div>
            {/* ///////// */}
            <div className={s.bigBox}>
              <form action={`https://formsubmit.co/${db.email}`} method="POST">
                <div className={s.box}>
                    <div className={s.inpbox}><textarea className={s.textarea} name="inf" id="textarea" cols="40" rows="7" placeholder={t("about_you")}></textarea></div>
                    <div className={s.smallBox}>
                        <div className={s.inpbox}><input className={s.input} name="name" type="name" placeholder={t("your_name")} /></div>
                        <div className={s.inpbox}><input className={s.input} name="email" type="email" placeholder={t("input_email")}/></div>
                        <div className={s.div}><button className={s.btn} type="submit">{`${t("send")}`}</button></div>
                    </div>
                </div>

              </form>
              <div className={s.name}>

                <h1>{`${t("i_am")}`}</h1>
                <h1>{`${db.name} ${db.surname}`}</h1>

              </div>
            </div>
            {/* ///////// */}
        </div>
        <div className={s.gicBox}><div className={s.gic}></div></div>
    </div>
</div>
     );
}

export default Contact;