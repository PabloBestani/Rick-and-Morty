import Cards from "../../components/cards/Cards";



const Home = function ({characters, onClose}) {
    return (
        <div>
            <Cards characters={characters} onClose={onClose}/>
        </div>
    )
}

export default Home;
