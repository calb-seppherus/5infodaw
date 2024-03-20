import mongoose from 'mongoose';

//const conexao = await mooongose.connect('mongodb://localhost:27017/5info');
const conexao = await mooongose.connect('mongodb://freitas:josue3107@ac-btxyksn-shard-00-00.colj1km.mongodb.net:27017,ac-btxyksn-shard-00-01.colj1km.mongodb.net:27017,ac-btxyksn-shard-00-02.colj1km.mongodb.net:27017/?ssl=true&replicaSet=atlas-lso942-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');

export default conexao;