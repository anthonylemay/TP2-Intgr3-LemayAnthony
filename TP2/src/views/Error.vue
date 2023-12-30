<template>
    <section class="bg-color errorpage">
<h1>Erreur 404</h1>
<p>Désolé, cette page n'existe pas. Veuillez réessayer plus tard.</p>
<router-link :to="{name: 'accueil'}">Retour à l'accueil</router-link>

</section>
</template>


<style scoped>
.errorpage{
    padding-top:10rem;
    margin: 0 auto;
    text-align:center;
    color:white;
}

.errorpage p{
    font-size: 2rem;
    padding-bottom:5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.errorpage h1{
    font-size:3rem;
    margin-bottom: 5rem;
}


.errorpage a{
    color:white;
    text-decoration:underline;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:2rem;

}

.errorpage p:hover, .errorpage h1:hover, .errorpage a:hover{
    color:blueviolet;
}


.bg-color{
    background-color:black;
    height:100vh;
}
</style>