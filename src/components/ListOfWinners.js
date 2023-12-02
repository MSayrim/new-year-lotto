import React from 'react';
import ResultList from './ResultList';

const ListOfWinners = () => {
    const results = [10, 11, 12, 123, 1232, 24123, 12312, 321, 3123, 123];

    return (
        <div>
            <ResultList results={results} />
        </div>
    );
};

export default ListOfWinners;
