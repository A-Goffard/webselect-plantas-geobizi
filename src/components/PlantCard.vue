<template>
  <div class="plant-card" @click="toggleSelection">
    <input type="checkbox" v-model="selected" class="plant-checkbox" />
    <img :src="plant.image" :alt="plant.title" class="plant-image" />
  </div>
</template>

<script>
export default {
  props: {
    plant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  },
  methods: {
    toggleSelection() {
      this.selected = !this.selected;
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      let selectedPlants = JSON.parse(localStorage.getItem('SelectedPlants')) || [];
      if (this.selected) {
        selectedPlants.push(this.plant);
      } else {
        selectedPlants = selectedPlants.filter(p => p.id !== this.plant.id);
      }
      localStorage.setItem('SelectedPlants', JSON.stringify(selectedPlants));
    }
  }
};
</script>

<style scoped>
.plant-card {
  display: flex;
  position: relative;
  width: 9.1rem;
  margin: 0.3rem;
  border-radius: 0.5rem;
  border: solid 0.15rem rgb(27, 73, 8);
  background-color: white;
  box-shadow: 0rem 0rem 1rem 0.1rem #26B12C;
  transition: 250ms ease;
  overflow: hidden; /* Asegura que la imagen no se desborde del div */
}
.plant-card:hover {
  box-shadow: 0rem 0rem 1rem 0.3rem #2ad232;
  border: solid 0.15rem rgb(44, 119, 15);
}
h2 {
  color: rgb(44, 119, 15);
  margin: 0.5rem;
  background-color: white;
}
p {
  background-color: white;
}
.plant-image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem; /* Asegura que la imagen tenga bordes redondeados */
}
.plant-checkbox {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  transform: scale(2); /* Aumenta el tamaño del checkbox */
}
</style>
