import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App }  from './App';

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {  // quando ouver uma requisão do tipo get, para a rota transactions eu retorno, devolvo alguma coisa.
            return [
                { // supondo que ele retorne um vetor, contendo esses dados: 
                    id: 1,
                    title: 'Transaction 1',
                    amount: 400,
                    type: 'deposit',
                    category: 'Food',
                    createdAt: new Date ()
                }
                
            ]
        })
    }
})


const root = ReactDOM.createRoot(
document.getElementById('root') as HTMLElement
);
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);