import React from 'react';
import TopicCard from './TopicCard';

const topics = [{ title: 'Football' },
{ title: 'Cooking' },
{ title: 'Coding' }];

class TopicList extends React.Component {
    render () {
        return (
            <div id='TopicList'>
                <h3 className='title is-3'>All Topics</h3>
                {topics.map(topic => <TopicCard title={topic.title} key={topic.title} />)}
            </div>
        );
    }
}

export default TopicList;