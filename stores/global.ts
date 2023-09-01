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

type Todo = {
	todo: {
		id: string;
		assignee: string;
		dueDateTime: string;
		description: string;
	};
};

export const useTodos = defineStore<
	"todo",
	{
		todo: {
			id: string;
			assignee: string;
			dueDateTime: string;
			description: string;
		}[];
	},
	{},
	{
		addtodo(): void;
		fetchtodo(): Promise<void>;
		removeTodo(id: string): void;
	}
>("todo", {
	state: () => ({
		todo: [],
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
		async fetchtodo() {
			const newTodo = await $fetch<Todo>(
				"https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo",
				{
					headers: [["x-api-key", "6AgP2Gr7j3QvJHIr7xOq4OlY5McyScy3kqQL5Mr7"]],
				}
			).catch((error) => error.value);
			const inList = this.todo.filter(
				(todoItem) => todoItem.id == newTodo.todo.id
			);
			if (inList.length == 0) {
				this.todo.push(newTodo.todo);
			}
		},
		removeTodo(id: string) {
			const newList = this.todo.filter((todo) => todo.id !== id);
			this.todo = newList;
		},
	},
});
