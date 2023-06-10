<template>
  <NavBar></NavBar>
  <section>
    
    <div class="box-form">
      <h2>Adicionar usuário aos favoritos:</h2>
      <form action="http://localhost:3001/users" method="post" id="form-busca">
        <input type="text" placeholder="Digite o username do usuário..." name="username"/>
        <button type="submit" v-on:click="onclick()">Enviar</button>
      </form>
    </div><!--box-form-->


    <h2>Favoritos:</h2>
    <div class="box-users">

      <div class="user">
        
        <img src="https://avatars.githubusercontent.com/u/1?v=4"/>
        <div class="user-content">
          <p>Nome do usuário</p>
          <p><span>Username:</span> mojombo</p>
        </div>

        <div class="user-buttons">

          <div class="user-star">
            <a href="#">
              <!-- <img src="https://img.icons8.com/tiny-glyph/32/star.png" alt="star"/> -->
              <img src="https://img.icons8.com/tiny-color/32/star.png" alt="star"/>
              <legend>Favoritar</legend>
            </a>
          </div>

          <div class="user-remove">
            <a href="#">
              <img width="50" src="https://img.icons8.com/ios/50/delete--v1.png" alt="delete--v1"/>
              <legend>Deletar</legend>
            </a>
          </div>

          <div class="user-link">
            <a href="https://github.com/mojombo">
              <img src="https://img.icons8.com/ios-filled/50/link--v1.png" alt="link--v1"/>
              <legend>GitHub</legend>
            </a>
          </div>
        
        </div>

      </div><!--user-->

      <div class="user">
        
        <img src="https://avatars.githubusercontent.com/u/1?v=4"/>
        <div class="user-content">
          <p>Nome do usuário</p>
          <p><span>Username:</span> mojombo</p>
        </div>
        <div class="user-buttons">

          <div class="user-star">
            <a href="#">
              <!-- <img src="https://img.icons8.com/tiny-glyph/32/star.png" alt="star"/> -->
              <img src="https://img.icons8.com/tiny-color/32/star.png" alt="star"/>
              <legend>Favoritar</legend>
            </a>
          </div>

          <div class="user-remove">
            <a href="#">
              <img width="50" src="https://img.icons8.com/ios/50/delete--v1.png" alt="delete--v1"/>
              <legend>Deletar</legend>
            </a>
          </div>

          <div class="user-link">
            <a href="https://github.com/mojombo">
              <img src="https://img.icons8.com/ios-filled/50/link--v1.png" alt="link--v1"/>
              <legend>GitHub</legend>
            </a>
          </div>
        </div>
      </div><!--user-->

      <div class="user">
        
        <img src="https://avatars.githubusercontent.com/u/1?v=4"/>
        <div class="user-content">
          <p>Nome do usuário</p>
          <p><span>Username:</span> mojombo</p>
        </div>
        <div class="user-buttons">

          <div class="user-star">
            <a href="#">
              <!-- <img src="https://img.icons8.com/tiny-glyph/32/star.png" alt="star"/> -->
              <img src="https://img.icons8.com/tiny-color/32/star.png" alt="star"/>
              <legend>Favoritar</legend>
            </a>
          </div>

          <div class="user-remove">
            <a href="#">
              <img width="50" src="https://img.icons8.com/ios/50/delete--v1.png" alt="delete--v1"/>
              <legend>Deletar</legend>
            </a>
          </div>

          <div class="user-link">
            <a href="https://github.com/mojombo">
              <img src="https://img.icons8.com/ios-filled/50/link--v1.png" alt="link--v1"/>
              <legend>GitHub</legend>
            </a>
          </div>
        </div>
      </div><!--user-->

      <div class="user">
        
        <img src="https://avatars.githubusercontent.com/u/1?v=4"/>
        <div class="user-content">
          <p>Nome do usuário</p>
          <p><span>Username:</span> mojombo</p>
        </div>
        <div class="user-buttons">

          <div class="user-star">
            <a href="#">
              <!-- <img src="https://img.icons8.com/tiny-glyph/32/star.png" alt="star"/> -->
              <img src="https://img.icons8.com/tiny-color/32/star.png" alt="star"/>
              <legend>Favoritar</legend>
            </a>
          </div>

          <div class="user-remove">
            <a href="#">
              <img width="50" src="https://img.icons8.com/ios/50/delete--v1.png" alt="delete--v1"/>
              <legend>Deletar</legend>
            </a>
          </div>

          <div class="user-link">
            <a href="https://github.com/mojombo">
              <img src="https://img.icons8.com/ios-filled/50/link--v1.png" alt="link--v1"/>
              <legend>GitHub</legend>
            </a>
          </div>
        </div>
      </div><!--user-->

      <div class="user">
        
        <img src="https://avatars.githubusercontent.com/u/1?v=4"/>
        <div class="user-content">
          <p>Nome do usuário</p>
          <p><span>Username:</span> mojombo</p>
        </div>
        <div class="user-buttons">

          <div class="user-star">
            <a href="#">
              <!-- <img src="https://img.icons8.com/tiny-glyph/32/star.png" alt="star"/> -->
              <img src="https://img.icons8.com/tiny-color/32/star.png" alt="star"/>
              <legend>Favoritar</legend>
            </a>
          </div>

          <div class="user-remove">
            <a href="#">
              <img width="50" src="https://img.icons8.com/ios/50/delete--v1.png" alt="delete--v1"/>
              <legend>Deletar</legend>
            </a>
          </div>

          <div class="user-link">
            <a href="https://github.com/mojombo">
              <img src="https://img.icons8.com/ios-filled/50/link--v1.png" alt="link--v1"/>
              <legend>GitHub</legend>
            </a>
          </div>
        </div>
      </div><!--user-->

    </div><!--box-users-->

  </section>
