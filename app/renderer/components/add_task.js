"use strict";

const TaskInput = require('./task_input');
const Materialize = require('../materialize');

module.exports = {
    props: ['tasks'],
    data() {
        return {
            title: "",
            command: "",
            path: ""
        };
    },
    template: `
    <li class="run-card">
        <div class="collapsible-header row center-align add-task-header">
            <strong class="unselectable-text">
                <span class="small material-icons">add</span>
                Add New Task
            </strong>
        </div>
        <div class="collapsible-body container task-card-body">
            <task-input v-on:save="addTask"></task-input>
        </div>
    </li>    
    `,
    methods: {
        addTask(task) {
            this.$emit('add', task);
            Materialize.collapseHeader(this.$el);
        }
    },
    components: {
        "task-input": TaskInput
    }
};
