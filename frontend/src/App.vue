<template>
  <NavBar></NavBar>
  <section>

    <div class="box-form">
      <h2>Adicionar usuário aos favoritos:</h2>

      <input type="text" placeholder="Digite o username do usuário..." name="username" id="input-username"/>
      <button type="submit" @click="cadastrar()">Enviar</button>
      
      <MsgErro :msg="msgErro" v-show="msgErro"/>
    </div><!--box-form-->


    <h2>Favoritos:</h2>
    <div class="box-users">
      
      <UserContent v-for="obj in favorits" :key="obj.id" :userContent="obj" />
      
    </div><!--box-users-->

    <button class="button-order" @click="ordenar()">Ordenar em ordem alfabética de nome</button>
  </section>
  
</template>

<script>
import MsgErro from './components/MsgErro.vue';
import NavBar from './components/NavBar.vue'
import UserContent from './components/UserContent.vue';

import axios from 'axios'


export default {
  name: 'App',
  components: {
    NavBar,
    UserContent,
    MsgErro
},
  data(){
    const favorits = []
    const msgErro = ""
    return{
      favorits,
      msgErro
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
    cadastrar(){
      let username = document.querySelector('#input-username').value;
      axios.post(`http://localhost:3001/users`,{username : username})
      .then((res)=>{
        console.log(res)
        setTimeout(()=>location.reload(), 500);
      }).catch((err)=>{
        this.msgErro = err.response.data
        setTimeout(()=>this.msgErro = "", 5000);
      })
    },
    ordenar(){
     this.favorits[0].sort((a, b)=>{
        if(a.name < b.name){
          return -1;
        }else if(a.name > b.name){
          return 1;
        }else{
          return 0;
        }
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

.button-order{
  padding: 10px 20px;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 15px;
  padding: 10px 20px;
  background-color: rgb(7, 158, 158);
  color: #fff;
  border: 0.5px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.7s;
  font-weight: bold;
}
.button-order:hover{
  border-color: rgb(8, 207, 207);
  background-color: rgb(8, 207, 207);
}
</style>
