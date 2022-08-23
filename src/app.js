import { useState } from "react";
import Fruit from "./component/Fruit";

function App() {
  //state(état)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "banane" },
    { id: 3, nom: "Cerise" },
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

  // const inputRef = useRef();

  //comportement
  const handleDelete = (id) => {
    console.log(id);

    //1.copie du state
    const fruitsCopy = [...fruits];

    //2.manipuler le
    const fruitCopyUpdating = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3.modifier le state
    setFruits(fruitCopyUpdating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.value);

    //1 copier
    const fruitsCopy = [...fruits];

    //2 manipulation sur la copie
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    fruitsCopy.push(fruitAAjouter);

    //3 modifier avec le seteur
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (e) => {
    setNouveauFruit(e.target.value);
  };

  //affichage(render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruitInfos={fruit} onFruitDelete={handleDelete} />
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="ajouter un fruit..."
          onChange={handleChange}
        />
        <button>Ajouter</button>
      </form>
    </div>
  );
}

export default App;

//gestion du formulaire

// 1 création du formulaire

// 2 soumission du formulaire ( onSubmit / handleSubmit )

// 3 collecte des données du formulaire

//methode useRef  / methode ascendante descante (onChange / handleChange )