</template>

<script>
import NavBar from './components/NavBar.vue'

import axios from 'axios'


export default {
  name: 'App',
  components: {
    NavBar,
  },
  data(){
    const favorits = [];
    return{
      favorits,
    }
  },
  created(){
    axios.get('http://localhost:3001/users')
    .then((res)=>{
      console.log(res.data)
      this.favorits.push(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },
  methods:{
    onClick(){
      let form = document.getElementById('form-busca');
      form.addEventListener('submit', (e)=>{
        e.preventDefault();
      })
    }
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

section{
  margin: 20px;
  padding: 10px;
  text-align: center;
}

a{
  text-decoration: none;
  color: blue;
}

h2{
  margin-top: 40px;
}

.box-form{
  text-align: center;
}
.box-form h2{
  margin: 0;
  margin-bottom: 10px;

}

.box-form input{
  font-size: 15px;
}
.box-form input[type="text"]{
  width: 300px;
  padding: 10px 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 0.5px solid #ccc;
}
.box-form button{
  font-size: 15px;
  padding: 10px 20px;
  background-color: rgb(7, 158, 158);
  color: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 0.5px solid #ccc;
  cursor: pointer;
  transition: 0.7s;
  font-weight: bold;
}
.box-form button:hover{
  border-color: rgb(8, 207, 207);
  background-color: rgb(8, 207, 207);
}

.box-users{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.user{
  width: calc((100% / 5) - 10px);
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px;
}
.user img{
  width: 200px;
  border-radius: 10px;
}

.user-content{
  padding: 10px 0;
  line-height: 30px;
}
.user-content span{
  font-weight: bold;
}

.user-buttons{
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  margin: 30px 0;
}

.user-star, .user-remove, .user-link{
  border: 1px solid #ccc;
  border-radius: 100%;
  padding: 15px;
  transition: 0.7s;
}
.user-star:hover, .user-remove:hover, .user-link:hover{
  border-color: aqua;
}
.user-star img, .user-remove img, .user-link img{
  width: 32px;
}

</style>
