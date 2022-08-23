export default function Fruit({fruitInfos, onFruitDelete}){
    //state
    // const fruitInfos =  props.fruitInfos;
    // const onFruitDelete = props.onFruitDelete;

    //comportement

    //affichage (render)
    return  (
    <li key={fruitInfos.id}>
        {fruitInfos.nom}<button onClick={() => onFruitDelete(fruitInfos.id)}>x</button>
    </li>
  );
}