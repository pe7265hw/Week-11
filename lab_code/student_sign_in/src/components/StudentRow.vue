<script setup>

const props = defineProps({
    student:Object
})

</script>

<template>
    <tr class="align-middle" v-bind:class="{present: student.present, absent: !student.present}">
        <td>{{student.name}}</td> <!--Contains name variable-->
        <td>{{student.starID}}</td> <!--Contains starID variable-->
        <td>
            <!--todo v-model checkbox?-->
            <!--check box for present or not, displays text whether present or not-->
            <input type="checkbox" v-on:change="arrivedOrLeft(student)">
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

</template>

<style scoped>


</style>