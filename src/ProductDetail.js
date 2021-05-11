import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function ProductDetail() {
    var {id} = useParams()

    var [producto, setProducto] = useState({})

    useEffect(() => {
        // API
        fetch('http://localhost:3001/posts/' + id).then(function (res) {
            return res.json()
        }).then(function (item) {
            setProducto(item)
        })
    }, [])

    return (
        <div>
            <h1>{producto.title}</h1>
            <p>{producto.body}</p>
        </div>
    )
}

export default ProductDetail