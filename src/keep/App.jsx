import React,{useState} from 'react'
import "./sass/App.scss"

const App = () =>{
    const [input, setInput] = useState("");
    const [show, setShow] = useState([]);

    const changeVal = (e)=>{
        const {name,value}=e.target;
        setInput((e)=>({
            ...e,[name]:value
        }))
    }
    
    const addBtn = () =>{
        setShow((e)=>{
            return [...e,input]
        })
        setInput("");
    }
    const Card = (props) =>{

    const deleteBtn = () =>{
        setShow((e)=>{
            return e.filter((e,index)=>{
                return index != props.id
            })
        })
    }
        return <>
            <div className='card'>
                <div>
                <h2>{props.title}</h2>
                <p>{props.note}</p>
                </div>
                <div>
                <button onClick={deleteBtn}><i class="fas fa-trash" title='Delete'></i></button>
                </div>
            </div>
        </>
    }
    return <>
    <header>
        <p>Keep</p>
    </header>
        <div className='mainDiv'>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text" placeholder='Title'
                name='title' value={input.title || ""} onChange={changeVal} />
                <br />
                <input type="text" placeholder='Take a note...'
                name='note' value={input.note || ""} onChange={changeVal} />
                <br />
                <button onClick={addBtn}>Add</button>
            </form>
        </div>
        <div className='mainCard'>
        {show.map((e,index)=>{
            return <Card title={e.title} note={e.note} key={index} id={index} />
            })}
        </div>
    </>
}
export default App;