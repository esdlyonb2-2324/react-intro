
import './App.css'
import {Machin} from "./Machin";
import 'bootstrap/dist/css/bootstrap.css'
import {TasDeBoutons} from "./TasDeBoutons";

function App() {

  const tableauBoutons = ["salut","je","suis","un","tas","de","boutons"]

  const handleSelectedButton = (textButton:string)=>{
    console.log(textButton)
  }

  return (

      <TasDeBoutons textButtons={tableauBoutons} onSelectedButton={handleSelectedButton} />
  )
}

export default App
