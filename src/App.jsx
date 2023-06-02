import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'

const cardList = [
  {
    name: "Harry Potter",
    imgSrc: "https://images.rtl.fr/~c/770v513/rtl/www/1582375-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg", 
  },
  {
    name: "Hermione Granger",
    imgSrc: "https://www.melty.fr/wp-content/uploads/meltyfr/2022/01/media-35272.jpg",
  },
  {
    name: "Ron Weasley",
    imgSrc: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/cinema/dossiers/acteur-harry-potter/ron-weasley/57107513-1-fre-FR/Ron-Weasley.jpg",
  },
  {
    name: "Albus Dumbledore",
    imgSrc: "https://fr.web.img6.acsta.net/newsv7/21/07/13/12/56/4409545.jpg", 
  },
  {
    name: "Severus Rogue",
    imgSrc: "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2022-12/roguefintheorie.jpeg", 
  },
  {
    name: "Drago Malfoy",
    imgSrc: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2022/10/harry-potter_-tom-felton-a-vecu-une-veritable-descente-aux-enfers-compressed.jpg", 
  },
  {
    name: "Voldemort",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg", 
  },
  {
    name: "Bellatrix Lestrange",
    imgSrc: "https://www.serieously.com/app/uploads/2022/05/bellatrix-lestrange10.jpg", 
  },
];

function App() {
  const cardElements = cardList.map((card, index) => (
    <Cards key={index} cardList={card} />
  ));

  return (
    <>
      <Header />
      <div className='appGlobalCard'>
        {cardElements}
      </div>
    </>
  )
}

export default App



