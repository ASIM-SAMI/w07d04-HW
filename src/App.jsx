import './App.css';
import  {useState , useEffect} from 'react' 
import Axios from 'axios'
import {Character} from './components/Character'

const charactersUrl = Axios.get('https://rickandmortyapi.com/api/character')

function App() {
    const [characters, setCharacters ] = useState([])
	
	useEffect(() => {
		charactersUrl
		.then(response => {
			 
			setCharacters(response.data.results)

		}).catch(error => {
			console.err(error)
		  })
	},)

	const allCharacters = characters.map(char =>{

		  return ( <Character key={char.id} name={char.name} img={char.image}/> )
	})
      
	return (
	    <div className="container">
			{allCharacters}
    </div>
	);
}

export default App;
