const express=require("express");
const cors=require("cors");
const axios=require("axios");
const app=express();


app.use(cors());

app.get("/getCoins", (req, res) => {
	axios({
		url: "https://sandbox-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BNB,BTC,ETH,XRP,BCH,LTC",
		method: "get",
        headers: {
            'X-CMC_PRO_API_KEY': '81deccec-661b-4f47-80c3-239965445917',
          },
	})
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

app.listen(5000,()=>{
    console.log("@enesgokk")
});