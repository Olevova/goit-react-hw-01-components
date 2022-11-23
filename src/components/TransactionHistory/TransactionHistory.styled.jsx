import styled from "@emotion/styled";

export const TransactTable = styled.table`
    width:600px;
    table-layout: fixed;
    text-align: center;
    border-collapse: collapse;
    border: 1px solid black;
    margin: 30px;
    box-shadow: 0px 0px 5px 5px #6b6b6bbf;
    border: 1px solid rgb(124, 124, 124);
`

export const TransactHead = styled.thead`
    background-color: #0BD3A5;
    padding: 10px;
    border: 1px solid rgb(124, 124, 124);
`
export const TransactBody = styled.tr`
    &:nth-child(even) {
    background-color:#9EEFDC;
    }
`