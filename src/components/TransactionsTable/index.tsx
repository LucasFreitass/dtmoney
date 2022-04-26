import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";

export function TransactionsTable () {

    useEffect(() => {
        api.get('transactions') // get pois esou buscando uma informação
        .then(response => console.log(response.data)) 
        // usando o axios, api.get e tal não precisa mais converter as informações pra json toda vez, ele já faz isso.
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimenmto</td>
                        <td>20/02/2021</td>

                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>Casa</td>
                        <td>27/02/2021</td>

                    </tr>
                </tbody>
            </table>
        </Container>
    );
}