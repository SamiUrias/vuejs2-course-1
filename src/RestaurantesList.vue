<template>
    <div>
      <ul id="restaurantes-list" v-if="restaurantes != null">
        <li v-for="(restaurante, index) in restaurantes">
          {{ restaurante.title }}
          <img class="food-image" src="https://dummyimage.com/300.png/09f/fff" alt="">
          <router-link :to="{name:'restaurante', params:{id:index}}"> Ver </router-link>
          <router-link :to="{name:'editar-restaurante', params:{id:index}}"> Editar </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "restaurantesList",
        mounted(){
          this.getRestaurantes();
        },
        data(){
          return{
            texto: 'Este es el texto de Restaurantes Lists',
            restaurantes: null
          }
        },
      methods: {
          getRestaurantes(){
            axios.get('https://jsonplaceholder.typicode.com/posts/')
              .then((restpuesta) => {
                console.log(restpuesta);
                 this.restaurantes = restpuesta.data;
                 console.log(this.restaurantes);
            })
          }
      }

    }
</script>

<style lang="scss">
  #restaurantes-list{
    padding: 10px;
    li{
     margin-top: 15px;
      width: 30%;
      height: 300px;
      border: 1px solid #ddd;
      background: #eee;
      padding: 20px;
      overflow: hidden;
      max-width: 300px;
      min-width: 300px;
    }
  }

  .food-image{
    width: 100%;
    height: 250px;
  }
</style>
