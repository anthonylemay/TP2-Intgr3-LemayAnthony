<template>
  <h1>Accueil</h1>
  <img
    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="image d'un gamer à l'ordinateur"
  />
  <h2>Ligue eSports</h2>
  <h3>Le jeu à un autre niveau</h3>
  <div v-for="game in games" :key="game.idGame">
    <img :src="game.gamePicture" :alt="'Image du jeu ' + game.gameName" />
    <h2>{{ game.gameName }}</h2>
    <p>{{ game.description }}</p>
  </div>
</template>

<script>
export default {
    inject: ['games']

  /*Si j'avais à gérer l'ajout ou la modification de jeux à partir de l'accueil
  
  inject: {
    games: {
      type: Array,
      required: true,
      default: () => [
        { gameName: String, required: true, default: '' },
        { gamePicture: String, required: true, default: '' },
        { description: String, required: true, default: '' }
      ]
    }
  } */
}
</script>
