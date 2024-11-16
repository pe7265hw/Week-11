<script setup>
import { useStudentStore } from '../stores/StudentStore';
import { storeToRefs } from 'pinia';

const studentStore = useStudentStore()
const {mostRecentStudent} = storeToRefs(studentStore)


</script>


<template>

<div id="welcome-or-goodbye-message" class="m-2"> <!--Shows a welcome or goodbye message if check
            box clicked or not-->
            
             <div v-if="mostRecentStudent.name"> <!--Displays name if attending-->
                <div v-if="mostRecentStudent.present" class="alert alert-success">
                    Welcome! {{mostRecentStudent.name}}
                </div>
                <div v-else class="alert alert-info"> <!--Displays name if not attending-->
                    Goodbye {{mostRecentStudent.name}}, thanks for attending!
                </div>
             </div>

</div>

</template>

<style scoped>



</style>