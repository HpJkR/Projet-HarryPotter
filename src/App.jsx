import { useState } from 'react'

import Card from './components/Cards'
import Forms from "./components/Form"
import FilterArray from "./components/Filter"
import Header from './components/Header'

import './App.css'


const cardList = [
  {
    name: "Harry Potter",
    imgSrc: "https://images.rtl.fr/~c/770v513/rtl/www/1582375-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg", 
    description: "Harry Potter, jeune sorcier orphelin célèbre pour avoir survécu à l'attaque de Lord Voldemort. Courageux et déterminé, il incarne l'espoir et l'amitié dans sa quête pour un monde meilleur. Sa saga captivante a inspiré des millions de lecteurs, les incitant à croire en eux-mêmes et à lutter pour la justice et la paix. Harry est aimé pour sa loyauté envers ses amis, son empathie et sa volonté inébranlable de protéger ceux qu'il aime. Son parcours épique révèle un héros aux multiples facettes, prêt à affronter tous les défis pour vaincre les forces du mal.",
    type : "gentil",
    genre : "homme",
    
    
  },
  {
    name: "Hermione Granger",
    imgSrc: "https://www.melty.fr/wp-content/uploads/meltyfr/2022/01/media-35272.jpg",
    description: "Hermione Granger, sorcière brillante et déterminée, incarne l'intelligence et la force de caractère. Son esprit vif et sa soif de connaissances la propulsent dans des aventures audacieuses. Modèle d'émancipation et d'égalité, elle défie les normes établies avec courage et ténacité. Hermione est une amie loyale, prête à se battre pour la justice et à protéger ceux qui lui sont chers. Sa présence lumineuse et sa détermination inébranlable font d'elle un pilier essentiel dans la lutte contre les forces du mal.",
    type : "gentil",
    genre : "femme"
    
  },
  {
    name: "Ron Weasley",
    imgSrc: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/cinema/dossiers/acteur-harry-potter/ron-weasley/57107513-1-fre-FR/Ron-Weasley.jpg",
    description: "Ron Weasley est un loyal sorcier et le meilleur ami de Harry Potter. Avec ses cheveux roux et son sens de l'humour, il apporte chaleur et camaraderie au trio. Malgré sa famille nombreuse et modeste, Ron se distingue par sa bravoure et son soutien inébranlable. Il fait preuve de courage lors des défis périlleux, se tenant toujours aux côtés de ses amis. Ron incarne l'amitié sincère, la loyauté et la volonté de se surpasser. Sa présence joviale et son esprit d'équipe font de lui un personnage aimé et indispensable dans l'univers de Harry Potter.",
    type : "gentil",
    genre : "homme"
  },
  {
    name: "Albus Dumbledore",
    imgSrc: "https://fr.web.img6.acsta.net/newsv7/21/07/13/12/56/4409545.jpg",
    description: "Albus Dumbledore est un puissant sorcier et le directeur emblématique de l'école de sorcellerie Poudlard. Avec sa longue barbe blanche et ses yeux pétillants, Dumbledore est connu pour sa sagesse et son intelligence exceptionnelle. Il est un mentor pour Harry Potter, le guidant dans sa lutte contre Voldemort. Dumbledore incarne la bienveillance, la tolérance et la capacité à voir la beauté même dans les moments les plus sombres. Il est respecté et admiré par la communauté magique pour sa défense des valeurs de justice et de liberté.",
    type : "gentil",
    genre : "homme"
  },
  {
    name: "Severus Rogue",
    imgSrc: "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2022-12/roguefintheorie.jpeg", 
    description: "Severus Rogue est un personnage complexe de l'univers de Harry Potter. Initialement présenté comme un professeur austère et antipathique à Poudlard, il se révèle plus tard avoir une loyauté profonde et ambiguë envers Harry Potter. Avec son apparence sombre et son regard perçant, Rogue est un maître des potions talentueux et redouté. Son histoire tragique et son implication dans la lutte contre Voldemort lui confèrent une aura de mystère et de profondeur. Sa complexité émotionnelle en fait un personnage fascinant et controversé, dont les motivations et les actions sont discutées longtemps après la fin de la saga.",
    type : "gentil",
    genre : "homme"
  },
  {
    name: "Drago Malfoy",
    imgSrc: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2022/10/harry-potter_-tom-felton-a-vecu-une-veritable-descente-aux-enfers-compressed.jpg",
    description: "Drago Malfoy est un étudiant à Poudlard et un personnage central dans la série Harry Potter. Avec ses cheveux blonds et son arrogance manifeste, il incarne le stéréotype du méchant élève. Malgré son attitude provocatrice et sa loyauté envers sa famille de sang-pur, Drago est souvent tiraillé entre son rôle attendu de Mangemort et ses propres doutes. Au fil de l'histoire, il révèle des failles et une vulnérabilité, remettant en question les notions simplistes de bien et de mal. Il illustre la lutte entre l'influence de l'environnement et la possibilité de changer, ajoutant une profondeur nuancée à l'univers de Harry Potter.",
    type : "méchant",
    genre : "homme"
  },
  {
    name: "Voldemort",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg",
    description: "Voldemort, également connu sous le nom de Lord Voldemort, est l'antagoniste principal de la série Harry Potter. Il est un sorcier extrêmement puissant et maléfique, obsédé par la pureté du sang et la domination du monde magique. Avec son visage pâle et ses yeux rouges reptiliens, Voldemort inspire la terreur et la cruauté. Il a commis d'innombrables actes de violence et de meurtre dans sa quête de pouvoir absolu. Il représente le mal à l'état pur, dépourvu de compassion et de remords. Sa lutte contre Harry Potter symbolise le combat entre le bien et le mal, et sa menace constante crée une tension palpitante tout au long de la saga.",
    type : "méchant",
    genre : "homme"
  },
  {
    name: "Bellatrix Lestrange",
    imgSrc: "https://www.serieously.com/app/uploads/2022/05/bellatrix-lestrange10.jpg",
    description: "Bellatrix Lestrange est une sorcière cruelle et fanatique, fidèle servante de Lord Voldemort dans la série Harry Potter. Avec ses cheveux noirs ébouriffés et son regard intense, Bellatrix incarne la folie et la dévotion aveugle envers le Seigneur des Ténèbres. Elle est connue pour sa cruauté sadique et son plaisir à infliger la douleur. Bellatrix est une combattante redoutable, maîtrisant les arts de la magie noire. Sa participation active à ses plans font d'elle une menace redoutée. Bellatrix Lestrange est un personnage sombre et mémorable, ajoutant une touche de danger et de fanatisme à l'univers de Harry Potter.",
    type : "méchant",
    genre : "femme"
  },
];

function App() {
  
  const [filteredList, setFilteredList] = useState(cardList);

  const handleFilter = (genre) => {

    const filtered = cardList.filter((list) => list.genre === genre);
    setFilteredList(filtered)
  }

  const handleFilterType = (type) => {

    const filtered = cardList.filter((list) => list.type === type);
    setFilteredList(filtered)
  }

  const handleReset = () => {
    setFilteredList(cardList)
  }

  return (
    <>
    <div className='topPage'>
    <Header/>
    <Forms/>
      

    </div>
    
      
      <FilterArray  handleFilter={handleFilter} handleFilterType={handleFilterType} handleReset={handleReset}/>

        <div className='appGlobalCard'>
          <Card list={filteredList} />
        </div>
    </>
  )
}

export default App






