import { useEffect, useState } from 'react'

const Shirts = () => {
    const [image, setImage] = useState()
    const shirts = ['./closet-assets/shirt_3.jpg', './closet-assets/shirt_2.png', './closet-assets/shirt_1.png','./closet-assets/shirt_4.jpg']
    const getNumber = () => {
        const ranNum = Math.floor(Math.random() * shirts.length)
        setImage(shirts[ranNum])
    }
    useEffect(() => {
        getNumber()

    })



    return (
        <>
            <div className='article'>
                <button onClick={getNumber}>Tops</button>
                <img src={require(`${image}`)} alt='' />
            </div>
        </>
    )
}

export default Shirts