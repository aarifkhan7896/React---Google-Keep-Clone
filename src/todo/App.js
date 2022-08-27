import React,{useState} from 'react'
import "./sass/App.scss"

const Today = () =>{
    const d = new Date().toLocaleDateString();
    return <>
        <p>{d}</p>
    </>
}
const Now = () =>{
    let t = new Date().toLocaleTimeString();
    const [date, setDate] = useState(t);

    const updateFun = () =>{
        let t = new Date().toLocaleTimeString();
        setDate(t)
    }
    setInterval(updateFun,1000);

    return <p>{date}</p>
}

const App = () =>{
    const [input, setInput] = useState("");
    const [show, setShow] = useState([]);
    const changeVal = (e) =>{
        setInput(e.target.value)
    }
    const btnClicked = () =>{
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
            <p className='notes'>{props.val}</p>
            <span  className='deleteBtn' onClick={deleteBtn}>Delete</span>
        </div>
        </>
    }
    return <>
        <div className='mainDiv'>
            <div className='heading'>
                <p>ToDo</p>
                </div>
            <div className='today'>
                <Today/>
                <Now/>
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <div>
                    <input type="text"
                    value={input} onChange={changeVal} placeholder='enter a todo' />
                    <button onClick={btnClicked}>Add</button>
                </div>
            </form>
            {show.map((e,index)=>{
                return <Card val={e} key={index} id={index} />
            })}
        </div>
    </>
}
export default App;