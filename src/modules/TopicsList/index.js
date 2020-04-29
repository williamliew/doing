import React from 'react';

const TopicsList  = ({list, removeTopic}) => {
        const showList = list.map(item => {
            return (
                <li key={item}>
                    <button title={"Remove " + item} onClick={() => {removeTopic(item)}}>
                        <span className="visuallyhidden">Remove </span>{item}</button>
                </li>
            );
        });

        return (
            <ul className="topic-list">
                { showList }
            </ul>
        );
}

export default TopicsList;