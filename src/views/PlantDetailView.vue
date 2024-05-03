<template>
    <div class="contenedor-principal">
  
      <div class="contenedor-cabecero">
  
        <div class="contenedor-intro">
          <h1>Geobizi</h1>
          <h2>A la caza de las plantsas</h2>
          <h3>Selecciona las plantsas que ves en tu camino</h3>
        </div>
  
      </div>
  
        <div class="contenedor-medio">
          <h2>¿Cuáles de estas plantsas identificas?</h2>
          <h3>Seleccionalas y al final de la ruta envía el resultado para conseguir alguna pista</h3>
          
          <button @click="volver">Volver</button>
  
          <div class="contenedor-plantsas-detalle">

            <div class="cont-resumen">
              <h1>{{ plant.title }}</h1>
              <p>{{ plant.description }}</p>
              <img :src="plant.image" alt="plants Image" class="plants-image">
              <h3>Localización</h3>
              <p>{{ plant.location }}</p>
              <h3>Apariencia</h3>
              <p>{{ plant.appearance }}</p>
            
            
            
            </div>
          </div>

        </div>

    </div>
  
  </template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const plants = ref([
  {
    id: 1,
    title: 'Diente de León',
    description: 'El diente de león es una plantsa herbácea perenne muy común en prados, campos y jardines. Sus hojas tienen forma de dientes y son comestibles.',
    location: 'El diente de león es originario de Europa y Asia, pero ahora se encuentra distribuido por todo el mundo.',
    appearance: 'Es una planta con hojas lobuladas que forman una roseta basal. Produce flores amarillas que se transforman en pequeñas cabezas de semillas blancas y plumosas.',
    image: '/imagenes/plantas/diente_de_leon.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 2,
    title: 'Margarita',
    description: 'La margarita es una flor silvestre con pétalos blancos y amarillos. Suele crecer en prados y campos abiertos, siendo muy común en primavera.',
    location: 'La margarita se encuentra de forma natural en Europa, Asia y América del Norte.',
    appearance: 'Es una planta herbácea con flores blancas y amarillas en forma de disco rodeadas por pétalos blancos.',
    image: '/imagenes/plantas/margarita.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: true,
      campos: true,
      jardines: false,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 3,
    title: 'Lino',
    description: 'El lino es una plantsa cultivada por sus semillas y su fibra. Se utiliza en la industria textil y alimentaria, siendo una fuente de ácidos grasos omega-3.',
    location: 'El lino es originario de la región del Mediterráneo, pero ahora se cultiva en diversas partes del mundo.',
    appearance: 'Es una planta con tallos delgados y hojas estrechas. Produce flores azules o blancas y cápsulas de semillas.',
    image: '/imagenes/plantas/lino.png',
    invasive: false,
    native: false,
    exotic: false,
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 4,
    title: 'Malva',
    description: 'La malva es una plantsa herbácea con flores de color rosa o morado. Se utiliza en medicina tradicional para tratar problemas respiratorios y digestivos.',
    location: 'La malva es originaria de Europa, Asia y África, pero ahora se encuentra en muchas regiones del mundo.',
    appearance: 'Es una planta con hojas lobuladas y flores grandes y vistosas que pueden ser de color rosa, morado o blanco.',
    image: '/imagenes/plantas/malva.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: true,
      campos: false,
      jardines: true,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 5,
    title: 'Achicoria',
    description: 'La achicoria es una plantsa de hojas amargas que se utiliza en ensaladas y como sustituto del café. También se cultiva por su raíz, rica en inulina.',
    location: 'La achicoria es originaria de Europa y Asia, pero se ha naturalizado en muchas partes del mundo.',
    appearance: 'Es una planta con hojas alargadas y dentadas que forman una roseta basal. Produce flores azules o blancas en tallos altos.',
    image: '/imagenes/plantas/achicoria.png',
    invasive: false,
    native: false,
    exotic: false,
    environment: {
      prados: true,
      campos: false,
      jardines: true,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 6,
    title: 'Zarzaparrilla',
    description: 'La zarzaparrilla es una plantsa trepadora con propiedades medicinales. Se utiliza en infusiones y suplementos para mejorar la salud del sistema urinario.',
    location: 'La zarzaparrilla es originaria de América y se encuentra principalmente en zonas tropicales y subtropicales.',
    appearance: 'Es una planta trepadora con tallos largos y delgados. Produce pequeñas flores blancas o verdosas y bayas rojas o negras.',
    image: '/imagenes/plantas/zarzaparrilla.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 7,
    title: 'Madreselva',
    description: 'La madreselva es una plantsa trepadora con flores aromáticas. Se utiliza en jardinería y perfumería por su agradable fragancia.',
    location: 'La madreselva es originaria de Europa, Asia y América del Norte, pero ahora se cultiva en muchas regiones del mundo.',
    appearance: 'Es una planta trepadora con hojas opuestas y flores tubulares que pueden ser blancas, amarillas, rosas o rojas.',
    image: '/imagenes/plantas/madreselva.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 8,
    title: 'Tamarix',
    description: 'El tamarix es un arbusto o árbol pequeño resistente a la sequía. Es invasivo en algunas regiones y puede desplazar a la vegetación autóctona.',
    location: 'El tamarix es originario de Eurasia y África, pero se ha introducido en muchas partes del mundo como planta ornamental y para control de la erosión.',
    appearance: 'Es un arbusto o árbol pequeño con ramas delgadas y plumosas. Produce pequeñas flores rosadas o blancas en racimos.',
    image: '/imagenes/plantas/tamarix.png',
    invasive: true,
    native: false,
    exotic: true,
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: false,
      interior: true,
      montaña: false
    }
  },
  {
    id: 9,
    title: 'Pino de Monterrey',
    description: 'El pino de Monterrey es una especie de pino originaria de América del Norte. Se cultiva como árbol ornamental y para la producción de madera.',
    location: 'El pino de Monterrey se encuentra de forma natural en el suroeste de Estados Unidos y el noreste de México.',
    appearance: 'Es un árbol con forma cónica y ramas horizontales. Tiene agujas largas y flexibles agrupadas en fascículos.',
    image: '/imagenes/plantas/pino_de_monterrey.png',
    invasive: true,
    native: false,
    exotic: false,
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: false,
      interior: true,
      montaña: false
    }
  },
  {
    id: 10,
    title: 'Plumero Pampeano',
    description: 'El plumero pampeano es una plantsa invasora originaria de Sudáfrica. Se propaga rápidamente y puede desplazar a la vegetación autóctona en áreas naturales.',
    location: 'El plumero pampeano es originario de Sudáfrica, pero se ha introducido en muchas partes del mundo como planta ornamental y se ha convertido en una especie invasora.',
    appearance: 'Es una planta herbácea con hojas estrechas y plumosas. Produce inflorescencias densas y plumosas de color blanco, rosa o morado.',
    image: '/imagenes/plantas/plumero_pampeano.png',
    invasive: true,
    native: false,
    exotic: true,
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: false,
      interior: true,
      montaña: false
    }
  },
  {
    id: 11,
    title: 'Uña de Gato',
    description: 'La uña de gato es una enredadera originaria de América del Sur. Se utiliza en medicina tradicional por sus propiedades antiinflamatorias y antioxidantes.',
    location: 'La uña de gato es originaria de la selva amazónica y otras regiones de América del Sur.',
    appearance: 'Es una enredadera leñosa con ganchos afilados que se enganchan a las superficies. Produce pequeñas flores tubulares y bayas rojas o negras.',
    image: '/imagenes/plantas/una_de_gato.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 12,
    title: 'Valeriana Roja',
    description: 'La valeriana roja es una plantsa medicinal utilizada para tratar la ansiedad y el insomnio. Sus raíces tienen propiedades sedantes y relajantes.',
    location: 'La valeriana roja es originaria de Europa y Asia, pero ahora se cultiva en muchas partes del mundo.',
    appearance: 'Es una planta con tallos altos y delgados. Produce flores pequeñas de color rosa, blanco o púrpura en inflorescencias.',
    image: '/imagenes/plantas/valeriana_roja.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 13,
    title: 'Vinca Pervinca',
    description: 'La vinca pervinca es una plantsa ornamental de hojas perennes y flores violetas o blancas. Se utiliza en jardinería como cobertura de suelo en zonas sombrías.',
    location: 'La vinca pervinca es originaria de Europa y se encuentra principalmente en bosques y áreas sombreadas.',
    appearance: 'Es una planta rastrera con hojas brillantes y flores en forma de embudo que pueden ser violetas, blancas o rosas.',
    image: '/imagenes/plantas/vinca_pervinca.png',
    invasive: false,
    native: false,
    exotic: false,
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 14,
    title: 'Cerraja',
    description: 'La cerraja es una plantsa silvestre comestible rica en nutrientes. Sus hojas se utilizan en ensaladas y sus raíces en la medicina tradicional.',
    location: 'La cerraja es originaria de Europa y Asia, pero ahora se encuentra distribuida por todo el mundo.',
    appearance: 'Es una planta con hojas grandes y dentadas que forman una roseta basal. Produce pequeñas cabezas de flores amarillas.',
    image: '/imagenes/plantas/cerraja.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: true,
      campos: false,
      jardines: true,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 15,
    title: 'Rábano Silvestre',
    description: 'El rábano silvestre es una plantsa comestible de la familia de las brasicáceas. Sus hojas y raíces tienen un sabor picante y se utilizan en la cocina.',
    location: 'El rábano silvestre se encuentra de forma natural en Europa, Asia y África, en zonas con suelos húmedos y ricos en nutrientes.',
    appearance: 'Es una planta con hojas verdes y dentadas que forman una roseta basal. Produce flores blancas o amarillas en tallos altos.',
    image: '/imagenes/plantas/rabano_silvestre.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: true,
      campos: true,
      jardines: false,
      costa: false,
      interior: false,
      montaña: false
    }
  },
  {
    id: 16,
    title: 'Argoma',
    description: 'La argoma es un arbusto espinoso originario del norte de África. Se utiliza en jardinería y paisajismo por su resistencia a la sequía y su aspecto decorativo.',
    location: 'La argoma es originaria del norte de África, pero ahora se cultiva en muchas partes del mundo como planta ornamental.',
    appearance: 'Es un arbusto espinoso con ramas densas y erectas. Produce pequeñas flores amarillas o blancas en racimos.',
    image: '/imagenes/plantas/argoma.png',
    invasive: true,
    native: false,
    exotic: true,
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: false,
      interior: true,
      montaña: false
    }
  },
  {
    id: 17,
    title: 'Brezo',
    description: 'El brezo es un arbusto de la familia Ericaceae muy común en zonas de montaña y páramos. Sus flores son rosadas o blancas y atraen a abejas y mariposas.',
    location: 'El brezo se encuentra de forma natural en Europa, Asia y América del Norte, principalmente en zonas montañosas y páramos.',
    appearance: 'Es un arbusto bajo con ramas delgadas y flexibles. Produce flores en forma de campana que pueden ser rosadas, blancas o rojas.',
    image: '/imagenes/plantas/brezo.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: false,
      interior: false,
      montaña: true
    }
  },
  {
    id: 18,
    title: 'Trébol Morado',
    description: 'El trébol morado es una plantsa herbácea con flores de color púrpura característica. Suele encontrarse en prados y campos abiertos, y es conocido por su capacidad para fijar nitrógeno en el suelo.',
    location: 'El trébol morado es originario de Europa y Asia, pero se ha introducido en muchas partes del mundo como planta forrajera y ornamental.',
    appearance: 'Es una planta con tallos rastreros y hojas trifoliadas. Produce inflorescencias globosas de color púrpura intenso.',
    image: '/imagenes/plantas/trebol_morado.png',
    invasive: false,
    native: true,
    exotic: false,
    environment: {
      prados: true,
      campos: true,
      jardines: false,
      costa: false,
      interior: false,
      montaña: false
    }
  }
]);




const volver = () => {
    const route = router.currentRoute.value;
    
    const plantId = route.params.id;
    console.log(plantId);
    
    router.push({ name: 'inicio' });
  };

    // Buscamos el proyecto correspondiente en la lista de proyectos
    const plant = computed(() => {
    const plantId = router.currentRoute.value.params.id;
    return plants.value.find(proj => proj.id === parseInt(plantId));
  });
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
.contenedor-plantsas-detalle{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
.cont-resumen{
  width: 100%;
  margin: 1rem;
  border-radius: 0.5rem;
  border: solid 0.15rem rgb(27, 73, 8);
  padding: 1rem;
  background-color: white;
  box-shadow: 0rem 0rem 1rem 0.1rem #26B12C;
  transition: 250ms ease;
}
.cont-resumen:hover{
  box-shadow: 0rem 0rem 1rem 0.3rem #2ad232;
  border: solid 0.15rem rgb(44, 119, 15);
}
img {
  width: 100%;
}
</style>