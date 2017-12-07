import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }

]

class Lesson extends Component {
    render () {
        const { lesson } = this.props
        return (
            <div onClick={() => console.log(`${this.props.index} - ${lesson.title}`)}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        )
    }
}

class LessonsList extends Component {
    render () {
        return (
            <div>{lessons.map((lesson, i) => {
                return <Lesson key={i} index={i} lesson={lesson} />
            })}</div>
        )
    }
}

ReactDOM.render(
    <LessonsList />,
    document.getElementById('root')
)