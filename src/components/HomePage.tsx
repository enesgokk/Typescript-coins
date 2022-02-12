import React, { useState, useEffect } from 'react'
import axios from "axios"

const HomePage = () => {
    const [allData, setAllData] = useState();

    useEffect(() => {
        // var axios = require('axios');

        // var config = {
        //   method: 'get',
        //   url: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        //   headers: {"Access-Control-Allow-Origin": "http://localhost:3000"}

        // };
        
        // axios(config)
        // .then(function (response:any) {
        //   console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error:any) {
        //   console.log(error);
        // });
    }, [])


    return (
        <div>HomePage</div>
    )
}

export default HomePage