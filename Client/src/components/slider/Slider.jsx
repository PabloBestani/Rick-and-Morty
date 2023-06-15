import Card from '../card/Card';
import styles from './slider.module.css';


//TODO crear los iconos en los tags <i> (iconos < y >);

function dragHandler(e) {
    // console.log(e.pageX);
    e.target.scrollLeft = e.pageX;
}


export default function Slider({characters,onClose}) {
   return (
   <div className={styles.container}>
        <i></i>
        <ul className={styles.carousel} onDrag={dragHandler} draggable>
            {characters.map((char) => (
                // <li className={styles.card}>
                <Card char={char} key={char.id} onClose={onClose} />
                /* </li> */
                ))}
        </ul>
        <i></i>
   </div>
   );
}



// import Card from '../card/Card';
// import style from './cards.module.css';

// export default function Cards({characters,onClose}) {
//    return (
//    <div className={style.container}>
//       <div className={style.grid}>
//          {characters.map((char) => (
//             <Card char={char} key={char.id} onClose={onClose} />
//          ))}
//       </div>
//    </div>
//    );
// }
