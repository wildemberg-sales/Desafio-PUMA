const express = require('express');
const app = express();
const axios = require('axios');

const port = 3001;

app.use(express.json());


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
            "username": res.username, 
            "name": res.name, 
            "avatar": res.avatar_url, 
            "url": res.url,
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
    let body = req.body;
    console.log(body)

    if(favorites.length < 5){
        // verifica de existe um user no array de favoritos
        let containFavotires = 0;
        favotites.map(val =>{
            if(val.name == req.body.username){
                containFavotires += 1;
            }
        })

        if(containFavotires == 0 ){
            // se não existir um usuário no array de favoritos verifica na API e salva se existir
            let containGithub = 0;
            githubUsers.map(val =>{
                if(val.login == req.body.username){
                    containGithub += 1;
                }
            })

            if(containGithub == 1){
                saveFavorite(req.body.username);
                res.status(201) // aceito
            }else{
                res.status(406) //não aceito
                res.send('Usuários não encontrado no github')
            }
        }else{
            res.status(406) //não aceito
            res.send('Usuário já existe no array')
        }
    }else{
        res.status(406) //não aceito
        res.send(`Array já possui ${favorites.length} usuários`)
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