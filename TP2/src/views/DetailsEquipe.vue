<template>
    <div>
      <div class="team-info">
        <img :src="logo" alt="Team Logo">
        <h1>{{ nom }}</h1>
        <h2>Players:</h2>
        <ul>
          <li v-for="joueur in joueurs" :key="joueur.nomJoueur">
            {{ joueur.nomJoueur }}
          </li>
        </ul>
      </div>
    </div>
</template>
  
  
  <script>

  export default {

    inject: ['equipes', 'games', 'ajoutEquipe'],
    data() {
      return {
        idEquipe: this.$route.params.id,
        nom: "",
        logo:"",
        joueurs:[]
      }
    },
    mounted(){
        let validTeamId = false
        for(let i=0; i<this.equipes.length; i++)
        {
            if(this.equipes[i].idEquipe == this.idEquipe)
            {
                validTeamId = true;
                this.nom = this.equipes[i].nom
                this.logo = this.equipes[i].logo
                this.joueurs = this.equipes[i].joueurs
                console.log(this.joueurs)
                break
                
            }
        }
        if (!validTeamId){
            this.$router.push({name:'error'})
        }
    }
}

  </script>
  
