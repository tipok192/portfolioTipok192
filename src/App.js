import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/c';
import './i18n';
import { useTranslation } from 'react-i18next';
import Header from './components/header/c';
import Main from './components/main/c';
import Contact from './components/main/contact/c';
import About from './components/main/about/c';
import Error from './components/error/c';

function App() {
  const { t, i18n } = useTranslation();


  let db = {
    name:`Sadie`,
    surname:`Morrison`,
    email:`aaa.3235@gmail.com`,
    phone:`649-236-402`
  }
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
         <Routes>
          <Route path='/' element={<Main db={db}/>}/>
          <Route path='/about_me' element={<About db={db}/>}/>
          <Route path='/contact_with_me' element={<Contact db={db}/>}/>
          <Route path='*' element={<Error/>}/>
         </Routes>
       <Footer db={db}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
