import React, { useState } from 'react';
import Answers from './AnswersList';

const QuestionsList = (props) => {
    console.log(props)
    const [answers, setAnswer] = useState(props.item.answers)
    return (
        <div>
            <h2>{props.item.question}</h2>
            {answers.map(item => (
                <Answers key={item.id} item={item} />
            ))}
        </div>
    )
}

export default QuestionsList;