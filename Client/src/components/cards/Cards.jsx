import Card from '../card/Card';
import style from './cards.module.css';

export default function Cards({characters,onClose}) {
   return (
   <div className={style.container}>
      <div className={style.grid}>
         {characters.map((char) => (
            <Card char={char} key={char.id} onClose={onClose} />
         ))}
      </div>
   </div>
   );
}
