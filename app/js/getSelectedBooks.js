import {selection} from "./domNodes";

const getSeletedNames = () => console.log(Array.from(selection.querySelectorAll("input:checked")).map(item => item.id));

export default getSeletedNames;