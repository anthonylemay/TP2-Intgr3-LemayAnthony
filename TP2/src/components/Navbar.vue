<template>
<header>
    <nav>
      <div class="nav container">
      <router-link :to="{name: 'accueil'}" class="logo">eSports</router-link>
      <ul class="navLink">
        <li><router-link :to="{name: 'accueil'}">Accueil</router-link></li>
        <li><router-link :to="{name: 'equipes'}">Équipes</router-link></li>
      </ul>
      </div>  
    </nav>

</header>

</template>

<style scoped>
nav {
    padding: 1rem;
    background-color: rgb(29, 29, 29);
}

.nav{
  display:flex;
    justify-content: space-between;
    margin: 0 auto;
}

nav a{
    text-decoration:none;
    color: rgb(114, 114, 114);
    font-size: 2rem;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
}

nav a:hover{
    opacity: 0.8;
}


nav a.router-link-exact-active {
  color: rgb(168, 90, 212);

}

nav a.router-link-exact-active:hover {
  color:rgb(115, 0, 255);
}



.navLink{
    display:inline-flex;
}

.navLink a{
    padding: 1rem;
    margin:1rem;
}

nav a.logo{
    font-size:3rem;
    color:rgb(255, 255, 255);
    text-decoration: none;
}

nav ul{
  list-style-type: none;
}

  
</style>