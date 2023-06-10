const app = require('./server')

const port = 3001;

app.listen(port, ()=>{console.log(`Rodando na porta http://localhost:${port}`)});