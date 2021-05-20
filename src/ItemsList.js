import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import items from './items.js'

function ItemsList() {
    var [page, setPage] = useState(0)
    var [cart, setCart] = useState([])

    var pages = items

    function nextPage() {
        if (page == pages.length-1) {
            return;
        }

        setPage(page + 1)
    }

    useEffect(() => {
        setCart( JSON.parse(localStorage.getItem('cart')) )
    }, [])

    function addToCart(producto) {
        var exists = cart.find(p => p.id == producto.id)

        if (exists) {
            var tmp = cart.map(function (p) {
                if (p.id == producto.id) {
                    p.qty++
                    p.stock--
                }
    
                return p
            })
        } else {
            var tmp = cart.concat({
                ...producto,
                qty : 1,
                stock : producto.stock-1
            })
        }

        setCart(tmp)

        localStorage.setItem('cart', JSON.stringify(tmp))
    }
 
    return (
        <>
            <p>Mostrando pagina {page+1} de {pages.length}</p>

            <div className="App-items-list">
                {
                    pages[page].map(function (producto) {
                        return <div className="App-item" key={producto.id}>
                            <img src={producto.image} />

                            <Link to={`productos/${producto.id}`}>{producto.name}</Link>

                            <button onClick={() => addToCart(producto)}>Agregar</button>
                        </div>
                    })
                }
            </div>

            <button onClick={() => setPage(0)}>
                Primera pagina
            </button>

            <button className="App-items-pagination" onClick={nextPage}>
                Ver mas productos
            </button>

            <button onClick={() => setPage(pages.length-1)}>
                Ultima pagina
            </button>
        </>
    )
}

export default ItemsList