import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Cards'
import Forms from "./components/Form"


const cardList = [
  {
    name: "Harry Potter",
    imgSrc: "https://images.rtl.fr/~c/770v513/rtl/www/1582375-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg", 
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo soluta eum corporis nulla similique, aspernatur sequi dicta ea tenetur rem, ex consequuntur eveniet, impedit accusantium exercitationem neque dolores! Quisquam, sunt?"
  },
  {
    name: "Hermione Granger",
    imgSrc: "https://www.melty.fr/wp-content/uploads/meltyfr/2022/01/media-35272.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo soluta eum corporis nulla similique, aspernatur sequi dicta ea tenetur rem, ex consequuntur eveniet, impedit accusantium exercitationem neque dolores! Quisquam, sunt?"
    
  },
  {
    name: "Ron Weasley",
    imgSrc: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/cinema/dossiers/acteur-harry-potter/ron-weasley/57107513-1-fre-FR/Ron-Weasley.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo soluta eum corporis nulla similique, aspernatur sequi dicta ea tenetur rem, ex consequuntur eveniet, impedit accusantium exercitationem neque dolores! Quisquam, sunt?"
  },
  {
    name: "Albus Dumbledore",
    imgSrc: "https://fr.web.img6.acsta.net/newsv7/21/07/13/12/56/4409545.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo soluta eum corporis nulla similique, aspernatur sequi dicta ea tenetur rem, ex consequuntur eveniet, impedit accusantium exercitationem neque dolores! Quisquam, sunt?" 
  },
  {
    name: "Severus Rogue",
    imgSrc: "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2022-12/roguefintheorie.jpeg", 
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo soluta eum corporis nulla similique, aspernatur sequi dicta ea tenetur rem, ex consequuntur eveniet, impedit accusantium exercitationem neque dolores! Quisquam, sunt?"
  },
  {
    name: "Drago Malfoy",
    imgSrc: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2022/10/harry-potter_-tom-felton-a-vecu-une-veritable-descente-aux-enfers-compressed.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo soluta eum corporis nulla similique, aspernatur sequi dicta ea tenetur rem, ex consequuntur eveniet, impedit accusantium exercitationem neque dolores! Quisquam, sunt?" 
  },
  {
    name: "Voldemort",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo soluta eum corporis nulla similique, aspernatur sequi dicta ea tenetur rem, ex consequuntur eveniet, impedit accusantium exercitationem neque dolores! Quisquam, sunt?" 
  },
  {
    name: "Bellatrix Lestrange",
    imgSrc: "https://www.serieously.com/app/uploads/2022/05/bellatrix-lestrange10.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo soluta eum corporis nulla similique, aspernatur sequi dicta ea tenetur rem, ex consequuntur eveniet, impedit accusantium exercitationem neque dolores! Quisquam, sunt?"
  },
];

function App() {

  return (
    <>
      <Header/>
      <Forms/>
      <div className='appGlobalCard'>
        <Card list={cardList} />
      </div>
     
    </>
  )
}

export default App






