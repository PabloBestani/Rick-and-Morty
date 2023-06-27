import Cards from "../../components/cards/Cards";
// import Slider from "../../components/slider/Slider";







const Home = function ({characters, onClose}) {
    return (
        <div>
            <Cards characters={characters} onClose={onClose}/>
            {/* <Slider characters={characters} onClose={onClose}/> */}
        </div>
    )
}

export default Home;
