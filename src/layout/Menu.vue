<template>
    <div class=" bg-cyan-700  pt-3">
        <p class="text-2xl text-white mb-6 text-center">Portail IIM</p>
        <nav class="ml-2 grid ">
            <router-link to="/" class="nav-link">Accueil</router-link>
            <router-link to="/Presences" class="nav-link">Presences</router-link>
        </nav>
    </div>
</template>


<style lang="postcss" scoped>

.nav-link{
    @apply mb-6 text-center text-white
}
.router-link-active{
    @apply bg-slate-100 rounded-s-2xl w-full p-4 text-cyan-700
}

</style>