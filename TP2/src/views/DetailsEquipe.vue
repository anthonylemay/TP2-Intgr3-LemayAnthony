<template>
    <h1>Détails de l'équipe {{  idEquipe }}</h1>
    <!-- Ajouter les détails de l'équipe-->
    </template>
    
    <script>
    export default{
            data(){
                return{
                    idEquipe:this.$route.params.id
                }
            }
    }
    
    </script>