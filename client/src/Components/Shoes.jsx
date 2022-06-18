import { useEffect, useState } from 'react'

const Shoes = () => {
    const [image, setImage] = useState()
    const shoes = ['./closet-assets/shoes_1.jpg', './closet-assets/shoes_2.jpg', './closet-assets/shoes_3.jpg']
    const getNumber = () => {
        const ranNum = Math.floor(Math.random() * shoes.length)
        setImage(shoes[ranNum])
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

export default Shoes