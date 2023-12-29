<template>
    <div v-if="detailsEquipe">
      <h1>Détails de l'équipe {{ detailsEquipe.nom }}</h1>
      <img :src="detailsEquipe.logo" :alt="'Logo de l\'équipe ' + detailsEquipe.nom">
      <h2>{{ detailsEquipe.nom }}</h2>
      <h3>{{ detailsEquipe.description }}</h3>
      <ul>
        <li v-for="joueur in detailsEquipe.joueurs" :key="joueur.nomJoueur">{{ joueur.nomJoueur }}</li>
      </ul>
    </div>

  </template>
  
  <script>
  export default {
    props: ['equipes'],
    data() {
      return {
        idEquipe: this.$route.params.id
      }
    },
    computed: {
      detailsEquipe() {
        return this.equipes.find(equipe => equipe.idEquipe == this.idEquipe);
      }
    }
  }
  </script>
  