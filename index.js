const dolarTuristaVenta = document.getElementById("tur-venta")
const dolarblueCompra = document.getElementById("bl-compra")
const dolarblueVenta = document.getElementById("bl-venta")
const fecha = document.getElementById("fecha")

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(res => res.json())
    .then(data => data.map(i => i.casa))
    .then(dolares => {
        var obj1 = dolares.find(i => i.nombre == "Dolar Blue")
        var obj2 = dolares.find(i => i.nombre == "Dolar turista")

        dolarblueCompra.innerText = "$ " + parseInt(obj1.compra)
        dolarblueVenta.innerText = "$ " + parseInt(obj1.venta)
        dolarTuristaVenta.innerText = "$ " + parseInt(obj2.venta)
    })

fecha.innerText = moment().format('L LT');