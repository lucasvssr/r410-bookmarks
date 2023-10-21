import React from "react";

export default function Pagination({pagination, onPageChange})
{
    console.log(pagination);
    const {first, next, previous, last} = pagination;
    const pageClick = (page) => {
        onPageChange(page);
    }

    return <>
        <button onClick={() => pageClick(first)}>First</button>
        <button onClick={() => pageClick(previous)}>Previous</button>
        <button onClick={() => pageClick(next)}>Next</button>
        <button onClick={() => pageClick(last)}>Last</button>
    </>
}