import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 50%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
  text-transform: uppercase;
  color: #fff;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ecf1f4;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;
