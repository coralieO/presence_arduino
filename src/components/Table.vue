<template>
    <div class="content">
        <div class="name">
            <h2>{{lastName}}</h2>
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
.content,.name{
    display: flex;
    justify-content: space-between;
}
.content{
    background-color: #fff;
    width: 20rem;
    border-radius: 20px;
    padding: 0 15px;
}
</style>