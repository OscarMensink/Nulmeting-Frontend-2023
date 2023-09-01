<template>
	<div class="list-wrapper">
		<div class="todo-wrapper">
			<LevButton @clicked="todoList.fetchtodo">Add Todo</LevButton>
			<ul>
				<li v-for="(item, index) in todoList.todo">
					<div>{{ item.assignee }}</div>
					<div>{{ item.description }}</div>
					<div>{{ new Date(item.dueDateTime).toDateString() }}</div>
					<LevButton @clicked="todoList.removeTodo(item.id)">Done</LevButton>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useTodos } from "../stores/global";

const todoList = useTodos();
</script>
