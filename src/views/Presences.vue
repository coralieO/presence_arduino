<template>
    <div class=" bg-slate-100 px-12 pt-3">
        <h1 class="text-2xl mb-5 text-cyan-700">Listes des presences</h1>

        <div class="grid grid-cols-2 gap-6">
            <div>
                <h2 class=" text-center text-xl">Présents</h2>
                <div class="rounded-2xl">
                    <Table firstName="test"  lastName="lina"/>
                    <Table firstName="DEMATHIEU BART"  lastName="Leo"/>
                </div>
            </div>
            <div>
                <h2 >Abscents</h2>
                <div class="rounded-2xl">
                    <Table firstName="test"  lastName="lina"/>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import Table from '../components/Table.vue';

export default {
    components:{
        Table,
    }
}



</script>