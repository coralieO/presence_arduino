<template>
  <div class="bg-slate-100 px-12 pt-3">
        <h1 class="text-2xl mb-5 text-cyan-700">Listes des presences</h1>

        <div class="grid grid-cols-2 gap-6">
            <div>
        <h2 class="text-center text-xl">Présents</h2>
                <div class="rounded-2xl">
          <ul>
            <li v-for="student in students" :key="student.studentState">
              <Table
                v-if="student.studentState == true"
                :firstName="student.firstName"
                :lastName="student.lastName"
                :studentState="student.studentState"
              />
            </li>
          </ul>
                </div>
            </div>
            <div>
        <h2 class="text-xl">Absents</h2>
                <div class="rounded-2xl">
          <ul>
            <li v-for="student in students" :key="student.studentState">
              <Table
                v-if="student.studentState == false"
                :firstName="student.firstName"
                :lastName="student.lastName"
                :studentState="student.studentState"
              />
            </li>
          </ul>
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
  },
  setup(props) {},
  data() {
    return {
      students: [
        { firstName: "Lucas", lastName: "DAVAL", studentState: true },
        { firstName: "Lucas", lastName: "DAVAL", studentState: false },
        { firstName: "Lucas", lastName: "DAVAL", studentState: true },
        { firstName: "Lucas", lastName: "DAVAL", studentState: false },
      ],
    };
  },
};
</script>