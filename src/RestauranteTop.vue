<template>
  <div>{{ texto }} : {{ id_restaurante }}</div>
</template>

<script>
    export default {
        name: "restauranteTop",
        mounted(){
          this.id_restaurante = this.$route.params.id;
        },
        data(){
          return{
            texto: "Esta es la pagina de restaurante-top",
            id_restaurante: null

          }
        }
    }
</script>

<style scoped>

</style>
