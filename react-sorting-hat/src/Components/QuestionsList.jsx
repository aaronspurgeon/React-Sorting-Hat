import React from 'react';


const QuestionsList = (props) => {

    return (
        <div>
            <h2>{props.item.question}</h2>
            <form>
                {props.item.answers.map(item => {
                    return (
                        <>
                            <input type="checkbox" name={item.id} value={item} />
                            <label htmlFor={item.id}>{item}</label>
                        </>
                    )
                })}
            </form>
        </div>
    )
}

export default QuestionsList;