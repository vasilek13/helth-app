import React from 'react';
import './clientTable.scss';
import pencil from '../../../img/pencil.svg';
import trash from '../../../../img/trash.svg';

const ClientTable = (props) => {
    return (
        <tr className={`clientTable ${props.border}`}>
            <td>
                <img src={props.foto} alt='' />
                <p>{props.name}</p>
            </td>
            <td>
                <p>{props.email}</p>
            </td>
            <td>
                <p>{props.date}</p>
            </td>
            <td>
                {props.visit}
            </td>
            <td>
                {props.doctor}
            </td>
            <td>
                {props.conditions}
            </td>
            <td>
                <img src={pencil} alt='' />
                <img src={trash} alt='' />
            </td>
        </tr>
    );
};

export default ClientTable;