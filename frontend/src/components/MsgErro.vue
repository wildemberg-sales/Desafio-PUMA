<template>
    <div class="msg-erro">
        <img width="48" height="48" margin-right="10px" src="https://img.icons8.com/color/48/high-priority.png" alt="high-priority"/>{{ msg }}
    </div>
</template>
<script>
    export default{
        name: "MsgErro",
        props:{
            msg:String,
        }
    }
</script>
<style>
.msg-erro{
    text-align: center;
    color: #fff;
    background-color: rgba(255, 0, 0, 0.658);
    margin: 20px auto;
    padding: 20px 0;
    max-width: 800px;
    border: 1px solid red;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>