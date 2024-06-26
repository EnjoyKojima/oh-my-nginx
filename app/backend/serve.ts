import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Bunnnnnn!'))
app.get('/sum', (c) => {
    const url = new URL(c.req.url);
    const params = new URLSearchParams(url.search);
    const a = parseFloat(params.get('a') || '0');
    const b = parseFloat(params.get('b') || '0');
    const sum = a + b;
    return c.text(`Sum: ${sum}`);
})

export default {
    port: 80,
    fetch: app.fetch,
} 
