import React , {useState , useRef, useEffect} from "react";
import Alert from "./Alert";
import Items from "./items";
import "./Todo.css"
const Todo = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [editid, setEditId] = useState(null)
    const [alert,setAlert] = useState({show:false,msg:"",type:""});
    const [isedit , setISEdit] = useState(false);

    const inp = useRef()
useEffect(() => {
 inp.current.focus()
},[])
    const handelSubmit = (e) => {
        
        e.preventDefault();
        if(!name){
         showAlert(true,"no value in input","danger")
        }else if (name && isedit){
         setList(list.map(item => {
          if(item.id === editid){
              return {title : name}
          }
          return item
            
         }))
         setName('');
         setEditId(null)
         setISEdit(false)
         showAlert(true,"item is edited","success")
        }else{
            showAlert(true,"item successfuly add to the List","success")
            const newItem = {id : Math.floor(Math.random() * 100) , title : name}
            setList([...list,newItem]);
            setName("");
        }
       
    }

    const showAlert = (show = false,msg ="",type= "") => {
      setAlert({show,msg,type})
    }
    
    const editItem = (id) => {
        let specificItem = list.find(item => item.id === id)
        setName(specificItem.title)
        setISEdit(true);
        setEditId(id);
        inp.current.focus();
    }
    const RemoveItem = (id) => {
        showAlert(true,"item removed","danger")
        let remove = list.filter(item => item.id !== id)
        setList(remove)
    }

    const clearAll = () => {
        showAlert(true,"all items is removed","danger");
        setList([])
        setName('')
        setISEdit(false)
    }
   return (
       <main className="Todo">
           <div className="Todo-Content">
           <form onSubmit={handelSubmit}>
           <div className="alert-content">
           {alert.show && <Alert list={list} alert={alert} removeAlert={showAlert}/>}
           </div>
           <h1 className="center ">To Do List</h1>
           <input type="text" 
           placeholder="Type Todo"
           value={name}
           ref={inp}
           onChange={(e) => setName(e.target.value)}
           />
           <button type="submit" className="Add" 
            >
               {isedit ? "Edit" : "Add"}
           </button>
           </form>
           {list.length > 0 &&
           <>
           <Items List= {list} editItem={editItem} removeItem={RemoveItem}/>
           <button className="btn-clear" onClick={() => clearAll()}>Clear All</button>
           </>
           }
           </div>
       </main>
    )
}

export default Todo