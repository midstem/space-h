import { InferRequestType, InferResponseType, hc } from 'hono/client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import './App.css'

const client = hc<any>('http://localhost:3000/')

const App = (): JSX.Element => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await client.todos.$get()

      return await res.json()
    },
  })

  const { $post } = client.todo

  const mutation = useMutation<
    InferResponseType<typeof $post>,
    Error,
    InferRequestType<typeof $post>['form']
  >(
    async (todo) => {
      const res = await $post({
        form: todo,
      })

      return await res.json()
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
      onError: (error) => {
        console.log(error)
      },
    },
  )

  return (
    <div>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now().toString(),
            title: 'Write code',
          })
        }}
      >
        Add Todo
      </button>

      <ul>
        {query.data?.todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default App
