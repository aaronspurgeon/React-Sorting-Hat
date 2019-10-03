import React, { Component } from 'react';
import data from '../data';
import QuestionsList from './QuestionsList';


class Questions extends Component {
    constructor() {
        super();
        this.state = {
            data: data
        }
    }
    render() {
        return (
            <div className='questionsDiv'>
                {this.state.data.map(item => (
                    <QuestionsList
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        )
    }
}

export default Questions;