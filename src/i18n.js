import i18n from "i18next";
import { initReactI18next } from "react-i18next";
let about = {
  en:`klajshfrsdfhsdjnflosgdklohjkldsghsdhufgsdgsdgsdsdihgsikahdgkihasdgihkasufgbkjuhsafihmiufghasdddddddddddddgaasdgdsgalhkdsftgslohgdkiyhkgjidhdkjghbkidhgmidhsfmidhfkgfdhlgkihdgmdsjuhgkhibgkjsh`,
  ru:`врпадрывлгпнщшгшепнггнеятйншцрбргащшйфщжзурштмщгпрфышьгчрцптусщшарбббббббфгрьбшгфбрфщсмгрщыгфагпаогщышапргтшщпнвыагнпфычапфщыщпнчапщчафьшукыщерсмблфюждюхздзяйщбцобщшзрьщшапнящгящпрлоапифытг`

}
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "about": "About me",
      "contact":"Contacts",
      "l1":"English",
      "l2":"Russian",
      "email":"Email",
      "phone":"Phone",
      "text":`${about.en}`,
      "your_name":"your name",
      "input_email":"input email",
      "about_you":"about you",
      "send":"send",
      "i_am":"I am"
    }
  },
  ru: {
    translation: {
      "about": "Про меня",
      "contact":"Контакты",
      "l1":"Англиский",
      "l2":"Русский",
      "email":"Почта",
      "phone":"Телефон",
      "text":`${about.ru}`,
      "your_name":"твоё имя",
      "input_email":"введите электронную почту",
      "about_you":"про тебя",
      "send":"отправить",
      "i_am":"я"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;