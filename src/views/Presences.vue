<template>
        
    <div class=" ">
        <div class="h-12 bg-cyan-700"></div>
        <div class="bg-slate-100 px-12 pt-3">
            <h1 class="text-4xl my-3 text-cyan-600">Listes des presences</h1>
            <div v-if="New" class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100" role="alert">
                <span class="font-medium">{{ New }} est présent</span>
            </div>
        <div class="grid grid-cols-2 gap-8 mt-12">
            <div>
                <h2 class="text-2xl text-center text-cyan-600 mb-4">Présents</h2>
                <div class="h-96 overflow-auto grid grid-cols-2 gap-2">
                    <div v-for="student in PresentUsers" :key="student.id">
                        <Table :Name="student.name"  :Mail="student.email"/>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-2xl text-center text-cyan-600 mb-4">Absents</h2>
                <div class="h-96 overflow-auto grid grid-cols-2 gap-2">
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
    const New = ref();
    const evtSource = new EventSource("https://iot-m2-card.onrender.com/sse/1", {
    withCredentials: false,
    });
    evtSource.onmessage = (event) => {
        fetchData();
        New.value = event.presentUsers.name

    };
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
        PresentUsers,
        New
     };
  },
})




</script>