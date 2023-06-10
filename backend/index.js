const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
var bodyParser = require('body-parser');

const port = 3001;

app.use(express.json());
app.use(cors());

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
            "url": res.data.url,
            "star": false
        });
    })
}


// ROTAS

app.get('/', (req, res)=>{
    res.json(githubUsers)
    console.log(githubUsers.length)
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
            if(val.name == req.body.username){
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
                res.status(201).json('Adicionado') // aceito
            }else{
                res.status(406).json('Usuários não encontrado no github')
            }
        }else{
            res.status(406).json('Usuário já existe no array')
        }
    }else{
        res.status(406).json(`Array já possui ${favorites.length} usuários`)
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
})

app.listen(port, ()=>{console.log(`Rodando na porta http://localhost:${port}`)});