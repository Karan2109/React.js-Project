import { useState } from "react";
import Start_Game from "./components/Start_Game";
import Game_Play from "./components/Game_Play";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  };

  return (
    <>
    {
      isGameStarted ? <Game_Play /> : <Start_Game toggle={toggleGamePlay} />
    }
    </>
  )
}

export default App
