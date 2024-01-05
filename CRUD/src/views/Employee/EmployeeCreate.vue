<template>
   <div class="container mt-5">
    <div class="card">
        <div class="card-header">
            <h4>Add Student</h4>
        </div>
        <div class="card-body">

            <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                <li class="mb-0 ms-3" v-for="(error , index) in this.errorList" :key="index">
                    {{ error[0] }}
                </li>
            </ul>


            <div class="mb-3">
                <label for="">Email</label>
                <input type="text" v-model="model.employee.email" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="">Full Name</label>
                <input type="text" v-model="model.employee.name" class="form-control"/>
            </div>
            <div class="mb-3">
                <label for="">UserName</label>
                <input type="text" v-model="model.employee.userName" class="form-control"/>
            </div>
            <div class="mb-3">
                <label for="">Phone</label>
                <input type="text" v-model="model.employee.phone" class="form-control"/>
            </div>
            <div class="mb-3">
                <button type="button" @click="saveStudent" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import axios from 'axios';

    export default{
        name:'employeecreate',
        data(){
            return{
                errorList:'',
                model:{
                    employee:{
                        email:'',
                        name:'',
                        userName:'' ,
                        phone:''
                    }
                }
            }
        },
        methods:{
            saveStudent(){
                var $mythis = this;
                axios.post('https://jsonplaceholder.typicode.com/users',this.model.employee)
                .then(res =>{
                    console.log(res.data);
                    alert(res.data.message)
                    this.model.employee = {
                        email:'',
                        name:'',
                        userName:'' ,
                        phone:''
                    }
                })
                .catch(function(error){
                    if (error.response) {

                        if(error.response.status == 422){
                            mythis.errorList = error.response.data.error;
                        }
      
                        // console.log(error.response.data);
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                    } else if (error.request) {
      
                        console.log(error.request);
                    } else {
     
                     console.log('Error', error.message);
                     }
                })
            }
        }
    }
</script>