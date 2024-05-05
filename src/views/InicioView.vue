<template>
  <div class="contenedor-principal">

    <div class="contenedor-cabecero">


      <div class="contenedor-intro">
        <h1>Geobizi</h1>
        <h2>A la caza de las plantas</h2>
        <h3>Selecciona las plantas que ves en tu camino</h3>
      </div>

    </div>


    <div class="contenedor-medio">
      <div>
        <h2>¿Cuáles de estas plantas identificas?</h2>
        <h3>Seleccionalas y al final de la ruta envía el resultado para descubrir algunos datos</h3>

        <div class="plants-button">

          <div class="contenedor-plantas-imagenes">
            <div v-for="plant in plants" :key="plant.id">
              <router-link :to="'/plantas/' + plant.id">
                <PlantCard class="fitxa" :plant="plant"/>
              </router-link>
            </div>
          </div>

        <button @click="enviar">Resultados</button>
          
        </div>



      </div>

      </div>

  </div>

</template>

<script setup>
import PlantCard from '../components/PlantCard.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const plants = ref([
  {
    id: 1,
    title: 'Diente de León',
    description: 'El diente de león es una planta herbácea perenne de la familia de las asteráceas. Tiene flores amarillas y se utiliza en la medicina tradicional.',
    descriptionEnvironment: 'Tiene flores amarillas y se utiliza en la medicina tradicional.',
    image: '/imagenes/plantas/diente-de-león.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'medicinal',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 2,
    title: 'Margarita',
    description: 'La margarita es una planta herbácea perenne de la familia de las asteráceas. Tiene flores blancas y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene flores blancas y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/margarita.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 3,
    title: 'Lino',
    description: 'El lino es una planta herbácea anual de la familia de las lináceas. Se cultiva por sus fibras, que se utilizan en la industria textil.',
    descriptionEnvironment: 'Se cultiva por sus fibras, que se utilizan en la industria textil.',
    image: '/imagenes/plantas/lino.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'textil',
    soil: 'arcilloso',
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
    id: 4,
    title: 'Malva',
    description: 'La malva es una planta herbácea perenne de la familia de las malváceas. Tiene flores rosadas y se utiliza en jardinería y medicina tradicional.',
    descriptionEnvironment: 'Tiene flores rosadas y se utiliza en jardinería y medicina tradicional.',
    image: '/imagenes/plantas/malva.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 5,
    title: 'Achicoria',
    description: 'La achicoria es una planta herbácea bienal de la familia de las asteráceas. Se cultiva por sus hojas, que se utilizan en alimentación humana.',
    descriptionEnvironment: 'Se cultiva por sus hojas, que se utilizan en alimentación humana.',
    image: '/imagenes/plantas/achicoria.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'alimentación',
    soil: 'arcilloso',
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
    id: 6,
    title: 'Zarzaparrilla',
    description: 'La zarzaparrilla es una planta trepadora de la familia de las smiláceas. Tiene propiedades medicinales y se utiliza en la medicina tradicional.',
    descriptionEnvironment: 'Tiene propiedades medicinales y se utiliza en la medicina tradicional.',
    image: '/imagenes/plantas/zarzaparrilla.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'medicinal',
    soil: 'arcilloso',
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
    id: 7,
    title: 'Madreselva',
    description: 'La madreselva es una planta trepadora de la familia de las caprifoliáceas. Tiene flores fragantes y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene flores fragantes y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/madreselva.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 8,
    title: 'Tamarix',
    description: 'El tamarix es un arbusto o árbol de la familia de las tamaricáceas. Tiene flores rosadas y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene flores rosadas y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/tamarix.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 9,
    title: 'Pino de Monterrey',
    description: 'El pino de Monterrey es un árbol de la familia de las pináceas. Tiene hojas perennes en forma de aguja y se utiliza en jardinería y forestación.',
    descriptionEnvironment: 'Tiene hojas perennes en forma de aguja y se utiliza en jardinería y forestación.',
    image: '/imagenes/plantas/pino-de-monterrey.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 10,
    title: 'Plumero Pampeano',
    description: 'El plumero pampeano es una planta herbácea perenne de la familia de las asteráceas. Tiene flores rosadas y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene flores rosadas y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/plumero-pampeano.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
    {
    id: 11,
    title: 'Uña de Gato',
    description: 'La uña de gato es una planta trepadora de la familia de las rubiáceas. Tiene propiedades medicinales y se utiliza en la medicina tradicional.',
    descriptionEnvironment: 'Tiene propiedades medicinales y se utiliza en la medicina tradicional.',
    image: '/imagenes/plantas/uña-de-gato.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'medicinal',
    soil: 'arcilloso',
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
    id: 12,
    title: 'Valeriana Roja',
    description: 'La valeriana roja es una planta herbácea perenne de la familia de las valerianáceas. Tiene propiedades medicinales y se utiliza en la medicina tradicional.',
    descriptionEnvironment: 'Tiene propiedades medicinales y se utiliza en la medicina tradicional.',
    image: '/imagenes/plantas/valeriana-roja.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'medicinal',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 13,
    title: 'Vinca Pervinca',
    description: 'La vinca pervinca es una planta herbácea perenne de la familia de las apocináceas. Tiene flores azules o violetas y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene flores azules o violetas y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/vinca-pervinca.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 14,
    title: 'Cerraja',
    description: 'La cerraja es una planta herbácea anual de la familia de las asteráceas. Se cultiva por sus hojas, que se utilizan en alimentación humana.',
    descriptionEnvironment: 'Se cultiva por sus hojas, que se utilizan en alimentación humana.',
    image: '/imagenes/plantas/cerraja.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'alimentación',
    soil: 'arcilloso',
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
    id: 15,
    title: 'Rábano Silvestre',
    description: 'El rábano silvestre es una planta herbácea anual de la familia de las brassicáceas. Se cultiva por su raíz, que se utiliza en alimentación humana.',
    descriptionEnvironment: 'Se cultiva por su raíz, que se utiliza en alimentación humana.',
    image: '/imagenes/plantas/rábano-silvestre.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'alimentación',
    soil: 'arcilloso',
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
    id: 16,
    title: 'Argoma',
    description: 'La argoma es una planta arbustiva de la familia de las fabáceas. Se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/argoma.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 17,
    title: 'Brezo',
    description: 'El brezo es un arbusto de la familia de las ericáceas. Tiene flores rosadas y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene flores rosadas y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/brezo.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 18,
    title: 'Trébol Morado',
    description: 'El trébol morado es una planta herbácea perenne de la familia de las fabáceas. Se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/trébol-morado.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 19,
    title: 'Pulmonaria',
    description: 'La pulmonaria es una planta herbácea perenne de la familia de las boragináceas. Tiene flores rosadas o azules y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene flores rosadas o azules y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/pulmonaria.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 20,
    title: 'Roble',
    description: 'El roble es un árbol caducifolio de la familia de las fagáceas. Se utiliza en carpintería y ebanistería por su madera resistente.',
    descriptionEnvironment: 'Se utiliza en carpintería y ebanistería por su madera resistente.',
    image: '/imagenes/plantas/roble.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'madera',
    soil: 'arcilloso',
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
    id: 21,
    title: 'Haya',
    description: 'La haya es un árbol caducifolio de la familia de las fagáceas. Se utiliza en carpintería y ebanistería por su madera dura.',
    descriptionEnvironment: 'Se utiliza en carpintería y ebanistería por su madera dura.',
    image: '/imagenes/plantas/haya.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'madera',
    soil: 'arcilloso',
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
    id: 22,
    title: 'Enebro',
    description: 'El enebro es un arbusto perenne de la familia de las cupresáceas. Tiene frutos comestibles y se utiliza en la elaboración de gin.',
    descriptionEnvironment: 'Tiene frutos comestibles y se utiliza en la elaboración de gin.',
    image: '/imagenes/plantas/enebro.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'gin',
    soil: 'arenoso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 23,
    title: 'Tilo',
    description: 'El tilo es un árbol caducifolio de la familia de las tiliáceas. Tiene flores fragantes y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene flores fragantes y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/tilo.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 24,
    title: 'Acebo',
    description: 'El acebo es un arbusto perenne de la familia de las aquifoliáceas. Tiene bayas rojas y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene bayas rojas y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/acebo.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 25,
    title: 'Lavanda',
    description: 'La lavanda es un arbusto aromático de la familia de las lamiáceas. Tiene flores moradas y se utiliza en perfumería y cosmética.',
    descriptionEnvironment: 'Tiene flores moradas y se utiliza en perfumería y cosmética.',
    image: '/imagenes/plantas/lavanda.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'perfumería',
    soil: 'arenoso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 26,
    title: 'Romero',
    description: 'El romero es un arbusto aromático de la familia de las lamiáceas. Tiene hojas aromáticas y se utiliza en la cocina y la medicina tradicional.',
    descriptionEnvironment: 'Tiene hojas aromáticas y se utiliza en la cocina y la medicina tradicional.',
    image: '/imagenes/plantas/romero.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'cocina',
    soil: 'arenoso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 27,
    title: 'Helecho',
    description: 'El helecho es una planta ornamental de la familia de las pteridáceas. Tiene hojas verdes y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene hojas verdes y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/helecho.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 28,
    title: 'Alcachofa',
    description: 'La alcachofa es una planta herbácea perenne de la familia de las asteráceas. Se cultiva por sus cabezas florales, que se utilizan en alimentación humana.',
    descriptionEnvironment: 'Se cultiva por sus cabezas florales, que se utilizan en alimentación humana.',
    image: '/imagenes/plantas/alcachofa.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'alimentación',
    soil: 'arcilloso',
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
    id: 29,
    title: 'Clemátide',
    description: 'La clemátide es una planta trepadora de la familia de las ranunculáceas. Tiene flores llamativas y se utiliza en jardinería y ornamentación.',
    descriptionEnvironment: 'Tiene flores llamativas y se utiliza en jardinería y ornamentación.',
    image: '/imagenes/plantas/clematide.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
    {
    id: 30,
    title: 'Hierba de San Juan',
    description: 'La Hierba de San Juan es una planta herbácea de la familia de las hipericáceas. Tiene propiedades medicinales y se utiliza en fitoterapia.',
    descriptionEnvironment: 'Tiene propiedades medicinales y se utiliza en fitoterapia.',
    image: '/imagenes/plantas/hierba_de_san_juan.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'fitoterapia',
    soil: 'arenoso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 31,
    title: 'Lino',
    description: 'El lino es una planta herbácea de la familia de las lináceas. Se cultiva por su fibra y sus semillas, que se utilizan en la industria textil y la alimentación.',
    descriptionEnvironment: 'Se cultiva por su fibra y sus semillas, que se utilizan en la industria textil y la alimentación.',
    image: '/imagenes/plantas/lino.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'fibra',
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
    id: 32,
    title: 'Menta',
    description: 'La menta es una planta aromática de la familia de las lamiáceas. Tiene hojas fragantes y se utiliza en gastronomía, perfumería y medicina.',
    descriptionEnvironment: 'Tiene hojas fragantes y se utiliza en gastronomía, perfumería y medicina.',
    image: '/imagenes/plantas/menta.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'gastronomía',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 33,
    title: 'Hiervabuena',
    description: 'La hiervabuena es una planta aromática de la familia de las lamiáceas. Tiene hojas aromáticas y se utiliza en gastronomía y medicina.',
    descriptionEnvironment: 'Tiene hojas aromáticas y se utiliza en gastronomía y medicina.',
    image: '/imagenes/plantas/hiervabuena.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'gastronomía',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 34,
    title: 'Pino Silvestre',
    description: 'El pino silvestre es un árbol perenne de la familia de las pináceas. Tiene hojas aciculares y se utiliza en carpintería y ebanistería.',
    descriptionEnvironment: 'Tiene hojas aciculares y se utiliza en carpintería y ebanistería.',
    image: '/imagenes/plantas/pino_silvestre.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'carpintería',
    soil: 'arenoso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 35,
    title: 'Llantén',
    description: 'El llantén es una planta herbácea de la familia de las plantagináceas. Tiene hojas lanceoladas y se utiliza en medicina tradicional.',
    descriptionEnvironment: 'Tiene hojas lanceoladas y se utiliza en medicina tradicional.',
    image: '/imagenes/plantas/llanten.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'medicina',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 36,
    title: 'Cardo Mariano',
    description: 'El cardo mariano es una planta herbácea de la familia de las asteráceas. Tiene propiedades medicinales y se utiliza en fitoterapia.',
    descriptionEnvironment: 'Tiene propiedades medicinales y se utiliza en fitoterapia.',
    image: '/imagenes/plantas/cardo_mariano.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'fitoterapia',
    soil: 'arcilloso',
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
    id: 37,
    title: 'Saúco',
    description: 'El saúco es un arbusto perenne de la familia de las adoxáceas. Tiene flores blancas y se utiliza en gastronomía y medicina tradicional.',
    descriptionEnvironment: 'Tiene flores blancas y se utiliza en gastronomía y medicina tradicional.',
    image: '/imagenes/plantas/sauco.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'gastronomía',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 38,
    title: 'Tulipán',
    description: 'El tulipán es una planta bulbosa de la familia de las liliáceas. Tiene flores llamativas y se utiliza en jardinería y floricultura.',
    descriptionEnvironment: 'Tiene flores llamativas y se utiliza en jardinería y floricultura.',
    image: '/imagenes/plantas/tulipan.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
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
    id: 39,
    title: 'Magnolia',
    description: 'La magnolia es un árbol perenne de la familia de las magnoliáceas. Tiene flores grandes y vistosas y se utiliza en jardinería y paisajismo.',
    descriptionEnvironment: 'Tiene flores grandes y vistosas y se utiliza en jardinería y paisajismo.',
    image: '/imagenes/plantas/magnolia.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
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
    id: 40,
    title: 'Fresno',
    description: 'El fresno es un árbol caducifolio de la familia de las oleáceas. Tiene hojas compuestas y se utiliza en carpintería y ebanistería.',
    descriptionEnvironment: 'Tiene hojas compuestas y se utiliza en carpintería y ebanistería.',
    image: '/imagenes/plantas/fresno.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'carpintería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 41,
    title: 'Ficus',
    description: 'El ficus es un árbol perenne de la familia de las moráceas. Tiene hojas grandes y se utiliza en jardinería y decoración interior.',
    descriptionEnvironment: 'Tiene hojas grandes y se utiliza en jardinería y decoración interior.',
    image: '/imagenes/plantas/ficus.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
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
    id: 42,
    title: 'Cactus',
    description: 'El cactus es una planta suculenta de la familia de las cactáceas. Tiene tallos carnosos y se utiliza en jardinería y decoración.',
    descriptionEnvironment: 'Tiene tallos carnosos y se utiliza en jardinería y decoración.',
    image: '/imagenes/plantas/cactus.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
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
    id: 43,
    title: 'Eucalipto',
    description: 'El eucalipto es un árbol perenne de la familia de las mirtáceas. Tiene hojas lanceoladas y se utiliza en carpintería y medicina.',
    descriptionEnvironment: 'Tiene hojas lanceoladas y se utiliza en carpintería y medicina.',
    image: '/imagenes/plantas/eucalipto.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'carpintería',
    soil: 'arenoso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 44,
    title: 'Ciprés',
    description: 'El ciprés es un árbol perenne de la familia de las cupresáceas. Tiene hojas escamosas y se utiliza en jardinería y paisajismo.',
    descriptionEnvironment: 'Tiene hojas escamosas y se utiliza en jardinería y paisajismo.',
    image: '/imagenes/plantas/cipres.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arenoso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 45,
    title: 'Bambú',
    description: 'El bambú es una planta leñosa de la familia de las poáceas. Tiene tallos largos y flexibles y se utiliza en construcción y artesanía.',
    descriptionEnvironment: 'Tiene tallos largos y flexibles y se utiliza en construcción y artesanía.',
    image: '/imagenes/plantas/bambu.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'construcción',
    soil: 'arenoso',
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 46,
    title: 'Caña',
    description: 'La caña es una planta herbácea de la familia de las poáceas. Tiene tallos huecos y se utiliza en construcción y artesanía.',
    descriptionEnvironment: 'Tiene tallos huecos y se utiliza en construcción y artesanía.',
    image: '/imagenes/plantas/cana.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'construcción',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 47,
    title: 'Laurel',
    description: 'El laurel es un arbusto perenne de la familia de las lauráceas. Tiene hojas lanceoladas y se utiliza en gastronomía y medicina.',
    descriptionEnvironment: 'Tiene hojas lanceoladas y se utiliza en gastronomía y medicina.',
    image: '/imagenes/plantas/laurel.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'gastronomía',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 48,
    title: 'Begonia',
    description: 'La begonia es una planta ornamental de la familia de las begoniáceas. Tiene flores llamativas y se utiliza en jardinería y decoración interior.',
    descriptionEnvironment: 'Tiene flores llamativas y se utiliza en jardinería y decoración interior.',
    image: '/imagenes/plantas/begonia.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
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
    id: 49,
    title: 'Orquídea',
    description: 'La orquídea es una planta epífita de la familia de las orquidáceas. Tiene flores exóticas y se utiliza en jardinería y floristería.',
    descriptionEnvironment: 'Tiene flores exóticas y se utiliza en jardinería y floristería.',
    image: '/imagenes/plantas/orquidea.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
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
    id: 50,
    title: 'Rosmarinus',
    description: 'El romero es un arbusto perenne de la familia de las lamiáceas. Tiene hojas aromáticas y se utiliza en gastronomía y medicina.',
    descriptionEnvironment: 'Tiene hojas aromáticas y se utiliza en gastronomía y medicina.',
    image: '/imagenes/plantas/romero.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'gastronomía',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 51,
    title: 'Tomillo',
    description: 'El tomillo es un arbusto aromático de la familia de las lamiáceas. Tiene hojas pequeñas y se utiliza en gastronomía y medicina.',
    descriptionEnvironment: 'Tiene hojas pequeñas y se utiliza en gastronomía y medicina.',
    image: '/imagenes/plantas/tomillo.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'gastronomía',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 52,
    title: 'Almendro',
    description: 'El almendro es un árbol caducifolio de la familia de las rosáceas. Tiene frutos comestibles y se utiliza en agricultura y repostería.',
    descriptionEnvironment: 'Tiene frutos comestibles y se utiliza en agricultura y repostería.',
    image: '/imagenes/plantas/almendro.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'agricultura',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 53,
    title: 'Nogal',
    description: 'El nogal es un árbol caducifolio de la familia de las juglandáceas. Tiene frutos comestibles y se utiliza en carpintería y alimentación.',
    descriptionEnvironment: 'Tiene frutos comestibles y se utiliza en carpintería y alimentación.',
    image: '/imagenes/plantas/nogal.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'carpintería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 54,
    title: 'Cedro',
    description: 'El cedro es un árbol perenne de la familia de las pináceas. Tiene madera aromática y se utiliza en carpintería y construcción.',
    descriptionEnvironment: 'Tiene madera aromática y se utiliza en carpintería y construcción.',
    image: '/imagenes/plantas/cedro.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'carpintería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 55,
    title: 'Abeto',
    description: 'El abeto es un árbol perenne de la familia de las pináceas. Tiene hojas aciculares y se utiliza en carpintería y decoración.',
    descriptionEnvironment: 'Tiene hojas aciculares y se utiliza en carpintería y decoración.',
    image: '/imagenes/plantas/abeto.png',
    invasive: false,
    native: false,
    exotic: true,
    caracteristic: 'carpintería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 56,
    title: 'Narciso',
    description: 'El narciso es una planta bulbosa de la familia de las amarilidáceas. Tiene flores perfumadas y se utiliza en jardinería y floristería.',
    descriptionEnvironment: 'Tiene flores perfumadas y se utiliza en jardinería y floristería.',
    image: '/imagenes/plantas/narciso.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
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
    id: 57,
    title: 'Hiedra',
    description: 'La hiedra es una planta trepadora de la familia de las araliáceas. Tiene hojas perennes y se utiliza en jardinería y paisajismo.',
    descriptionEnvironment: 'Tiene hojas perennes y se utiliza en jardinería y paisajismo.',
    image: '/imagenes/plantas/hiedra.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: false,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 58,
    title: 'Violeta',
    description: 'La violeta es una planta herbácea de la familia de las violáceas. Tiene flores coloridas y se utiliza en jardinería y perfumería.',
    descriptionEnvironment: 'Tiene flores coloridas y se utiliza en jardinería y perfumería.',
    image: '/imagenes/plantas/violeta.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 59,
    title: 'Amapola',
    description: 'La amapola es una planta herbácea de la familia de las papaveráceas. Tiene flores vistosas y se utiliza en jardinería y medicina.',
    descriptionEnvironment: 'Tiene flores vistosas y se utiliza en jardinería y medicina.',
    image: '/imagenes/plantas/amapola.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'jardinería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 60,
    title: 'Encina',
    description: 'La encina es un árbol perenne de la familia de las fagáceas. Tiene hojas coriáceas y se utiliza en ganadería y leña.',
    descriptionEnvironment: 'Tiene hojas coriáceas y se utiliza en ganadería y leña.',
    image: '/imagenes/plantas/encina.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'ganadería',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: false,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 61,
    title: 'Ortiga',
    description: 'La ortiga es una planta herbácea de la familia de las urticáceas. Tiene hojas urticantes y se utiliza en medicina y alimentación.',
    descriptionEnvironment: 'Tiene hojas urticantes y se utiliza en medicina y alimentación.',
    image: '/imagenes/plantas/ortiga.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'medicina',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 62,
    title: 'Hinojo Silvestre',
    description: 'El hinojo silvestre es una planta herbácea de la familia de las apiáceas. Tiene hojas aromáticas y se utiliza en gastronomía y medicina.',
    descriptionEnvironment: 'Tiene hojas aromáticas y se utiliza en gastronomía y medicina.',
    image: '/imagenes/plantas/hinojo_silvestre.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'gastronomía',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 63,
    title: 'Cebada',
    description: 'La cebada es una planta herbácea de la familia de las poáceas. Tiene granos comestibles y se utiliza en agricultura y alimentación.',
    descriptionEnvironment: 'Tiene granos comestibles y se utiliza en agricultura y alimentación.',
    image: '/imagenes/plantas/cebada.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'agricultura',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: false,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 64,
    title: 'Avena',
    description: 'La avena es una planta herbácea de la familia de las poáceas. Tiene granos comestibles y se utiliza en agricultura y alimentación.',
    descriptionEnvironment: 'Tiene granos comestibles y se utiliza en agricultura y alimentación.',
    image: '/imagenes/plantas/avena.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'agricultura',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: false,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 65,
    title: 'Hinojo de Mar',
    description: 'El hinojo de mar es una planta acuática de la familia de las apiáceas. Tiene hojas aromáticas y se utiliza en gastronomía y medicina.',
    descriptionEnvironment: 'Tiene hojas aromáticas y se utiliza en gastronomía y medicina.',
    image: '/imagenes/plantas/hinojo_mar.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'gastronomía',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: false,
      jardines: false,
      costa: true,
      interior: false,
      montaña: false
    }
  },
  {
    id: 66,
    title: 'Cola de Caballo',
    description: 'La cola de caballo es una planta herbácea de la familia de las equisetáceas. Tiene tallos estriados y se utiliza en medicina y jardinería.',
    descriptionEnvironment: 'Tiene tallos estriados y se utiliza en medicina y jardinería.',
    image: '/imagenes/plantas/cola_caballo.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'medicina',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 67,
    title: 'Alfalfa',
    description: 'La alfalfa es una planta herbácea de la familia de las fabáceas. Tiene hojas trifoliadas y se utiliza en agricultura y alimentación animal.',
    descriptionEnvironment: 'Tiene hojas trifoliadas y se utiliza en agricultura y alimentación animal.',
    image: '/imagenes/plantas/alfalfa.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'agricultura',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: false,
      costa: false,
      interior: true,
      montaña: true
    }
  },
  {
    id: 68,
    title: 'Cardo',
    description: 'El cardo es una planta herbácea de la familia de las asteráceas. Tiene hojas espinosas y se utiliza en medicina y alimentación.',
    descriptionEnvironment: 'Tiene hojas espinosas y se utiliza en medicina y alimentación.',
    image: '/imagenes/plantas/cardo.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'medicina',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 69,
    title: 'Flor de San Juan',
    description: 'La flor de San Juan es una planta herbácea de la familia de las hipéricáceas. Tiene flores amarillas y se utiliza en medicina y jardinería.',
    descriptionEnvironment: 'Tiene flores amarillas y se utiliza en medicina y jardinería.',
    image: '/imagenes/plantas/flor_san_juan.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'medicina',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 70,
    title: 'Caléndula',
    description: 'La caléndula es una planta herbácea de la familia de las asteráceas. Tiene flores de color anaranjado y se utiliza en medicina y jardinería.',
    descriptionEnvironment: 'Tiene flores de color anaranjado y se utiliza en medicina y jardinería.',
    image: '/imagenes/plantas/calendula.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'medicina',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 71,
    title: 'Llantén',
    description: 'El llantén es una planta herbácea de la familia de las plantagináceas. Tiene hojas lanceoladas y se utiliza en medicina y jardinería.',
    descriptionEnvironment: 'Tiene hojas lanceoladas y se utiliza en medicina y jardinería.',
    image: '/imagenes/plantas/llanten.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'medicina',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 72,
    title: 'Trébol Blanco',
    description: 'El trébol blanco es una planta herbácea de la familia de las fabáceas. Tiene flores blancas y se utiliza en agricultura y jardinería.',
    descriptionEnvironment: 'Tiene flores blancas y se utiliza en agricultura y jardinería.',
    image: '/imagenes/plantas/trebol_blanco.png',
    invasive: false,
    native: false,
    exotic: false,
    caracteristic: 'agricultura',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 73,
    title: 'Amapola Silvestre',
    description: 'La amapola silvestre es una planta herbácea de la familia de las papaveráceas. Tiene flores rojas y se utiliza en medicina y ornamentación.',
    descriptionEnvironment: 'Tiene flores rojas y se utiliza en medicina y ornamentación.',
    image: '/imagenes/plantas/amapola_silvestre.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'medicina',
    soil: 'arcilloso',
    environment: {
      prados: true,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  },
  {
    id: 74,
    title: 'Laurel',
    description: 'El laurel es un árbol perenne de la familia de las lauráceas. Tiene hojas coriáceas y se utiliza en gastronomía y jardinería.',
    descriptionEnvironment: 'Tiene hojas coriáceas y se utiliza en gastronomía y jardinería.',
    image: '/imagenes/plantas/laurel.png',
    invasive: false,
    native: true,
    exotic: false,
    caracteristic: 'gastronomía',
    soil: 'arcilloso',
    environment: {
      prados: false,
      campos: true,
      jardines: true,
      costa: true,
      interior: true,
      montaña: true
    }
  }
]);



