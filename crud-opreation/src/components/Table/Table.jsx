import React from "react";

function Table({ columns, data, onEdit, onDelete }) {
  return (
    <table className="table">
      <thead className="table-header">
        <tr>
          {columns.map((column) => (
            <th key={column.field}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.id} className="table-row">
              {columns.map((column) => (
                <td key={column.field}>
                  {column.render ? column.render(item) : item[column.field]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr className="No-Data">
            <td colSpan={columns.length}>No Records found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
