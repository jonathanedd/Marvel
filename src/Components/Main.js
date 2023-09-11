import axios from "axios";
import React from "react";
import Cards from "./Cards";
import "../Styles/main.css";

import { useState, useEffect } from "react";
// import { calcLength } from "framer-motion";

const Main = () => {
  const [characters, setCharacters] = useState();
  const [inputSearch, setInputSearch] = useState("");
  // const [loading, setLoading] = useState(false);

  // const marvelApi = () => {
  //   axios
  //     .get(
  //       `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=617e862772b3ae26bf7f8809a8ed6f70&hash=dfce4b5bb164d2c4747d086d4f77c326`
  //     )
  //     .then((res) => {
  //       setCharacters(res.data.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    marvelApi();
  }, [inputSearch]);

  const marvelApi = () => {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/characters`, {
        params: {
          ts: 1,
          apikey: "617e862772b3ae26bf7f8809a8ed6f70",
          hash: "dfce4b5bb164d2c4747d086d4f77c326",
          nameStartsWith: inputSearch,
        },
      })
      .then((res) => {
        setCharacters(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(characters);

  const handleSearch = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
    console.log(inputSearch);
  };

  return (
    <>
      <div className="search">
        <h3>Search for your fav Hero</h3>
        <form>
          <input
            type="text"
            placeholder="Type here"
            onChange={handleSearch}
            value={inputSearch}
          />
          <button onClick={handleSearch}>Submit</button>
        </form>
      </div>

      {/* <Cards characters={characters} /> */}

      {characters ? <Cards characters={characters} /> : "Hero not found"}
    </>
  );
};

export default Main;

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import Cards from "./Cards";
// import "../Styles/main.css";

// const Main = () => {
//   const [characters, setCharacters] = useState([]);
//   const [inputSearch, setInputSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (inputSearch.trim() !== "") {
//       fetchCharacters();
//     } else {
//       // Si el input está vacío, vaciamos la lista de personajes
//       setCharacters([]);
//     }
//   }, [inputSearch]);

//   const fetchCharacters = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `https://gateway.marvel.com:443/v1/public/characters`,
//         {
//           params: {
//             ts: 1,
//             apikey: "617e862772b3ae26bf7f8809a8ed6f70",
//             hash: "dfce4b5bb164d2c4747d086d4f77c326",
//             nameStartsWith: inputSearch,
//           },
//         }
//       );

//       setCharacters(response.data.data.results);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error al obtener datos de la API", err);
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchCharacters(); // Realiza la búsqueda cuando se hace clic en el botón "Submit"
//   };

//   return (
//     <>
//       <div className="search">
//         <h3>Search for your favorite Hero</h3>
//         <form onSubmit={handleSearch}>
//           <input
//             type="text"
//             placeholder="Type here"
//             onChange={(e) => setInputSearch(e.target.value)}
//             value={inputSearch}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : characters.length > 0 ? (
//         <Cards characters={characters} />
//       ) : (
//         <p>No heroes found.</p>
//       )}
//     </>
//   );
// };

// export default Main;
