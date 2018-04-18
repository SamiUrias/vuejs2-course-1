<template>
  <div>
    <h1>Detalle del restaurante</h1>
    <div v-if="this.title != null">
      <p>{{ title }}</p>
    </div>
    <span v-else> Cargando Restaurante ... </span>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
      name: "restaurante",
      mounted(){
        this.id = this.$route.params.id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
          .then((respuesta) => {
            this.title =  respuesta.data.title;
          })
      },
      data(){
        return {
          id: null,
          title: null
        }
      }

  }
</script>

<style scoped>

</style>
