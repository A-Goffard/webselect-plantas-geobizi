<template>
    <div class="tit-totalplants">
      <div class="text">
        <h3>Total de plantas de jardín</h3>
      </div>
      <div class="stat">
        <p>{{ total }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const total = ref(0);
  
  onMounted(() => {
    const resultados = JSON.parse(localStorage.getItem('resultados'));
    if (resultados) {
      total.value = resultados.totalsByEnvironment.jardines;
    }
  });
  </script>
  
  <style scoped>
  .stat {
    margin-bottom: 1rem;
    border: 1px solid #89eb48;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  .text {
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }
  .tit-totalplants {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 25rem;
  }
  
  p {
    margin: 0;
  }


  </style>
  