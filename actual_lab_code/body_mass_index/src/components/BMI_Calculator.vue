<script setup>
import {ref, watch} from 'vue'

import { useBmiStore } from '../stores/BmiStore';
import { storeToRefs } from 'pinia';
const bmiStore = useBmiStore()
const {userHeight, userWeight, errors, bMI, determineUserBMI} = storeToRefs(bmiStore)

defineProps({
  mainStatement: String,
  heightQuestion: String,
  weightQuestion: String,

})


const bmiThis = ref('')
bmiThis.value=bmiStore.bMI
const emit = defineEmits([
  'stats-entered'
])

//watches for value to be given to variable that will be emitted to parent
watch(bmiThis, () => {
  emit('stats-entered', bmiThis.value)
} )
</script>

<template>

<h2>{{mainStatement}}</h2>
  <div>
    <label for="weightInput">{{ weightQuestion }}</label>
    <input v-model="bmiStore.userWeight" id="weightInput">
    <br>
    <br>
    <label for="heightInput">{{ heightQuestion }}</label>
    <input v-model="bmiStore.userHeight" id="heightInput">
    <br>
    <br>
    <button v-on:click="bmiStore.determineUserBMI">Calculate</button>
    </div>

</template>

<style scoped>

</style>
