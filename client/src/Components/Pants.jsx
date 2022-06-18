import { useEffect, useState } from 'react'

const Pants = () => {
    const [image, setImage] = useState()
    const shirts = ['./closet-assets/pants_1.jpg', './closet-assets/pants_2.jpg', './closet-assets/pants_3.jpg']
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

export default Pants