import { useEffect, useState } from 'react'

const Shoes = () => {
    const [image, setImage] = useState()
    const shirts = ['./closet-assets/shoes_1.jpg', './closet-assets/shoes_2.jpg', './closet-assets/shoes_3.jpg']
    const getNumber = () => {
        const ranNum = Math.floor(Math.random() * shirts.length)
        setImage(shirts[ranNum])
    }
    useEffect((
        getNumber
    ))



    return (
        <>
            <div className='article'>
                <button onClick={getNumber}>Tops</button>
                <img src={require(`${image}`)} alt='' />
            </div>
        </>
    )
}

export default Shoes