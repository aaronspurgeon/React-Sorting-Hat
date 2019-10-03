import React, { useState } from 'react';
import data from '../data';
import QuestionsList from './QuestionsList';


function Questions()  {
    const [data, setData] = useState({data})
        return (
            <div className='questionsDiv'>
                {data.map(item => (
                    <QuestionsList
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        )
    
}

export default Questions;