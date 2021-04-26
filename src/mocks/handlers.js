import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.status(200),
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),

  rest.get('/movies', (_req, res, ctx) => {
    return res(
      ctx.delay(3000),
      ctx.status(200),
      ctx.json([{
        id: '12',
        title: 'Ace Ventura'
      }, {
        id: '22',
        title: 'Animals'
      }, {
        id: '43',
        title: 'ABC'
      }])
    );
  })
]