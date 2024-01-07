import React from "react";
import css from './pagination.module.css'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={css.pagination}>
            
            {Array.from({ length: totalPages }, (_, index) => (
                <button className={css.numButton}
                    key={index}
                    disabled={index + 1 === currentPage}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};