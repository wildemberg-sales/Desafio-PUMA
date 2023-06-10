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

</style>