<template>
    <h1> Ajout d'équipe</h1>
    <hr>
    <form @submit="valider">
        <div>
            <label for="idEquipe">Id d'équipe</label>
            <input type="number" id="idEquipe" v-model.trim="newTeam.idEquipe">
            <p v-if="newTeam.erreurs.idEquipe">Veuillez remplir ce champ</p>
        </div>
        <div>
            <label for="nomEquipe">Nom d'équipe</label>
            <input type="text" id="nomEquipe" v-model.trim="newTeam.nomEquipe">
            <p v-if="newTeam.erreurs.nomEquipe">Veuillez remplir ce champ</p>
        </div>
        
        <div>
            <label for="logoEquipe">Url du logo d'équipe</label>
            <input type="text" id="logoEquipe" v-model.trim="newTeam.logoEquipe">
            <p v-if="newTeam.erreurs.logoEquipe">Veuillez remplir ce champ</p>
        </div>

        <div>
            <label for="joueur1">Pseudonyme du joueur #1</label>
            <input type="text" id="joueur1" v-model.trim="newTeam.joueur1">
            <p v-if="newTeam.erreurs.joueur1">Veuillez remplir ce champ</p>
        </div>
        
        <div>
            <label for="joueur2">Pseudonyme du joueur #2</label>
            <input type="text" id="joueur2" v-model.trim="newTeam.joueur2">
            <p v-if="newTeam.erreurs.joueur2">Veuillez remplir ce champ</p>
        </div>

        <div>
            <label for="joueur3">Pseudonyme du joueur #2</label>
            <input type="text" id="joueur3" v-model.trim="newTeam.joueur3">
            <p v-if="newTeam.erreurs.joueur3">Veuillez remplir ce champ</p>
        </div>

        <div>
            <label for="joueur4">Pseudonyme du joueur #4</label>
            <input type="text" id="joueur4" v-model.trim="newTeam.joueur4">
            <p v-if="newTeam.erreurs.joueur4">Veuillez remplir ce champ</p>
        </div>

        <div>
            <label for="joueur5">Pseudonyme du joueur #5</label>
            <input type="text" id="joueur5" v-model.trim="newTeam.joueur5">
            <p v-if="newTeam.erreurs.joueur5">Veuillez remplir ce champ</p>
        </div>

      <button type="submit">Ajouter l'équipe</button>
    </form>

  </template>
  
  <script>
  
import router from '../router/index'


  export default {

    props: {
    ajoutEquipe: {
        type: Function,
        required: true
    },
    games: Array,
    equipes:{
      type: Array,
      required: true,
      default: () => [
      {idEquipe: Number,
        required: true,
        default: 0
        },        
        {nom: String,
        required: true,
        default: ""
        },
        {logo: String,
        required: true,
        default: ""
        },
        {joueurs: Array,
        required: true,
        default: () => [
          {nomJoueur: String,
          required: true,
          default: ""
          }
        ]
        }
        
      ]
    }
  },
    
    data() {
      return {
        newTeam: {
            idEquipe: "",
            nomEquipe: "",
            logoEquipe: "",
            joueur1: "",
            joueur2: "",
            joueur3: "",
            joueur4: "",
            joueur5: "",
            erreurs:{
                idEquipe: false,
                nomEquipe:false,
                logoEquipe: false,
                joueur1:false,
                joueur2:false,
                joueur3: false,
                joueur4: false,
                joueur5: false
            },
            formValide: false
        }
      };
    },
    methods: {

      valider(e) {
        const teamData = {
            idEquipe: this.newTeam.idEquipe,
            nom: this.newTeam.nomEquipe,
            logo: this.newTeam.logoEquipe,
            joueurs:[
                {nomJoueur: this.newTeam.joueur1},
                {nomJoueur: this.newTeam.joueur2},
                {nomJoueur: this.newTeam.joueur3},
                {nomJoueur: this.newTeam.joueur4},
                {nomJoueur: this.newTeam.joueur5}
            ]
        }
        e.preventDefault() // à enlever, doublon de .prevent en haut.
        this.resetErreurs()
        let valide = this.validateTeam(teamData)

        if (valide){
            this.ajoutEquipe(teamData); // s'assurer que je dois pas gérer le ID de chaque équipe individuellement. sinon idEquipe: Date.now() ca peut peutetre faire. À valider.
            this.resetForm();
            console.log("équipe ajoutée"); // debug
            router.push({ name: 'equipes' });
        }

    },
    validateTeam(){
        let valide = true;

        if(isNaN(Number(this.newTeam.idEquipe)) || this.newTeam.idEquipe === ""){
        this.newTeam.erreurs.idEquipe = true;
        valide = false;
        }
        if(this.newTeam.nomEquipe ===""){
            this.newTeam.erreurs.nomEquipe = true
                    valide = false
        }
        if(this.newTeam.logoEquipe ===""){
            this.newTeam.erreurs.logoEquipe = true
                    valide = false
        }
        if(this.newTeam.joueur1 ===""){
            this.newTeam.erreurs.joueur1 = true
                    valide = false
        }
        if(this.newTeam.joueur2 ===""){
            this.newTeam.erreurs.joueur2 = true
                    valide = false
        }
        if(this.newTeam.joueur3 ===""){
            this.newTeam.erreurs.joueur3 = true
                    valide = false
        }
        if(this.newTeam.joueur4 ===""){
            this.newTeam.erreurs.joueur4 = true
                    valide = false
        }
        if(this.newTeam.joueur5 ===""){
            this.newTeam.erreurs.joueur5 = true
                    valide = false
        }
        return valide;
    },
    resetForm() {
        this.newTeam.idEquipe = "",
        this.newTeam.nomEquipe = "",
        this.newTeam.logoEquipe = "",
        this.newTeam.joueur1 = "",
        this.newTeam.joueur2 = "",
        this.newTeam.joueur3 = "",
        this.newTeam.joueur4 = "",
        this.newTeam.joueur5 = ""
        this.resetErreurs();
    }, 
    resetErreurs(){
        this.newTeam.erreurs.idEquipe = false
        this.newTeam.erreurs.nomEquipe = false
        this.newTeam.erreurs.logoEquipe = false
        this.newTeam.erreurs.joueur1 = false
        this.newTeam.erreurs.joueur2 = false
        this.newTeam.erreurs.joueur3 = false
        this.newTeam.erreurs.joueur4 = false
        this.newTeam.erreurs.joueur5 = false
    }
    
    //peut etre gérer tous les joueurs avec des boucles.


    }
  }
  </script>
  