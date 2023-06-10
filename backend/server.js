const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(express.json());

// uso o cors para gerar um middleware que permite que a aplicação seja acessada
app.use(cors());

// utilizo o bodyParser para conseguir manipular minhas requisições POST
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

// Variaveis

const favorites = [];
const githubUsers = [];


// retornando todos os users da API do github
axios.get('https://api.github.com/users')
.then((res)=>{
    // como o data retorna um array, passamos por esse array
    // e salvamos os objetos no githubUsers[]
    res.data.map(val =>{
        githubUsers.push(val)
    })
    
})
.catch(err=>console.log(err))


// FUNCTIONS

function saveFavorite(username){
    // requisição específica para coletar dados do usuário
    axios.get(`https://api.github.com/users/${username}`)
    .then((res)=>{
        favorites.push({
            "username": username, 
            "name": res.data.name, 
            "avatar": res.data.avatar_url, 
            "url": res.data.html_url,
            "star": false
        });
    })
}


// ROTAS

app.get('/', (req, res)=>{
    res.json(githubUsers)
    res.sendStatus(200)
})

// retorna os favoritos
app.get('/users', (req, res)=>{
    res.json(favorites);
})

// adiciona um favorito
app.post('/users', (req, res)=>{    

    if(favorites.length < 5){
        // verifica de existe um user no array de favoritos
        let containFavotires = 0;
        favorites.map(val =>{
            if(val.username == req.body.username){
                containFavotires += 1;
            }
        })

        if(containFavotires == 0 ){
            // se não existir um usuário no array de favoritos verifica na API e salva se existir
            let containGithub = 0;
            
            githubUsers.map(val =>{
                if(val.login == req.body.username){
                    
                    containGithub = 1;
                }
            })

            if(containGithub == 1){
                saveFavorite(req.body.username);
                res.sendStatus(200)
                
            }else{
                res.status(500).send('Não contém nenhum usuário no GitHub com esse nome.');
                
            }
        }else{
            res.status(500).send('Esse usuário já está nos favoritos.')
            
        }
    }else{
        res.status(500).send('Já foi atingido o limite de 5 usuários na lista');
        
    }
})

// deleta um usuário dos favoritos
app.delete('/users/:username', (req, res)=>{
    let user = req.params.username;

    favorites.map((val, index) =>{
        if(val.username == user){
            favorites.splice(index, 1);
        }
    })
    res.status().send(200)
})

// atualiza a estrela dos favoritos
app.put('/users/:username/toggle-star', (req, res)=>{
    let user = req.params.username;

    favorites.map(val =>{
        if(val.username == user){
            val.star = true;
        }else{
            val.star = false;
        }
    })
    res.status().send(200)
})

//exportando app 
module.exports = app