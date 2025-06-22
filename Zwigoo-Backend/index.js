const express = require('express');
const cors = require('cors');
const  axios  = require('axios');
const PORT = 3000;
const app = express();

app.use(cors());

app.get('/api/menu/:resId',async (req,res)=>{
    try{
        const restarantId = req.params.resId;

        const swiggymenu = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9705033&lng=76.817808&restaurantId=${restarantId}`;
        const data = await axios.get(swiggymenu,{
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Accept": "application/json"
            }
        });

        res.json(data.data);
    }catch(err){
        res.status(500).json({ error: "Failed to fetch data from Swiggy" });
    }
})

app.get('/api/swiggy',async (req,res)=>{
    const Swigyy_url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enables=true&page_type=DESKTOP_WEB_LISTING";
    try{
        const response = await axios.get(Swigyy_url,{
            headers:{
                "User-Agent": "Mozilla/5.0",
                "Accept": "application/json",
            }
        });

        res.json(response.data);
    }catch(err){
        console.error("Error fetching Swiggy data:", err.message);
        res.status(500).json({ error: "Failed to fetch Swiggy data" });
    }
});

app.listen(PORT,()=>{
    console.log(`✅ Server is Running on Port ${PORT}`);
});