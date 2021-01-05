import React , {useEffect, useState} from "react";
import './Tab.css';
import Loading from "./Loading";
import { FaEthereum } from 'react-icons/fa';
const url = "https://course-api.com/react-tabs-project";


const Tabs = () => {
 const [loading,setLoading] = useState(true);
 const [data , setData] = useState();
 const [value , setValue] = useState(0);

 const FetchData =  async () => {
     const myData = await fetch(url);
     const response = await myData.json();
     setData(response)
     setLoading(false)
 }

 useEffect(() => {
   FetchData();
 },[])
 
if(loading){
    return (
        <main>
            <Loading />
        </main>
    )
}
 const {company,title,dates,duties} = data[value];
    return(
     <main>
        <h1 className="page-title title">Tabs</h1>
        <div className="Tabs">
            <div className="jops-List">
                    {
                        data.map((res,index) => {
                            const {company} = res
                            return(
                                <button key={index} 
                                className={`${index === value ? "activate":""}`}
                                onClick={() => setValue(index)}>
                                {company}</button>
                            )
                        })
                    }
            </div>
            <section>
                <h2>{title}</h2>
                <span>{company}</span>
                <span>{dates}</span>
                {
                    duties.map((res,index) => {
                        return (
                            
                            <p key={index}>{res}
                            <FaEthereum className="duti-icon"/>
                            </p>
                        )
                    })
                }
            </section>
        </div>
     </main>
    )
}

export default Tabs;