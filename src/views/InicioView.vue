<template>
  <div class="contenedor-principal">

    <div class="contenedor-cabecero">


      <div class="contenedor-intro">
        <h1>Geobizi</h1>
        <h2>A la caza de las plantas</h2>
        <h3>Vamos a conocer nuestro entorno gracias a las plantas</h3>
      </div>

    </div>


    <div class="contenedor-medio">
      <div>
        <h2>¿Prefieres un reto o solo estudiar tu entorno?</h2>
        <h3>Elige tu modalidad</h3>

        <div class="plants-button">

        <p>Elige esta modalidad que quieres ver todas las plantas que tenemos y estudiar tu entorno libremente</p>
        <button @click="estudio">Estudio</button>
        <p>Elige esta modalidad si te apetece un reto</p>
        <p>¿Serás capaz de encontrar las 10 plantas que te proponemos?</p>
        <button @click="reto">¡Reto!</button>
          
        </div>



      </div>

      </div>

  </div>

</template>

<script setup>

import { useRouter } from 'vue-router';


const router = useRouter();

const estudio = () => {
  router.push('/plantas');
};

const reto = () => {
  router.push('/reto');
};


</script>



<style scoped>
h1 {
  color: #498536;
}
.contenedor-principal {
  padding-top: 7rem;
  background-color: rgb(255, 255, 255);
  padding-bottom: 2rem;
}
.contenedor-cabecero {
  padding: 5rem;
  background-image: url('/public/imagenes/background/10.png');
  background-size: cover; 
  background-position: center; 
  background-color: rgb(44, 119, 15); 
}
.contenedor-intro {
  max-width: 40rem;
  padding: 2rem;
  background-color: white;
}
.contenedor-medio {
  padding: 2rem;

}
.contenedor-plantas-imagenes{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.plants-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
    padding: 0.7rem 1.2rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    background-color: #498536;
    border: solid 0.15rem rgb(27, 73, 8);
    color: white;
    font-size: large;
    transition: 250ms ease;
}
button:hover {
    background-color: rgb(27, 73, 8); 
    color:  #26B12C; 
    cursor: pointer;
}
</style>