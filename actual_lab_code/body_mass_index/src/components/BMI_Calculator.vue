<script setup>
import {ref} from 'vue'

//defines props that will be recieved from parent
defineProps({
  mainStatement: String,
  heightQuestion: String,
  weightQuestion: String,

})

//imports Bmistore
import { useBmiStore } from '../stores/BmiStore';
//imports pinia
import { storeToRefs } from 'pinia';
//creates object to use BmiStore
const bmiStore = useBmiStore()
//references refs created in store
const {userHeight, userWeight} = storeToRefs(bmiStore)

//defines events that will be emitted to parent 
const emit = defineEmits([
  'stats-entered'
])

//emits event to paren
const userEnteredData = () => {
  emit('stats-entered')
}


</script>

<template>

<!--HTML for page-->
<h2>{{mainStatement}}</h2>
  <div>
    <label for="weightInput">{{ weightQuestion }}</label>
    <input v-model="userWeight" id="weightInput">
    <br>
    <br>
    <label for="heightInput">{{ heightQuestion }}</label>
    <input v-model="userHeight" id="heightInput">
    <br>
    <br>
    <button v-on:click="userEnteredData">Calculate</button>
    </div>

</template>

<style scoped>

</style>
