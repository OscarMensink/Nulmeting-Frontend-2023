<template>
	<div class="page-wrapper">
		<div class="element-wrapper">
			<div class="element-body">
				<h1>Welkom bij de Levarne Nulmeting</h1>
				<LevButton @clicked="counter.increment"
					>Count me! {{ counter.count }}</LevButton
				>
				<br />
				<br />
				<NuxtLink to="/about">Over ons</NuxtLink>
				<br />
				<br />
				<LevTodoList></LevTodoList>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { isTemplateExpression } from "typescript";
import { useCounterStore } from "../stores/global";

const counter = useCounterStore();
const todoList = useTodos();
</script>
