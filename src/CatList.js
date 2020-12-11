import React from 'react'

const CatList = (props) => {
    const cats = props.catPics
    console.log('CATLIST!', cats)
    return (
        <div>
            {cats.map((cat, index) => <img key={index} src={cat.url} alt={cat.source_url}></img>)}
        </div>
    )
}

export default CatList;