const express = require('express')
const htmlRoutes = require('./routes/html-routes.js');
const apiRoutes = require('./routes/API-routes.js');
const app = express()
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(apiRoutes);
app.use(htmlRoutes);








app.listen(PORT, () => {
    console.log("Listening on port" + PORT)
})
