<template>
    <h1> Ajout d'équipe</h1>
    <form @submit.prevent="valider">
      <!-- Form fields à ajouter -->
      <button type="submit">Ajouter l'équipe</button>
    </form>
  </template>
  
  <script>
  export default {
    props: ['equipes', 'ajoutEquipe', 'games'], // ou inject, à valider!
    data() {
      return {
        newTeam: {
            nom: "",
            logo: "",
            joueurs: []
        }
      };
    },
    methods: {
      valider() {
        this.ajoutEquipe(...this.newTeam); // s'assurer que je dois pas gérer le ID de chaque équipe individuellement. sinon idEquipe: Date.now() ca peut peutetre faire. À valider.
        this.newTeam = {nom: "", logo: "", joueurs: []}; // Reset le formulaire.
        // peut-être injecter un success phrase dans le html.
      }
    }
  }
  </script>
  