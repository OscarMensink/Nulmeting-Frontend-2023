export const useGlobalStore = defineStore("globalStore", () => {
	const loading = ref(false);

	const startLoader = (): void => {
		loading.value = true;
	};
	const stopLoader = (): void => {
		loading.value = false;
	};

	return { loading, startLoader, stopLoader };
});

export const useCounterStore = defineStore("counter", {
	state: () => ({
		count: 0,
	}),

	actions: {
		increment() {
			this.count++;
		},
	},
});

export const useTodos = defineStore("todo", {
	state: () => ({
		todo: [
			{
				id: "5590fa55-1266-45af-8c86-d5a9dd03f955",
				assignee: "Oscar",
				dueDateTime: "2022-05-01T12:30:00.000Z",
				description: "starting task",
			},
		],
	}),

	actions: {
		addtodo() {
			const newTodo = {
				id: "bb90fa55-1266-45af-8c86-d5a9dd03f92d",
				assignee: "Niels",
				dueDateTime: "2022-05-01T12:30:00.000Z",
				description: "Tropisch fruit plukken",
			};
			const inList = this.todo.filter((todoItem) => todoItem.id == newTodo.id);

			if (inList.length == 0) {
				this.todo.push(newTodo);
			}
		},
		removeTodo(id: string) {
			const newList = this.todo.filter((todo) => todo.id !== id);
			this.todo = newList;
		},
	},
});
