<template>
    <div>
        <h1>presence</h1>
        <Table firstName="test"  lastName="lina" :studentState="true"/>
    </div>
</template>

<script>
import Table from '../components/Table.vue';

export default {
    components:{
        Table
    }
}



</script>