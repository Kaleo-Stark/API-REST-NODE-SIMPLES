const express = require('express') ; // ... Responsavel pelos recursos WEB.
const  cors   =  require('cors')   ; // ... Responsavel por controlar o acesso a API.

const app = express(); // ................. Atribui a variavel 'app' uma estancia do express.

app.use   (     cors()     ); // .......... Configura a API para aceitar requisições de qualquer origem com o cors.
app.use   ( express.json() ); // .......... Configura a API para retornar tudo em JSON.
app.listen(     3333       ); // .......... Faz a API escutar a porta '3333' do dispositivo servidor da API.
