<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <input v-model = "todo" v-on:keyup.enter = "enter"/>
    <ol>
        <li v-for="(item,index) in items" v-on:click="delete_todo(item)" v-bind:class={delete:item.delete}>
            {{index}}----{{item.name}}
             <button v-on:click.stop="drop_todo(index)">delete</button>
        </li>
    </ol>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import store from "./store"

export default {
  data () {
    return {
      todo:"",
      msg: 'Todo List',
      items:store.get("items")||[]
    }
  },
  methods:{
    enter:function(){
        if(this.todo==""){
            alert("请输入!");
            return;
        }
        this.items.push({
            name:this.todo,
            delete:false
        })
        this.todo="";
    },
    delete_todo:function(item){
       item.delete = !item.delete
    },
    drop_todo:function(index){
        var confirm = window.confirm("确定删除吗？")
        if(confirm){
            this.items.splice(index,1)
        }
    }
  },
  watch:{
    "items":{
        handler:function(val,oldVal){
            store.save(this.items)
        },
        deep:true
    }
  }
}
</script>

<style>
*{
padding:0;
margin:0;
}
#app {
   width:200px;
   margin:0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ol{
margin-left:20px}
ol li {
    color:blue;
    line-height:30px
}
ol li button{
display:none}
ol li:hover button{
display:inline-block}
.delete{
color:red;
text-decoration: line-through;}
</style>
