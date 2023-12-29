<template>

<Navbar/>

  <RouterView/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

export default {
  data(){

  },
  components: {
    Navbar,
    RouterLink,
    RouterView
  },
  provide:{
    equipes:[
      {idEquipe: 1,
        nom:"Space Rangers",
        logo:"https://cdnb.artstation.com/p/assets/images/images/005/603/301/large/daka-dibuja-pandas.jpg?1492380569",
        joueurs:[
          {nomJoueur: "TonyBikini"},
          {nomJoueur: "BlueWaffle"},
          {nomJoueur: "Bisonman420"},
          {nomJoueur: "Pmk1H3dSl4p"},
          {nomJoueur: "the_dead_473"}
        ]
      },
      {idEquipe: 2,
        nom:"Mom Reapers",
        logo:"https://cdnb.artstation.com/p/assets/images/images/005/603/303/large/daka-dibuja-reapers.jpg?1492380571",
        joueurs:[
          {nomJoueur: "AFKFCK_21"},
          {nomJoueur: "Trumpist_Catalyst"},
          {nomJoueur: "Mr.Cooki3z"},
          {nomJoueur: "Misses-Nun"},
          {nomJoueur: "TheD00D"}
        ]
      },
    ]
  }
}

</script>


<style>
.container{
  max-width:1200px;
}

</style>
