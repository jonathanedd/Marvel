import React from "react";
import axios from "axios";

//Hooks
import { useEffect, useState } from "react";

// https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=617e862772b3ae26bf7f8809a8ed6f70&hash=dfce4b5bb164d2c4747d086d4f77c326
//ts 1
// pu 617e862772b3ae26bf7f8809a8ed6f70
// pr 446b5eb921f3ab830d4235fbcee16a915970bade
// md5 1446b5eb921f3ab830d4235fbcee16a915970bade617e862772b3ae26bf7f8809a8ed6f70
// Hash :

const ScreenSeries = () => {
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=617e862772b3ae26bf7f8809a8ed6f70&hash=dfce4b5bb164d2c4747d086d4f77c326"
      )
      .then((res) => {
        console.log(res.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h3>Stories</h3>
    </div>
  );
};

export default ScreenSeries;
