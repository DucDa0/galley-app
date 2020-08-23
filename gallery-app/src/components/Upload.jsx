import React,{useState} from 'react'
import { ProgressBar } from './ProgressBar';

export const Upload = () => {
    const [file,setFile]=useState(null);
    const [error, setError]=useState(null);
    const types=['image/png','image/jpeg','image/jpg'];
    const changeHandler=(e)=>{
        let selected=e.target.files[0];
        if(selected &&types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Plz select and image file (png or jpeg/jpg)');
        }
    }
    return (
        <form>
            <label htmlFor="select">
                <input  id="select" type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="ouput">
                {
                    error && <div className="error">{error}</div>
                }
                {
                    file && <div>{file.name}</div>
                }
                {
                    file && <ProgressBar file={file} setFile={setFile}/>
                }
            </div>
        </form>
    )
}
