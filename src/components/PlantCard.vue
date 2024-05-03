<template>
    <div class="plant-card">
      <h2>{{ plant.title }}</h2>
      <p>{{ plant.description }}</p>
    </div>
</template>
  
<script setup>

</script>

<style scoped>
.plant-card{
  margin: 1rem;
  border-radius: 0.5rem;
  border: solid 0.15rem rgb(27, 73, 8);
  padding: 1rem;
  background-color: var(--blanco);
  box-shadow: 0rem 0rem 1rem 0.1rem #26B12C;
  transition: 250ms ease;
}
.plant-card:hover{
  box-shadow: 0rem 0rem 1rem 0.3rem #2ad232;
  border: solid 0.15rem rgb(44, 119, 15);
}
h2 {
  color: rgb(44, 119, 15);
  margin: 0.5rem;
  background-color: var(--blanco);
}
p {
  background-color: var(--blanco);
}
img {
  background-color: var(--blanco);
  max-width: 95%;
  max-height: 100%;
  margin: 0.5rem;
  border-radius: 0.5rem;
  border: solid 1px rgb(157, 247, 122);
}
</style>
  