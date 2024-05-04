<template>

<div class="contenedor-principal">

<div class="contenedor-cabecero">


  <div class="contenedor-intro">
    <h1>Geobizi</h1>
    <h2>A la caza de las plantas</h2>
    <h3>Vamos a ver que información hemos conseguido</h3>
  </div>

</div>


  <div class="contenedor-medio">
    <div>
      <h2 class="osc">¿Qué nos dicen estas plantas?</h2>
    </div>
    <button @click="volver">Volver</button>
  </div>

    <div class="stats">
      <h2>Estadísticas de la actividad</h2>
      <TotalPlantsStat />
      <TotalInvasiveStat />
      <TotalNativeStat />
      <TotalCamposStat />
      <TotalPradosStat />
      <TotalCostaStat />
      <TotalInteriorStat />
      <TotalMontanaStat />
      <TotalJardinesStat />



      
      <!-- Otros componentes de estadísticas aquí -->
    </div>
</div>
</template>

<script setup>
import TotalPlantsStat from '../components/stats/TotalPlantsStat.vue';
import TotalInvasiveStat from '../components/stats/TotalInvasiveStat.vue';
import  TotalNativeStat from '../components/stats/TotalNativeStat.vue';
import  TotalCamposStat from '../components/stats/TotalCamposStat.vue';
import  TotalPradosStat from '../components/stats/TotalPradosStat.vue';
import  TotalCostaStat from '../components/stats/TotalCostaStat.vue';
import  TotalInteriorStat from '../components/stats/TotalInteriorStat.vue';
import  TotalMontanaStat from '../components/stats/TotalMontanaStat.vue';
import  TotalJardinesStat from '../components/stats/TotalJardinesStat.vue';


import { useRouter } from 'vue-router';

const router = useRouter();

const volver = () => {
    const route = router.currentRoute.value;
    
    const plantId = route.params.id;
    console.log(plantId);
    
    router.push({ name: 'inicio' });
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
.osc {
    color: #498536;
}
</style>