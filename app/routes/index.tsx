import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

const className = css`
  font-family: sans-serif;
`

export default createRoute((c) => {
  const query = c.req.query('name')
  const name = query ?? 'Hono'
  return c.render(
    <div class={className}>
      <h1>Hello, {name}!</h1>
      {query && <a href="/">back to top.</a>}
      <Counter />
    </div>,
    { title: name }
  )
})
