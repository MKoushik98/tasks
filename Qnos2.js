import React, { useState } from "react";
export default function Qnos2() {
    const [fruits, setFruits] = useState([
        { f1: "Mango", isshow: false },
        { f1: "Apple", isshow: false },
        { f1: "Gruva", isshow: false }])
    // const {fruit1,fruit2,fruit3}=fruits
    const check = (e) => {
        fruits.isshow = true
    }
    return (
        <>
            <ul>
                {
                    fruits.map((each) => {
                        if (each.isshow = true) {
                           <button>Delete</button>
                        }
                          return <li>{each.f1}
                            <input type="checkbox" id="ids" name="name" onClick={check}></input>
                           
                            
                        </li>
                          
                    })
                }
            </ul>
        </>
    )
}