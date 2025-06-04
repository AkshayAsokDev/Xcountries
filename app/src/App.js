import { useState, useEffect } from "react";


const endpoint = "https://xcountries-backend.azurewebsites.net/all";

// Component for returning the single card
function CountryCard({name, image}) {
  return (<div 
    style={{
      //format
      display: "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",

      //sizing
      width: "200px",
      height: "200px",
      border : "1px solid grey",
      borderRadius : "5px",
      padding : "10px 10px 0px 10px",
    }}
  >
    <img style={{ width : "150px", height : "150px"}} src={image} alt={`image-of-country-${name}`} />
    <h5>{name}</h5>
  </div>)
}

function App() {

  const [countryData, setCountryData] = useState([])


  useEffect(() => {
    fetch(endpoint)
    .then((data) => data.json())
    .then(data => setCountryData(data))
    .catch(error => console.error("Error fetching data: " ,error));
  }, [])

  // console.log("countryData >>", countryData);

  return (
    <div className="App" style={{
      display : "flex",
      flexWrap : "wrap",
      gap : "10px",

    }}>
      {
        countryData.map((country, index) => <CountryCard name={country.name} image={country.flag} key={`${country.abbr}-${index}`} />)
      }
    </div>
  );
}

export default App;
