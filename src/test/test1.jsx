import React, { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import './index.css'
import FilmItem from "./text2"

export const GlobalContext  = React.createContext() //创建context对象

export default function App (){
    const [filmList, setfilmList] = useState([])
    const [info, setinfo] = useState("")

    useEffect(() => {
        axios.get(`/test.json`).then(res=>{
            // console.log(res.data.data.films)
            setfilmList(res.data.data.films)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            info:info,
            changeInfo:(value)=>{
                setinfo(value)
            }
        }}>
            <div>
                {/* {this.state.info} */}
                {
                    filmList.map(item=>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>    
                    )
                }


                <FilmDetail ></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}

/*受控组件*/





function FilmDetail(){
    const value = useContext(GlobalContext)
    return <div className="filmdetail">
        detail-{value.info}
    </div>
}

