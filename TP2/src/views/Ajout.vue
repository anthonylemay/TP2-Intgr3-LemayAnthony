<template>
  <div class="hero">
  <h1>Ajout d'équipe</h1>
  <hr />
  <form @submit="valider">
    <div class="sectionForm">
      <div class="labelIn">
      <label for="idEquipe">Id d'équipe</label>
      <input type="number" id="idEquipe" v-model.trim="newTeam.idEquipe" />
      </div>
      <p class="error" v-if="newTeam.erreurs.idEquipe">Veuillez inscrire une ID valide (chiffres).</p>
    </div>
    <div class="sectionForm">
      <div class="labelIn">
      <label for="nomEquipe">Nom d'équipe</label>
      <input type="text" id="nomEquipe" v-model.trim="newTeam.nomEquipe" />
    </div>
      <p class="error" v-if="newTeam.erreurs.nomEquipe">Veuillez inscrire le nom de l'équipe.</p>
    </div>

    <div class="sectionForm">
      <div class="labelIn">
      <label for="logoEquipe">Url du logo d'équipe</label>
      <input type="text" id="logoEquipe" v-model.trim="newTeam.logoEquipe" />
    </div>
      <p class="error" v-if="newTeam.erreurs.logoEquipe">Veuillez inclure l'url du logo.</p>
    </div>

    <div class="sectionForm">
      <div class="labelIn">
      <label for="joueur1">Pseudonyme du joueur #1</label>
      <input type="text" id="joueur1" v-model.trim="newTeam.joueur1" />
    </div>
      <p class="error" v-if="newTeam.erreurs.joueur1">Veuillez inscrire le nom du joueur #1</p>
    </div>

    <div class="sectionForm">
      <div class="labelIn">
      <label for="joueur2">Pseudonyme du joueur #2</label>
      <input type="text" id="joueur2" v-model.trim="newTeam.joueur2" />
    </div>
      <p class="error" v-if="newTeam.erreurs.joueur2">Veuillez inscrire le nom du joueur #2</p>
    </div>

    <div class="sectionForm">
      <div class="labelIn">
      <label for="joueur3">Pseudonyme du joueur #3</label>
      <input type="text" id="joueur3" v-model.trim="newTeam.joueur3" />
    </div>
      <p class="error" v-if="newTeam.erreurs.joueur3">Veuillez inscrire le nom du joueur #3</p>
    </div>

    <div class="sectionForm">
      <div class="labelIn">
      <label for="joueur4">Pseudonyme du joueur #4</label>
      <input type="text" id="joueur4" v-model.trim="newTeam.joueur4" />
    </div>
      <p class="error" v-if="newTeam.erreurs.joueur4">Veuillez inscrire le nom du joueur #4</p>
    </div>

    <div class="sectionForm">
      <div class="labelIn">
      <label for="joueur5">Pseudonyme du joueur #5</label>
      <input type="text" id="joueur5" v-model.trim="newTeam.joueur5" />
    </div>
      <p class="error" v-if="newTeam.erreurs.joueur5">Veuillez inscrire le nom du joueur #5</p>

    </div>

    <button type="submit">Ajouter l'équipe</button>
  </form>
</div>
</template>



<style scoped>

form button{
  margin-left:9rem;
  width:200px;
  background-color: black;
  padding:1rem;
  color:white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight:bold;
  border-radius:30px;
  border: 0px solid;

}

form button:hover{
  background-color: blueviolet;
}

.hero{
  padding:5rem;
}

.hero h1{
  margin-bottom: 1rem;
}

form {
  font-family: gill 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}

form input{
  margin:1rem;
  border-radius: 30px;
  border: 0px solid;
  padding:.2rem;
  max-width:100%;
  min-width:200px;
  min-height:30px;
}

form label{
  padding-left:2rem;
  color:white;
}

.sectionForm{

  background-color:rgb(65, 65, 65);
  max-width:35%;
  margin:1rem;
  border-radius:30px;
}

.sectionForm:hover{
  background-color:blueviolet;
}

.labelIn{
  display:flex;
  align-items:center;
  justify-content:space-between;
}


