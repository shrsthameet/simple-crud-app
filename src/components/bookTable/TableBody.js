import React from "react";
import {ActionButton} from "./index";

const TableBody = ({allBookLists}) => {
    return (
        <tbody>
        {allBookLists.map(item => (
            <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.categories}</td>
                <td>{item.edition}</td>
                <td>
                    <ActionButton id={item.id}/>
                </td>
            </tr>
        ))}
        </tbody>
    );
};

export default TableBody;