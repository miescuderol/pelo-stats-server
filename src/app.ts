import { createServer } from './utils/server';

createServer()
.then(server => {
    server.listen(3001, () => {
        console.info('Listening on http://localhost:3001');
    });
})
.catch(err => {
    console.error(`Error: ${err}`);
});