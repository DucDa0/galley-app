import React from 'react'
import useFireStore from '../hooks/useFireStore';
import {motion} from 'framer-motion'

export const ImageGrid = ({setSelectedImg}) => {

    const {docs}=useFireStore('images');

    return (
        <div className="img-grid">
            {docs && docs.map(doc=>(
                <motion.div key={doc.id} className="img-wrap"
               
                layout
                whileHover={{opacity: 1}}
                 onClick={()=>setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1}}
                    />
                </motion.div>
            ))}
            {/* <div className="action">
                <span className="select-img">Select</span>
                <span className="select-img delete">Delete</span>
            </div> */}
        </div>
    )
}
