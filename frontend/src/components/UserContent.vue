<template>
    <div class="user" v-for="(obj, index) in userContent" :key="index">
        <img :src="obj.avatar"/>
        <div class="user-content">
            <p>{{ obj.name }}</p>
            <p><span>Username: </span>{{ obj.username }}</p>
        </div>

        <div class="user-buttons">

            <a class="user-star" @click="onCLickPut(obj.username)">
                <img src="https://img.icons8.com/tiny-color/32/star.png" alt="star" v-if="obj.star"/>
                <img src="https://img.icons8.com/tiny-glyph/32/star.png" alt="star" v-else/>
                <legend>Favoritar</legend>
            </a>

            <a class="user-remove" @click="onClickDelete(obj.username)">
                <img width="50" src="https://img.icons8.com/ios/50/delete--v1.png" alt="delete--v1"/>
                <legend>Deletar</legend>
            </a>

            <a class="user-link" :href="obj.url" target="_blank">
                <img src="https://img.icons8.com/ios-filled/50/link--v1.png" alt="link--v1"/>
                <legend>GitHub</legend>
            </a>
        
        </div>
    </div>
</template>
<script>
import axios from 'axios';

    export default{
        name: "UserContent",
        props:{
            userContent: {type:Object}
        },
        data(){
            return{
                
            }
        },
        methods:{
            onCLickPut(username){
                axios.put(`http://localhost:3001/users/${username}/toggle-star`)
                .then(()=>{
                    setTimeout(reload, 500);
                    function reload(){
                        location.reload();
                    }
                }).catch(()=>{
                    
                })
               
            },
            onClickDelete(username){
                axios.delete(`http://localhost:3001/users/${username}`)
                .then(()=>{
                    setTimeout(reload, 500);
                    function reload(){
                        location.reload();
                    }
                }).catch(()=>{
                    
                })
                
            }
        }
    }
</script>
<style>

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
  cursor: pointer;
}
.user-star:hover, .user-remove:hover, .user-link:hover{
  border-color: aqua;
}
.user-star img, .user-remove img, .user-link img{
  width: 32px;
}
</style>