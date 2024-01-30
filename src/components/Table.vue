<template>
    <div class="content bg-cyan-700 px-3 py-2 mb-3">
        <div class="name">
            <h2 class="pr-2">{{lastName}}</h2>
            <h2>{{ firstName }}</h2>
        </div>
    <div class="state" v-on:change="sayHello">
            <p v-if="studentState">Présent</p>
            <p v-else>Absent</p>
        </div>
    <button @click="sayHello">speak</button>
    </div>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        lastName: String,
        firstName: String,
        studentState: Boolean
    },
  setup(props) {
    const sayHello = () => {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Bienvenu " + props.firstName;
      msg.lang = "fr";
      window.speechSynthesis.speak(msg);
    };
    return { sayHello };
    },
})
</script>
<style>
.name{
    display: flex;
}
.content{
    width: 20rem;
    border-radius: 20px;
}
</style>