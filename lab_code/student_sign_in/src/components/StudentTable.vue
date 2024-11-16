<script setup>

import {useStudentStore} from '../stores/StudentStore.js'

import {storeToRefs} from 'pinia'

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

                <tr v-for="student in studentList" v-bind:class="{present: student.present, absent: !student.present}">
                    <td>{{student.name}}</td> <!--Contains name variable-->
                    <td>{{student.starID}}</td> <!--Contains starID variable-->
                    <td>
                        <!--check box for present or not, displays text whether present or not-->
                        <input type="checkbox" v-model="student.present" v-on:change="arrivedOrLeft(student)">
                        <span v-if="student.present" class="mx-3">Here!</span>
                        <span v-else class="mx-3">Not Present</span>
                    </td>
                    <td>
                        <!--Delete Student button, linked to deleteStudent function-->
                        <button v-on:click="deleteStudent(student)" class="btn btn-danger">
                            <i class="bi bi-trash-fill"></i> Delete
                        </button>
                    </td>
                            
                </tr>
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