const storedSelectedPlants = JSON.parse(localStorage.getItem('SelectedPlants')) || [];
  
  const SelectedPlants = ref(storedSelectedPlants);


  console.log(SelectedPlants.value.length)




const results = () => {
  // Obtener SelectedPlants del almacenamiento local si está disponible
  const storedSelectedPlants = JSON.parse(localStorage.getItem('SelectedPlants')) || [];
  
  const SelectedPlants = ref(storedSelectedPlants);

  console.log('Calculando resultados...');
  const totalPlants = SelectedPlants.value.length;
  const totalInvasive = SelectedPlants.value.filter(plant => plant.invasive).length;
  const totalNative = SelectedPlants.value.filter(plant => plant.native).length;
  const totalExotic = SelectedPlants.value.filter(plant => plant.exotic).length;

  let totalsByEnvironment = {
    prados: SelectedPlants.value.filter(plant => plant.environment.prados).length,
    campos: SelectedPlants.value.filter(plant => plant.environment.campos).length,
    jardines: SelectedPlants.value.filter(plant => plant.environment.jardines).length,
    costa: SelectedPlants.value.filter(plant => plant.environment.costa).length,
    interior: SelectedPlants.value.filter(plant => plant.environment.interior).length,
    montaña: SelectedPlants.value.filter(plant => plant.environment.montaña).length
  };

  // Mostrar resultados en la consola
  console.log('Número total de plantas seleccionadas:', totalPlants);
  console.log('Número total de plantas invasivas:', totalInvasive);
  console.log('Número total de plantas nativas:', totalNative);
  console.log('Número total de plantas exóticas:', totalExotic);
  console.log('Totales de plantas por ambiente:', totalsByEnvironment);

  // Mostrar resultados por ambiente
  console.log('--- Resultados por ambiente ---');
  for (const [environment, total] of Object.entries(totalsByEnvironment)) {
    console.log(`${environment}: ${total}`);
  }

  // Guardar resultados en el almacenamiento local
  const resultados = {
    totalPlants,
    totalInvasive,
    totalNative,
    totalExotic,
    totalsByEnvironment
  };

  localStorage.setItem('resultados', JSON.stringify(resultados));
};


const enviar = () => {

  router.push('/result');
  results();
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