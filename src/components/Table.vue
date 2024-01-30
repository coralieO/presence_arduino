<template>
    <div class="content bg-white border-b-2 border-green-500 px-3 py-2 mb-3
     text-black text-center" :class="{ '!border-red-500': absent}">
        <div class="name" v-on:change="sayHello">
            <p class="font-bold">{{Name}}</p>
            <p class="pt-1  text-sm">{{ Mail }}</p>
            <button @click="sayHello">speak</button>
        </div>
     
    </div>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        Name: String,
        Mail: String,
        studentState: Boolean,
        absent: Boolean
    },
  setup(props) {
    const sayHello = () => {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Bienvenu " + props.Name;
      msg.lang = "fr";
      window.speechSynthesis.speak(msg);
    };
    return { sayHello };
    },
})
</script>
<style>


</style>