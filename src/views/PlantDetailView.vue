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
              <div class="imagen">
                <img :src="plant.image" alt="plants Image" class="plants-image">
              </div>
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
    description: 'El diente de león es una planta herbácea perenne muy común en prados, campos y jardines. Sus hojas tienen forma de dientes y son comestibles.',
    image: '/imagenes/plantas/diente_de_leon.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'prados',
    soil: 'calizo',
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
    image: '/imagenes/plantas/margarita.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'prados',
    soil: 'calizo',
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
    description: 'El lino es una planta cultivada por sus semillas y su fibra. Se utiliza en la industria textil y alimentaria, siendo una fuente de ácidos grasos omega-3.',
    image: '/imagenes/plantas/lino.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'interior',
    soil: 'arcilloso',
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
    description: 'La malva es una planta herbácea con flores de color rosa o morado. Se utiliza en medicina tradicional para tratar problemas respiratorios y digestivos.',
    image: '/imagenes/plantas/malva.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'prados',
    soil: 'arcilloso',
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
    description: 'La achicoria es una planta de hojas amargas que se utiliza en ensaladas y como sustituto del café. También se cultiva por su raíz, rica en inulina.',
    image: '/imagenes/plantas/achicoria.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'prados',
    soil: 'calizo',
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
    description: 'La zarzaparrilla es una planta trepadora con propiedades medicinales. Se utiliza en infusiones y suplementos para mejorar la salud del sistema urinario.',
    image: '/imagenes/plantas/zarzaparrilla.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'jardines',
    soil: 'húmedo',
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
    description: 'La madreselva es una planta trepadora con flores aromáticas. Se utiliza en jardinería y perfumería por su agradable fragancia.',
    image: '/imagenes/plantas/madreselva.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'jardines',
    soil: 'húmedo',
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
    image: '/imagenes/plantas/tamarix.png',
    invasive: true,
    native: false,
    exotic: true,
    caracteristic: 'interior',
    soil: 'arenoso',
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
    image: '/imagenes/plantas/pino_de_monterrey.png',
    invasive: true,
    native: false,
    exotic: false,
    caracteristic: 'interior',
    soil: 'arenoso',
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
    description: 'El plumero pampeano es una planta invasora originaria de Sudáfrica. Se propaga rápidamente y puede desplazar a la vegetación autóctona en áreas naturales.',
    image: '/imagenes/plantas/plumero_pampeano.png',
    invasive: true,
    native: false,
    exotic: true,
    caracteristic: 'interior',
    soil: 'arenoso',
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
    image: '/imagenes/plantas/una_de_gato.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'jardines',
    soil: 'húmedo',
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
    description: 'La valeriana roja es una planta medicinal utilizada para tratar la ansiedad y el insomnio. Sus raíces tienen propiedades sedantes y relajantes.',
    image: '/imagenes/plantas/valeriana_roja.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'jardines',
    soil: 'húmedo',
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
    description: 'La vinca pervinca es una planta ornamental de hojas perennes y flores violetas o blancas. Se utiliza en jardinería como cobertura de suelo en zonas sombrías.',
    image: '/imagenes/plantas/vinca_pervinca.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'jardines',
    soil: 'húmedo',
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
    description: 'La cerraja es una planta silvestre comestible rica en nutrientes. Sus hojas se utilizan en ensaladas y sus raíces en la medicina tradicional.',
    image: '/imagenes/plantas/cerraja.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'prados',
    soil: 'arcilloso',
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
    description: 'El rábano silvestre es una planta comestible de la familia de las brasicáceas. Sus hojas y raíces tienen un sabor picante y se utilizan en la cocina.',
    image: '/imagenes/plantas/rabano_silvestre.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'prados',
    soil: 'calizo',
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
    image: '/imagenes/plantas/argoma.png',
    invasive: true,
    native: false,
    exotic: true,
    caracteristic: 'interior',
    soil: 'arenoso',
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
    image: '/imagenes/plantas/brezo.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'montaña',
    soil: 'ácido',
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
    description: 'El trébol morado es una planta herbácea con flores de color púrpura característica. Suele encontrarse en prados y campos abiertos, y es conocido por su capacidad para fijar nitrógeno en el suelo.',
    image: '/imagenes/plantas/trebol_morado.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'prados',
    soil: 'arcilloso',
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
    id: 19,
    title: 'Pulmonaria',
    description: 'La pulmonaria es una planta herbácea perenne con hojas manchadas que recuerdan a los pulmones. Suele encontrarse en bosques húmedos y frescos.',
    image: '/imagenes/plantas/pulmonaria.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'montaña',
    soil: 'húmedo',
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 20,
    title: 'Roble',
    description: 'El roble es un árbol caducifolio de gran tamaño y longevidad. Forma parte de los bosques caducifolios del País Vasco y es una especie importante para la biodiversidad.',
    image: '/imagenes/plantas/roble.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'montaña',
    soil: 'ácido',
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 21,
    title: 'Haya',
    description: 'La haya es un árbol de hoja caduca muy común en los bosques del País Vasco. Su madera es muy apreciada y sus hojas adquieren tonalidades rojizas en otoño.',
    image: '/imagenes/plantas/haya.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'montaña',
    soil: 'ácido',
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 22,
    title: 'Eucalipto',
    description: 'El eucalipto es un árbol originario de Australia introducido en muchas partes del mundo. Se cultiva por su rápido crecimiento y su madera, pero puede desplazar a la vegetación autóctona.',
    image: '/imagenes/plantas/eucalipto.png',
    invasive: true,
    native: false,
    exotic: true,
    caracteristic: 'interior',
    soil: 'arenoso',
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 23,
    title: 'Helecho',
    description: 'Los helechos son plantas sin flores que se reproducen por esporas. Son muy comunes en zonas húmedas y sombrías, formando parte de la vegetación de los bosques del País Vasco.',
    image: '/imagenes/plantas/helecho.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'montaña',
    soil: 'húmedo',
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 24,
    title: 'Encina',
    description: 'La encina es un árbol emblemático del Mediterráneo. Forma bosques característicos en las regiones más cálidas del País Vasco, proporcionando alimento y refugio a una amplia variedad de especies.',
    image: '/imagenes/plantas/encina.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'interior',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 25,
    title: 'Ortiga',
    description: 'La ortiga es una planta herbácea con hojas urticantes. Crece en zonas húmedas y sombrías, y se utiliza en medicina tradicional y como alimento en algunas culturas.',
    image: '/imagenes/plantas/ortiga.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'jardines',
    soil: 'húmedo',
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 26,
    title: 'Hinojo Silvestre',
    description: 'El hinojo silvestre es una planta aromática con hojas plumosas y flores amarillas. Crece en bordes de caminos y terrenos baldíos, y se utiliza en la cocina y la medicina.',
    image: '/imagenes/plantas/hinojo_silvestre.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'prados',
    soil: 'calizo',
    environment: {
      prados: true,
      campos: false,
      jardines: true,
      costa: false,
      interior: true,
      montaña: true
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
  display: flex;
  flex-direction: column;

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
.imagen {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
}

img {
  margin: 1rem;
  max-width: 25rem;
}
@media only screen and (max-width: 768px) {
img {
  max-width: 15rem;
}
}
</style>