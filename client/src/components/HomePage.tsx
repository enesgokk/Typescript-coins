import React, { useState, useEffect } from "react";
import CoinTables from "./CoinTables";
import { getAllCoins } from "../services/coinServices";
import { useDispatch } from "react-redux";

import { allCoins } from "../features/counter/counterSlice";

const HomePage = () => {
  const [allData, setAllData] = useState<any>([]);
  const dispatch = useDispatch();
  var timer;
  useEffect(() => {
    async function getPosts() {
      timer = setInterval(async function() {
      //setAllData([await getAllCoins()]);
      dispatch(allCoins([await getAllCoins()]));
      }, 5000);
    }
    getPosts();
  }, []);

  return (
    <div>
      <CoinTables /*allData={allData}*/ />
    </div>
  );
};

export default HomePage;
