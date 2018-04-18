<template>
    <div>
      <h1>CREAR RESTAURANTE</h1>
      <form @submit="addRestaurante">
          <div>
            <label>Nombre</label>
            <input type="text" v-model="restaurante.title">
            <input type="submit" value="Agregar Restaurante">
          </div>
      </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "restauranteAdd",
      data(){
          return{
            restaurante: {
              title: null
            }
          }
      },
      methods: {
          addRestaurante() {
            event.preventDefault(); // Don't reload the page
            console.log(this.restaurante.title);
            console.log('Creando restaurante');

            let params = JSON.stringify(this.restaurante);
            this.postRestaurante(params);
            this.restaurante.title = '';
          },
        postRestaurante(restaurante){
          axios.post('https://jsonplaceholder.typicode.com/posts/', {restaurante})
            .then((respuesta) => { console.log(respuesta)})
            .catch((error) => {
              console.log(error)
            })
        }
      }

    }
</script>

<style scoped>

</style>
