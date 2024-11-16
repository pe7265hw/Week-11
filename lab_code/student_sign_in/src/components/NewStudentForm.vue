<script setup>

    import {ref} from 'vue'

    import { useStudentStore } from '../stores/StudentStore';

    const studentStore = useStudentStore()

    const newStudentName = ref('')
    const newStarID = ref('')

    const formErrors = ref([])

    function addStudent(){

            formErrors.value=[] //ensures formErrors is empty

            //checks for non valid data, if invalid pushes to formError array
            if(newStudentName.value.length == 0){
                formErrors.value.push('Student name must be entered.')
            }
            if (newStarID.value.length == 0){
                formErrors.value.push('StarID must be entered.')
            }
            //if length is empty values are added to student and pushed to studentList
            if(formErrors.value.length === 0){
            let student = {
                name:newStudentName.value,
                starID:newStarID.value,
                present:false
            }
            //change how to add student
            studentStore.addNewStudent(student)
            //values are then reset
            newStudentName.value = ''
            newStarID.value = ''
            }}

</script>


<template>

<div id="new-student-form-errors" class="m-2"> <!--section which shows errors-->
            <!-- TODO show errors from form validation -->
             <div class="alert alert-danger">
                <li v-for="error in formErrors">
                    {{error}} <!--display or error variable-->
                </li>
             </div>
        </div>


        <div id="new-student-form" class="card add-student m-2 p-2"> <!--form div-->
            <h4 class="card-title">Add new student</h4>

            <div class="form-group mb-3">
                <label for="name">Name</label>
                <!-- TODO v-model newStudentName -->
                <input v-model.trim="newStudentName" id="name" class="form-control">
            </div>

            <div class="form-group mb-3">
                <label for="starID">Star ID</label>
                 <!-- TODO v-model newStarID -->
                <input v-model.trim="newStarID" id="starID" class="form-control">
            </div>

            <!-- TODO v-on:click event handler -->
            <button v-on:click="addStudent" class="btn btn-primary">Add</button> <!--Add button, linked to addStudent function-->
        </div>


</template>

<style scoped>



</style>