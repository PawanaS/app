
import Census from "./components/Census";
//import "./styles.css";
import { useState, useEffect } from "react";
import { getPopulation } from "./services/PopulationApi";


function App() {
  const [population, setPopulation] = useState([]);
  //const [population, setPopulation] = useState();


  console.log("fetching data...");
  console.log(population)

 

  //calling the data when the component renders
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopulation();
      console.log(data);
      setPopulation(data.data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* <Census getPopulation={getPopulation} population={population} /> */}
      {population && population.length &&<Census getPopulation={getPopulation} population={population} />}
    </div>
  );
}
export default App;