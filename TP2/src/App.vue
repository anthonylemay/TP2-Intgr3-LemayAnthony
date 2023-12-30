<template>
  <Navbar />
  <RouterView/>
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  provide() {
    return {
      games: this.games,
      equipes: this.equipes,
      ajoutEquipe: this.ajoutEquipe
    }
  },
  data() {
    return {
      games: [
        {
          idGame: 1,
          gameName: 'League of Legends',
          gamePicture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co49wj.png',
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
        },
        {
          idGame: 2,
          gameName: 'Fortnite',
          gamePicture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5ztm.png',
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
        },
        {
          idGame: 3,
          gameName: 'Call of Duty Modern Warfare III',
          gamePicture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co7ctx.png',
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
        },
        {
          idGame: 4,
          gameName: 'Rocket League',
          gamePicture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5w0w.png',
          description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
        }
      ],
      equipes: [
        {
          idEquipe: 1,
          nom: 'Space Rangers',
          logo: 'https://cdnb.artstation.com/p/assets/images/images/005/603/301/large/daka-dibuja-pandas.jpg?1492380569',
          joueurs: [
            { nomJoueur: 'TonyBikini' },
            { nomJoueur: 'BlueWaffle' },
            { nomJoueur: 'Bisonman420' },
            { nomJoueur: 'Pmk1H3dSl4p' },
            { nomJoueur: 'the_dead_473' }
          ]
        },
        {
          idEquipe: 2,
          nom: 'South Reapers',
          logo: 'https://cdnb.artstation.com/p/assets/images/images/005/603/303/large/daka-dibuja-reapers.jpg?1492380571',
          joueurs: [
            { nomJoueur: 'AFKFCK_21' },
            { nomJoueur: 'Trumpist_Catalyst' },
            { nomJoueur: 'Mr.Cooki3z' },
            { nomJoueur: 'Misses-Nun' },
            { nomJoueur: 'TheD00D' }
          ]
        }
      ]
    }
  },
  methods: {
    ajoutEquipe(newTeam) {
      if (newTeam && newTeam.nom && Array.isArray(newTeam.joueurs)) {
        this.equipes.push(newTeam)
      } else {
        console.error('Invalid team structure', newTeam)
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}


h1,h2,h3,h4,h5{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

p{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.container{
  max-width:1200px;
}

</style>
