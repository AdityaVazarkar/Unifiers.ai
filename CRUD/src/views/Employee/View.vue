
import { RouterLink } from 'vue-router';
<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4>
                    Employee
                    <RouterLink to="/employee/create" class="btn btn-primary float-end">
                        Add Employee
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-border">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>EMAIL</th>
                            <th>FIRST Name</th>
                            <th>USERNAME</th>
                            <th>PHONE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.employee.length > 0">
                       <tr v-for="(employee , index) in this.employee" :key="index">
                            <td>{{ employee.id }}</td>
                            <td>{{ employee.email }}</td>
                            <td>{{ employee.name }}</td>
                            <td>{{ employee.username }}</td>
                            <td>{{ employee.phone }}</td>
                            <td>
                                <RouterLink to="./EmployeeCreate.vue" class="btn btn-success">
                                     Edit
                                </RouterLink>
                                <button type="button" class="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                       </tr> 
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">
                                Loading...
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default{
        name:'Employee',
        data(){
            return{
            employee:[]
        }
    },
    mounted(){
        // console.log('i am here');
        this.getEmployee();
    },
    methods:{
        getEmployee(){

            axios.get("	https://jsonplaceholder.typicode.com/users").then(res =>{
                this.employee = res.data
                console.log(this.employee);
            });

        }
    }
}

</script>