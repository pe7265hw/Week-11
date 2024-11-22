<script setup>

import {useStudentStore} from '../stores/StudentStore.js'

import {storeToRefs} from 'pinia'
import {computed} from 'vue'
import StudentRow from './StudentRow.vue';

const studentStore = useStudentStore()

const {studentList} = storeToRefs(studentStore)

const deleteStudent = (student) => {
    studentStore.deleteStudent(student)
}

const arrivedOrLeft = (student) => {
    studentStore.arrivedOrLeft(student)
}

</script>


<template>


<div id="student-list-table" class="card m-2 p-2">
    <h4 class="card-title">Student List</h4>
    <h5>{{studentCount}} students in class.</h5> <!--Count of students in list-->
    <div id="student-table">
        <table class="table">
            <thead>
                <tr><!--Headers for table-->
                    <th>Name</th>
                    <th>StarID</th>
                    <th>Present?</th>
                </tr>
            </thead>

            <tbody>
                <StudentRow 
                v-for="student in sortedStudents"
                v-bind:student="student"></StudentRow>

            </tbody>

        </table>
    </div>
</div>

</template>

<style scoped>

#student-table {
    max-height: 400px;
    overflow: scroll;
}

th, tr {
    width: 25%;
}

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}

</style>