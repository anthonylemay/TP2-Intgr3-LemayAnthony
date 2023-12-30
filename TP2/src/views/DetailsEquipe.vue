<template>
  <div>
    <div class="flex">
      <div class="divFlex">
      <img :src="logo" alt="Team Logo" />
      </div>
      <div class="divFlex columnFlex">
      <h1>{{ nom }}</h1>
      <h2>Joueurs:</h2>
      <ul>
        <li v-for="joueur in joueurs" :key="joueur.nomJoueur">
          {{ joueur.nomJoueur }}
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<style>
.flex{
  display:flex;
  width:100%;
  padding: 0;
  margin:0;
}

.divFlex{
  width:50%;
  margin:0;
  padding:0;
}

.divFlex img{
  width:100%;

}

.columnFlex{
  padding-top: 300px;
  padding-left:3rem;
  display:flex;
  flex-direction:column;
}

.columnFlex h1{
  margin-bottom:1rem;
  font-size:3rem;
}

.columnFlex h2{
  margin-bottom:1rem;
}

.columnFlex ul{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

.columnFlex ul li:hover, .columnFlex h2:hover, .columnFlex h1:hover{
  color:blueviolet;
}


</style>

<script>
export default {
  inject: ['equipes'],
  data() {
    return {
      idEquipe: this.$route.params.id,
      nom: '',
      logo: '',
      joueurs: []
    }
  },
  mounted() {
    let validTeamId = false
    for (let i = 0; i < this.equipes.length; i++) {
      if (this.equipes[i].idEquipe == this.idEquipe) {
        validTeamId = true
        this.nom = this.equipes[i].nom
        this.logo = this.equipes[i].logo
        this.joueurs = this.equipes[i].joueurs
        console.log(this.joueurs)
        break
      }
    }
    if (!validTeamId) {
      this.$router.push({ name: 'error' })
    }
  }
}
</script>
