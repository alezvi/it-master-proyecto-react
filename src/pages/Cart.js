import { useEffect, useState } from "react"

function Cart() {
    var [total, setTotal] = useState(0)

    var [productos, setProductos] = useState([
        {
            id : 1,
            name : "Celular Samsung S21",
            price : 199999,
            stock : 34, // total de unidades disponibles - no cambia
            qty : 1,
            subtotal : "",
        },
        {
            id : 2,
            name : "Televisor LG 43'",
            price : 45000,
            stock : 3,
            qty : 1,
            subtotal : "",
        },
        {
            id : 3,
            name : "Macbook 2020 i9",
            price : 250000,
            stock : 1,
            qty : 1,
            subtotal : "",
        }
    ])

    function decrement(item) {
        var changed = productos.map(function (producto) {
            if (producto.id == item.id) {
                producto.qty = producto.qty-1
                producto.stock = producto.stock+1
                producto.subtotal = producto.qty * producto.price
            }

            return producto
        })

        setProductos(changed)
        updateTotal()
    }

    function increment(item) {
        if (item.stock == 0) {
            return;
        }
        
        var changed = productos.map(function (producto) {
            if (producto.id == item.id) {
                producto.qty = producto.qty+1
                producto.stock = producto.stock-1
                producto.subtotal = producto.qty * producto.price
            }

            return producto
        })

        setProductos(changed)
        updateTotal()
    }

    function updateTotal() {
        let total = productos.reduce(function (a, b) {
            return a + (b.price * b.qty)
        }, 0)

        setTotal(total)
    }

    useEffect(() => {
        updateTotal()
    })

    return (
        <div>

            {
                productos.map(function (producto) {
                    return (
                        <div key={producto.id}>
                            <div>{producto.name}</div>
                            <div>Disponibles : {producto.stock - producto.qty} - Cantidad: {producto.qty} - Precio unitario: $ {producto.price} - Subtotal: $ {producto.subtotal}</div>
                            <div>
                                <button disabled={producto.qty == 0} onClick={() => decrement(producto)}>-</button>
                                <span>{producto.qty}</span>
                                <button disabled={producto.qty == producto.stock} onClick={() => increment(producto)}>+</button>
                            </div>
                        </div>
                    )
                })
            }

            <div>
                <h3>Total a pagar: $ {total}</h3>
            </div>

        </div>
    )
}

export default Cart
