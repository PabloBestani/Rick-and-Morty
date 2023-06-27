// import { useEffect, useRef, useState } from 'react';
// import Card from '../card/Card';
// import styles from './slider.module.css';


//TODO crear los iconos en los tags <i> (iconos < y >);

//* hay cosaas que salen en el video pero no se si srven


// function Slider ({characters,onClose}) {


//     return (
//         <div className={styles.container}>
//              <i></i>
//              <ul className={styles.carousel} >
//                      {characters.map((char, index) => (
//                          <li className={styles.card} key={index}>
//                              <Card char={char} onClose={onClose}/>
//                          </li>
//                      ))}
//              </ul>
//              <i></i>
//         </div>
//     );
// }

// export default Slider;



// return (
//     <div className='gallery'>
//         <div className='gallery-container' >
//             <Card char={char} onClose={onClose}/>
//             <Card char={char} onClose={onClose}/>
//             <Card char={char} onClose={onClose}/>   
//         </div>
//         <div className='gallery-controls'>

//         </div>
//     </div>
// );








//*INTENTO DE SLIDER CON MOUSE WHEEL, NO FUNCIONA

// function Slider ({characters,onClose}) {
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         const slider = sliderRef.current;
        
//         const handleMouseWheel = (e) => {
//             e.preventDefault();
//             const delta = Math.sign(e.deltaX);
//             slider.scrollLeft += delta * 100;
//         };

//         slider.addEventListener('wheel', handleMouseWheel, { passive: false });

//         return () => {
//             slider.removeEventListener('wheel', handleMouseWheel);
//         };
//     }, []);

//     return (
//         <div className={style.slider} ref={sliderRef}>
//             {/* <div className={style.slider}> */}
//                {characters.map((char) => (
//                   <Card char={char} key={char.id} onClose={onClose} />
//                ))}
//             {/* </div> */}
//         </div>
//     );
// }

// export default Slider;



































//*SEGUNDA PRUEBA, TAMPOCO FUNCIONA
// export default function Slider({characters,onClose}) {
//     const carouselRef = useRef(null);
//     // const cardRef = useRef(null);
//     let isDragging = false;

//     const dragStart = () => {
//         isDragging = true;
//         console.log(isDragging);
//         carouselRef.current.classList.add("dragging");
//         // cardRef.current.classList.add("cardDragging");
//     }

//     const dragging = (e) => {
//         if (isDragging === false) return;
//         if (isDragging) {
//             carouselRef.current.scrollLeft = e.pageX;
//         }
//     }

//     const dragStop = () => {
//         isDragging = false;
//         console.log(isDragging);
//         carouselRef.current.classList.remove("dragging");
//     }


//     useEffect(() => {
//         const ul = carouselRef.current;
//         document.addEventListener("dragend", dragStop);
//         if (ul) {
//             ul.addEventListener("mousedown", dragStart);
//             ul.addEventListener("mousemove", dragging);
//         }

//         return () => {
//             document.removeEventListener("dragend", dragStop);
//         }
//     }, [])
   
//    return (
//    <div className={styles.wrapper}>
//         <i></i>
//         <ul className={styles.carousel} ref={carouselRef} draggable>
//                 {characters.map((char, index) => (
//                     <li className={styles.card} key={index}>
//                         <Card char={char} onClose={onClose}/>
//                     </li>
//                 ))}
//         </ul>
//         <i></i>
//    </div>
//    );
// }

















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




//*CODIGO VIEJO, POR SI NECESITO CONSULTAR ALGO: no funciona


// const carouselRef = useRef(null);
// // const cardRef = useRef(null);
// const [scrollLeft, setScrollLeft] = useState(0);

// let isDragging = false, startX, startScrollLeft;


// const onDragStart = (e) => {
//     isDragging = true;
//     carouselRef.current.classList.add("dragging");
//     // cardRef.current.classList.add("dragging");
//     startX = e.pageX;
//     // startScrollLeft = carouselRef.current.scrollLeft;
//     startScrollLeft = scrollLeft;
// }

// const onDragStop = () => {
//     isDragging = false;
//     carouselRef.current.classList.remove("dragging");
//     // cardRef.current.classList.remove("dragging");
//     carouselRef.current.scrollLeft = scrollLeft;
// }

// const onDragging = (e) => {
//     // console.log(e.pageX);
//     if (!isDragging) return;
//     const delta = e.pageX - startX;
//     setScrollLeft(startScrollLeft - delta);
//     // carouselRef.current.scrollLeft = e.pageX;

//     // carouselRef.current.scrollLeft = startScrollLeft - (delta);
// }

// useEffect(() => {
//     const ul = carouselRef.current;
//     if (ul) {
//         // ul.addEventListener("dragstart", onDragStart);
//         // ul.addEventListener("drag", onDragging);
//         // ul.addEventListener("dragend", onDragStop);
//         ul.addEventListener("mousedown", onDragStart);
//         ul.addEventListener("mousemove", onDragging);
//         document.addEventListener("mouseup", onDragStop);
//         // ul.addEventListener("mouseleave", onDragStop);
//     }
//     return () => {
//         if (ul) {
//             // ul.removeEventListener("dragstart", onDragStart);
//             // ul.removeEventListener("drag", onDragging);
//             // ul.removeEventListener("dragend", onDragStop);
//         ul.removeEventListener("mousedown", onDragStart);
//         ul.removeEventListener("mousemove", onDragging);
//         document.removeEventListener("mouseup", onDragStop);
//         // ul.removeEventListener("mouseleave", onDragStop);
//         }
//     }
// }, []);