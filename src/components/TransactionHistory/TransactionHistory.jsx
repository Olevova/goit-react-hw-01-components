import PropTypes from "prop-types";
import {TransactTable, TransactHead, TransactBody} from "./TransactionHistory.styled"


export const TransactionHistory = ({items}) => {
    return <TransactTable>
        <TransactHead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </TransactHead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return <TransactBody key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </TransactBody>
            })}
        </tbody>
    </TransactTable>
}

TransactionHistory.protoType = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired

}