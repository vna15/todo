<template>
    <div class="container-board">
        <div class="columns">
                <div class="column col-5">
                    <div class="panel">
                        <div class="panel-header">
                            <div class="panel-title">Todo</div>
                        </div>
                        <div class="panel-body">
                            <Todo v-for="todo in unChecked" :todo="todo" :key="todo.id" @remove="removeTodo" @toggle="toggleTodo" />
                        </div>
                        <div class="panel-footer">
                            <button @click="checkAll" v-if="unChecked.length > 0" class="btn btn-link float-right">Concluir Tudo</button>
                        </div>
                    </div>
                </div>    
                <div class="column col-5 resp">
                    <div class="panel">
                        <div class="panel-header">
                            <div class="panel-title">Done</div>
                        </div>
                        <div class="panel-body">
                            <Todo v-for="todo in checkeds" :todo="todo" :key="todo.id" @remove="removeTodo" @toggle="toggleTodo" />
                        </div>
                        <div class="panel-footer">
                            <button @click="uncheckAll" v-if="checkeds.length > 0" class="btn btn-link float-right">Desmarcar Tudo</button>
                            <button @click="removeAllCheckeds" v-if="checkeds.length > 0" class="btn btn-link float-right text-error">Remover Tudo</button>
                        </div>
                    </div>
                </div>    
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import Todo from '../../components/Todo.vue';

    export default {
        components: { Todo },
        computed: {
            ...mapGetters(['unChecked', 'checkeds'])
        },
        methods: {
            ...mapActions(['removeTodo', 'toggleTodo', "checkAll", "uncheckAll", "removeAllCheckeds"])
        }
    }
</script>

<style scoped>
    .container-board {
        height: calc(100vh - 100px);
        padding: 10px;
    }

    .columns{
        height: 100%;
    }

    .columns .column .panel {
        height: 100%;
        border: 0;
        box-shadow: 0 0.25rem 1rem rgba(48,55,66,.5);
    }

</style>