import Nav from "../components/nav"
import Navdown from "../components/navdown"
import axios, { Axios } from "axios"
import { upload } from "@testing-library/user-event/dist/upload"
import { useEffect, useRef, useState } from "react"

const Create =()=>{
    const [image,setimage]=useState("")
    const [preview,setpreview]=useState("")
    const fileInputRef=useRef();
    useEffect(()=>{
        if(image ){
            const reader=new FileReader()
            reader.onloadend=()=>{
                setpreview(reader.result)
            }
            reader.readAsDataURL(image);
        }else{
            setpreview(null);
        }
    },
    [image])
    return(
            <div>
                <Nav/>
                <div className="create">
                    <p id="create-p">Create Your Item</p>
                        <div className="create-img">
                        {preview ? (
                        <img id="img-image" src={preview}/>):(
                                <input type="file" id="create-img-file" ref={fileInputRef} accept="image/*" onChange={(event)=>{
                                    let file=event.target.files[0];
                                    if(file && file.type.substr(0,5)==="image"){
                                        setimage(file);
                                    }else{
                                        setimage(null);
                                    }
                                }}/>
                            )}
                        </div>
                    <div className="create-lebel">
                            <p id="data-name">Name</p>
                            <input type="text" id="data-name-in" name="name"/>
                            
                            <p id="data-name">Details</p>
                            <input type="text" id="data-name-in" name="name"/>
    
                            <p id="data-name">Price</p>
                            <input type="Number" id="data-name-in" name="name"/>
    
                            <p id="catagory">Catagory</p>
                                <select id="data-select">
                                    <option value="0">Home & Garden</option>
                                    <option value="1">Other</option>
                                    <option value="3">Electronics</option>
                                </select><br/>
                    </div>
                    <button id="btn-submit"type="Submit">Save</button>
                </div>
                <Navdown/>
            </div>);
}
export default Create;