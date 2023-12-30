<template>
  <section class="relative">
    <img
      class="imgAcc"
      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image d'un gamer à l'ordinateur"
    />
    <div class="">
    <div class="gameSec">
      <h2 class="bigText">Les jeux du moment</h2>
      <div class="cards">
        <div class="card" v-for="game in games" :key="game.idGame">
          <img :src="game.gamePicture" :alt="'Image du jeu ' + game.gameName" />
          <h3>{{ game.gameName }}</h3>
          <p>{{ game.description }}</p>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<style scoped>
.relative {
  position: relative;
  overflow: hidden;
}

.imgAcc {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 800px;
  object-fit: cover;
  z-index: 1;
}

.header-content {
  position: absolute;
  top: 400px;
  width: 100%;
  text-align: center;
  color: white; 
  z-index: 2; 

  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.gameSec {
  padding-top: 800px;
  z-index: 3; 
}

.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
  padding:5rem;
  background-color: rgb(255, 255, 255);
}
.card {

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  max-width: 30%;

  padding: 3rem;
  margin: 1rem;
  background-color: rgb(177, 149, 203);
  border-radius: 20px;
}

.card img {
  width:100%;
  height:100%;
  max-width: 300px;
  max-height: 400px;
  object-fit: cover;
  border-radius:20px;
}

.card h3, .card p{
  padding:1rem;
  text-align:center;
}

.bigText {
  font-size: 3rem;
  text-align: center;
  padding: 5rem;
}
</style>

<script>
export default {
  inject: ['games']

  /*  Validation - Si c'était nécessaire.
  
  props: {
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