.error {
  color: rgb(255, 168, 168);
  text-align:center;
  padding:1rem;
}
</style>


<script>
import router from '../router/index'

export default {
  inject:['ajoutEquipe', 'equipes'],

  /*
  Validation - Si c'était nécessaire.
  props: {
    ajoutEquipe: {
      type: Function,
      required: true
    },
    equipes: {
      type: Array,
      required: true,
      default: () => [
        { idEquipe: Number, required: true, default: 0 },
        { nom: String, required: true, default: '' },
        { logo: String, required: true, default: '' },
        {
          joueurs: Array,
          required: true,
          default: () => [{ nomJoueur: String, required: true, default: '' }]
        }
      ]
    }
  },*/

  data() {
    return {
      newTeam: {
        idEquipe: '',
        nomEquipe: '',
        logoEquipe: '',
        joueur1: '',
        joueur2: '',
        joueur3: '',
        joueur4: '',
        joueur5: '',
        erreurs: {
          idEquipe: false,
          nomEquipe: false,
          logoEquipe: false,
          joueur1: false,
          joueur2: false,
          joueur3: false,
          joueur4: false,
          joueur5: false
        },
        formValide: false
      }
    }
  },
  methods: {
    valider(e) {
      const teamData = {
        idEquipe: this.newTeam.idEquipe,
        nom: this.newTeam.nomEquipe,
        logo: this.newTeam.logoEquipe,
        joueurs: [
          { nomJoueur: this.newTeam.joueur1 },
          { nomJoueur: this.newTeam.joueur2 },
          { nomJoueur: this.newTeam.joueur3 },
          { nomJoueur: this.newTeam.joueur4 },
          { nomJoueur: this.newTeam.joueur5 }
        ]
      }
      e.preventDefault()
      this.resetErreurs()
      let valide = this.validateTeam(teamData)

      if (valide) {
        this.ajoutEquipe(teamData)
        this.resetForm()
        console.log('équipe ajoutée') // debug
        router.push({ name: 'equipes' })
      }
    },
    validateTeam() {
      let valide = true

      if (isNaN(Number(this.newTeam.idEquipe)) || this.newTeam.idEquipe === '') {
        this.newTeam.erreurs.idEquipe = true
        valide = false
      }
      if (this.newTeam.nomEquipe === '') {
        this.newTeam.erreurs.nomEquipe = true
        valide = false
      }
      if (this.newTeam.logoEquipe === '') {
        this.newTeam.erreurs.logoEquipe = true
        valide = false
      }
      if (this.newTeam.joueur1 === '') {
        this.newTeam.erreurs.joueur1 = true
        valide = false
      }
      if (this.newTeam.joueur2 === '') {
        this.newTeam.erreurs.joueur2 = true
        valide = false
      }
      if (this.newTeam.joueur3 === '') {
        this.newTeam.erreurs.joueur3 = true
        valide = false
      }
      if (this.newTeam.joueur4 === '') {
        this.newTeam.erreurs.joueur4 = true
        valide = false
      }
      if (this.newTeam.joueur5 === '') {
        this.newTeam.erreurs.joueur5 = true
        valide = false
      }
      return valide
    },
    resetForm() {
      ;(this.newTeam.idEquipe = ''),
        (this.newTeam.nomEquipe = ''),
        (this.newTeam.logoEquipe = ''),
        (this.newTeam.joueur1 = ''),
        (this.newTeam.joueur2 = ''),
        (this.newTeam.joueur3 = ''),
        (this.newTeam.joueur4 = ''),
        (this.newTeam.joueur5 = '')
      this.resetErreurs()
    },
    resetErreurs() {
      this.newTeam.erreurs.idEquipe = false
      this.newTeam.erreurs.nomEquipe = false
      this.newTeam.erreurs.logoEquipe = false
      this.newTeam.erreurs.joueur1 = false
      this.newTeam.erreurs.joueur2 = false
      this.newTeam.erreurs.joueur3 = false
      this.newTeam.erreurs.joueur4 = false
      this.newTeam.erreurs.joueur5 = false
    }
  }
}
</script>
