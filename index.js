const dolarTuristaVenta = document.getElementById("tur-venta")
const dolarblueCompra = document.getElementById("bl-compra")
const dolarblueVenta = document.getElementById("bl-venta")
const fecha=document.getElementById("fecha")

var miUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

fetch(miUrl)
    .then(res => res.json())
    .then(data => {
        var arr = []
        for (let i in data) {
            arr.push(data[i].casa)
        }
        return arr
    })
    .then(dolares => {
        for(let i in dolares){
            if(dolares[i].nombre==="Dolar Blue"){
                dolarblueVenta.innerText="$ "+parseInt(dolares[i].venta)
                dolarblueCompra.innerText="$ "+parseInt(dolares[i].compra)
            }
            if(dolares[i].nombre==="Dolar turista"){
                dolarTuristaVenta.innerText="$ "+parseInt(dolares[i].venta)
            }
        }
    })

var d=new Date()
var dformat=[d.getDate(),d.getMonth()+1].join("/")+" "+[d.getHours(),d.getMinutes()].join(":")

fecha.innerText=dformat