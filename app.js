const express =  require('express');
const app = express();
const path = require('path');
const PORT = 36036;


app.use(express.static(__dirname + '/public'));
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});