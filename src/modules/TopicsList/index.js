import React from 'react';

const TopicsList  = ({list}) => {
        const showList = list.map(item => {
            return (
                <li key={item}>{item}</li>
            );
        });

        return (
            <ul className="topic-list">
                { showList }
            </ul>
        );
}

export default TopicsList;