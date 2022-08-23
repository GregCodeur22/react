import { useState } from "react";

function App() {
  //state(état)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "banane" },
    { id: 3, nom: "Cerise" },
  ]);

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

  //affichage(render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}{" "}
            <button onClick={() => handleDelete(fruit.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
