<template>
        
    <div class=" ">
        <div class="h-12 bg-cyan-700"></div>
        <div class="bg-slate-100 px-12 pt-3">
            <h1 class="text-4xl my-3 text-cyan-700">Listes des presences</h1>

        <div class="grid grid-cols-2 gap-6 mt-12">
            <div>
                <h2 class="text-xl text-cyan-700 mb-4">Présents</h2>
                <div class="rounded-2xl" v-for="student in PresentUsers" :key="student.id">
                    <Table :Name="PresentUsers.name"  :Mail="PresentUsers.email"/>
                </div>
            </div>
            <div>
                <h2 class="text-2xl text-center text-black mb-4">Abscents</h2>
                <div class=" h-96 overflow-auto grid grid-cols-2 gap-2">
                    <div  v-for="student in Abstudent" :key="student.id">
                    <Table :Name="student.name"  :Mail="student.email" :absent="true" />
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted,ref } from 'vue'
import axios from 'axios'
import Table from '../components/Table.vue';

export default defineComponent({
    components:{
        Table,
    },

  setup() {
    const Abstudent= ref([]);
    const PresentUsers = ref([]);
    // Fonction pour récupérer des données
    const fetchData = async () => {
      try {
        const response = await axios.get('https://iot-m2-card.onrender.com/rooms/1');
        console.log(response.data);
        Abstudent.value = response.data.absentUsers 
        PresentUsers.value = response.data.presentUsers 
        // Traitez les données reçues ici
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return { 
        Abstudent,
        PresentUsers
     };
  },
})




</script>