import items from './items.js'
import {useState} from 'react'

// hooks

function ItemsList() {
    var [page, setPage] = useState(0)

    var pages = items

    function nextPage() {
        if (page == pages.length-1) {
            return;
        }

        setPage(page + 1)
    }

    return (
        <>
            <p>Mostrando pagina {page+1} de {pages.length}</p>

            <div className="App-items-list">
                {
                    pages[page].map(function (dato) {
                        return <div className="App-item" key={dato.id}>
                        <img src={dato.image} />
                        {dato.title}
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