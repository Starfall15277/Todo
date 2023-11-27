import { create } from 'zustand'

export interface todoType {
    id: number,
    text: string,
    completed: boolean
}

interface storeType {
    todos: todoType[],
    addTodo: (text: string) => void,
    deleteTodo: (id: number) => void,
    updateTodo: (id: number, newText: string) => void,
    toggleTodo: (id: number) => void
    deleteAllTodos: () => void;
}

export const useStore = create<storeType>((set) => ({
    todos: [],
    addTodo: (text) =>
      set((state) => ({
        todos: [
          {
            id: Date.now(),
            text,
            completed: false,
          },
          ...state.todos,
        ],
      })),
    deleteTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
    updateTodo: (id, newText) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        ),
      })),
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      })),
      deleteAllTodos: () =>
      set(() => ({
        todos: [],
      })),
  }));
  