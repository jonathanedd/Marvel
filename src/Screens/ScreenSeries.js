import React from "react";
import axios from "axios";
import "../Styles/screenseries.css";

//Hooks
import { useEffect, useState } from "react";

const ScreenSeries = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=617e862772b3ae26bf7f8809a8ed6f70&hash=dfce4b5bb164d2c4747d086d4f77c326"
      )
      .then((res) => {
        // console.log(res.data.data.results);
        setSeries(res.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="series-main">
      <h3>Series</h3>

      <div className="series-cards">
        {series.map((serie) => (
          <div className="series-card" key={serie.id}>
            <span>{serie.title}</span>
            <img
              src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenSeries;
