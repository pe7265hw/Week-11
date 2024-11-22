<script setup>
import {ref, watch} from 'vue'

import { useBmiStore } from '../stores/BmiStore';
import { storeToRefs } from 'pinia';
const bmiStore = useBmiStore()
const {userHeight, userWeight} = storeToRefs(bmiStore)

defineProps({
  mainStatement: String,
  heightQuestion: String,
  weightQuestion: String,
})

const emit = defineEmits([
  'stats-entered'
])

const userEnteredData = () => {
  emit('stats-entered')
}

//watches for value to be given to variable that will be emitted to parent
// watch(bmiThis, () => {
//   emit('stats-entered', bmiThis.value)
// } )
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
