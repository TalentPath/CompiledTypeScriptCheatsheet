export interface Todo {
    name: string,
    description: string,
    daysToComplete: number
}

export interface TodoFunc {
    (todo: Todo, todos: Todo[]): void
}