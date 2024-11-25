<script setup>
import {ref} from 'vue'


defineProps({
  mainStatement: String,
  heightQuestion: String,
  weightQuestion: String,

})

import { useBmiStore } from '../stores/BmiStore';
import { storeToRefs } from 'pinia';
const bmiStore = useBmiStore()
const {userHeight, userWeight} = storeToRefs(bmiStore)


const emit = defineEmits([
  'stats-entered'
])

const userEnteredData = () => {
  emit('stats-entered')
}


</script>

<template>

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
