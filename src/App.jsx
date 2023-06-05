import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Cards'
import Forms from "./components/Form"
import FilterArray from "./components/Filter"


const cardList = [
  {
    name: "Harry Potter",
    imgSrc: "https://images.rtl.fr/~c/770v513/rtl/www/1582375-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg", 
    description: "Harry Potter est un jeune sorcier orphelin célèbre pour avoir survécu à l'attaque de Lord Voldemort. Avec ses amis Ron et Hermione, il affronte les forces du mal et découvre la vérité sur son passé. Courageux et déterminé, Harry incarne l'espoir et l'amitié dans sa quête pour un monde meilleur. Sa saga a captivé des millions de lecteurs, inspirant la résilience et la croyance en un avenir lumineux. Harry Potter est un personnage aimé pour sa loyauté envers ses amis, sa capacité à faire preuve d'empathie et sa volonté inébranlable de protéger ceux qu'il aime. Sa saga captivante a inspiré des millions de lecteurs à croire en eux-mêmes et à lutter pour la justice et la paix."
    
  },
  {
    name: "Hermione Granger",
    imgSrc: "https://www.melty.fr/wp-content/uploads/meltyfr/2022/01/media-35272.jpg",
    description: "Hermione Granger est une brillante sorcière et l'une des meilleures amies de Harry Potter. Connue pour son intelligence et sa soif de connaissances, elle se démarque par ses cheveux bruns bouclés et son engagement sans faille envers la justice. Hermione joue un rôle clé dans la lutte contre les forces du mal, utilisant sa magie et son esprit vif pour résoudre des énigmes et trouver des solutions. Elle incarne la persévérance, l'intégrité et l'importance de l'amitié. Grâce à sa détermination et à son dévouement, Hermione est devenue un modèle pour de nombreux fans, montrant que les femmes peuvent être puissantes et intelligentes."
    
  },
  {
    name: "Ron Weasley",
    imgSrc: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/cinema/dossiers/acteur-harry-potter/ron-weasley/57107513-1-fre-FR/Ron-Weasley.jpg",
    description: "Ron Weasley est un loyal sorcier et le meilleur ami de Harry Potter. Avec ses cheveux roux et son sens de l'humour, il apporte chaleur et camaraderie au trio. Malgré sa famille nombreuse et modeste, Ron se distingue par sa bravoure et son soutien inébranlable. Il fait preuve de courage lors des défis périlleux, se tenant toujours aux côtés de ses amis. Ron incarne l'amitié sincère, la loyauté et la volonté de se surpasser. Sa présence joviale et son esprit d'équipe font de lui un personnage aimé et indispensable dans l'univers de Harry Potter."
  },
  {
    name: "Albus Dumbledore",
    imgSrc: "https://fr.web.img6.acsta.net/newsv7/21/07/13/12/56/4409545.jpg",
    description: "Albus Dumbledore est un puissant sorcier et le directeur emblématique de l'école de sorcellerie de Poudlard. Avec sa longue barbe blanche et ses yeux pétillants, Dumbledore est connu pour sa sagesse et son intelligence exceptionnelle. Il est un mentor pour Harry Potter, le guidant dans sa lutte contre Voldemort. Dumbledore incarne la bienveillance, la tolérance et la capacité à voir la beauté même dans les moments les plus sombres. Il est respecté et admiré par la communauté magique pour sa défense des valeurs de justice et de liberté. Son héritage perdure en tant que figure emblématique de l'univers de Harry Potter, symbole de sagesse et de bonté." 
  },
  {
    name: "Severus Rogue",
    imgSrc: "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2022-12/roguefintheorie.jpeg", 
    description: "Severus Rogue est un personnage complexe de l'univers de Harry Potter. Initialement présenté comme un professeur austère et antipathique à Poudlard, il se révèle plus tard avoir une loyauté profonde et ambiguë envers Harry Potter. Avec son apparence sombre et son regard perçant, Rogue est un maître des potions talentueux et redouté. Son histoire tragique et son implication dans la lutte contre Voldemort lui confèrent une aura de mystère et de profondeur. Rogue incarne le concept que les apparences peuvent être trompeuses, et sa complexité émotionnelle en fait un personnage fascinant et controversé, dont les motivations et les actions sont discutées longtemps après la fin de la saga."
  },
  {
    name: "Drago Malfoy",
    imgSrc: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2022/10/harry-potter_-tom-felton-a-vecu-une-veritable-descente-aux-enfers-compressed.jpg",
    description: "Drago Malfoy est un étudiant à Poudlard et un personnage central dans la série Harry Potter. Avec ses cheveux blonds et son arrogance manifeste, il incarne le stéréotype du méchant élève. Malgré son attitude provocatrice et sa loyauté envers sa famille de sang-pur, Drago est souvent tiraillé entre son rôle attendu de Mangemort et ses propres doutes. Au fil de l'histoire, il révèle des failles et une vulnérabilité, remettant en question les notions simplistes de bien et de mal. Drago Malfoy est un personnage complexe, illustrant la lutte entre l'influence de l'environnement et la possibilité de changer, ajoutant une profondeur nuancée à l'univers de Harry Potter." 
  },
  {
    name: "Voldemort",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg",
    description: "Voldemort, également connu sous le nom de Lord Voldemort, est l'antagoniste principal de la série Harry Potter. Il est un sorcier extrêmement puissant et maléfique, obsédé par la pureté du sang et la domination du monde magique. Avec son visage pâle et ses yeux rouges reptiliens, Voldemort inspire la terreur et la cruauté. Il a commis d'innombrables actes de violence et de meurtre dans sa quête de pouvoir absolu. Voldemort représente le mal à l'état pur, dépourvu de compassion et de remords. Sa lutte contre Harry Potter symbolise le combat entre le bien et le mal, et sa menace constante crée une tension palpitante tout au long de la saga.?" 
  },
  {
    name: "Bellatrix Lestrange",
    imgSrc: "https://www.serieously.com/app/uploads/2022/05/bellatrix-lestrange10.jpg",
    description: "Bellatrix Lestrange est une sorcière cruelle et fanatique, fidèle servante de Lord Voldemort dans la série Harry Potter. Avec ses cheveux noirs ébouriffés et son regard intense, Bellatrix incarne la folie et la dévotion aveugle envers le Seigneur des Ténèbres. Elle est connue pour sa cruauté sadique et son plaisir à infliger la douleur. Bellatrix est une combattante redoutable, maîtrisant les arts de la magie noire. Sa loyauté fanatique envers Voldemort et sa participation active à ses plans font d'elle une menace redoutée. Bellatrix Lestrange est un personnage sombre et mémorable, ajoutant une touche de danger et de fanatisme à l'univers de Harry Potter."
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
     <FilterArray list={cardList}/>
    </>
  )
}

export default App






