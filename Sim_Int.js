alert("Digita el valor del descuento sin el signo (%) porcentaje");
let productos=[Marca,Precio,Cantidad,Millas]
const Lexus = new productos ("Lexus","95000","02","10000")
const Ferrari=  new productos ("Ferrari","95000","02","10000")
const Mclaren = new productos ("Mclaren","95000","02","10000")
const Lamborghini = new productos ("Lamborghini","95000","02","10000")
const Jaguar = new productos ("Jaguar","95000","02","10000")
const Maserati = new productos ("Maserati","95000","02","10000")
let bucle = 0;
let oferta = prompt("Digite el porcentaje que le desea hacer a cada uno de los productos que elija")
while (bucle <1) {
    let producto = parseInt(prompt("digite el numero correspondiente a el producto que desea consultar:\n 1-Lexus = 95000\n 2-Ferrari= 120000\n 3-Mclaren = 50000\n 4-Lamborghini = 250000\n 5-Jaguar = 45000\n 6-Maserati = 250000\n 7-Terminar" ));
    if (oferta <=99) {
        if (producto > 0 && producto <= 7) {
            switch (producto) {
                case 1:
                    console.log(Lexus);
                    porcentaje = (Lexus.Precio * oferta)/100;
                    descuento = Lexus.Precio - porcentaje;
                    alert(`precio normal ${Lexus.Precio} con descuento de ${porcentaje} valdria ${descuento} `)
                    break;

                case 2:
                    console.log(Ferrari);
                    porcentaje = (Ferrari.Precio * oferta)/100;
                    descuento = Ferrari.Precio - porcentaje;
                    alert(`precio normal ${camiseta} con descuento de ${porcentaje} valdria ${descuento} `)
                    break;

                case 3:
                    porcentaje = (Mclaren.Precio * oferta)/100;
                    descuento = Mclaren.Precio - porcentaje;
                    alert(`precio normal ${Mclaren.Precio} con descuento de ${porcentaje} valdria ${descuento} `)
                    break;

                case 4:
                    porcentaje = (Lamborghini.Precio * oferta)/100;
                    descuento = Lamborghini.Precio - porcentaje;
                    alert(`precio normal ${Lamborghini.Precio} con descuento de ${porcentaje} valdria ${descuento} `)
                    break;
                case 5:
                    porcentaje = (Jaguar.Precio * oferta)/100;
                    descuento = Jaguar.Precio - porcentaje;
                    alert(`precio normal ${Jaguar.Precio} con descuento de ${porcentaje} valdria ${descuento} `)
                    break;
                case 6:
                    porcentaje = (Maserati.Precio * oferta)/100;
                    descuento = Maserati.Precio - porcentaje;
                    alert(`precio normal ${Maserati.Precio} con descuento de ${porcentaje} valdria ${descuento} `)
                    break;
                
            
                default:
                    alert("El numero de producto no esta registrado")
                    break;
            }
        } 
    } else {
        alert("al no ingresar porcentaje tu producto tiene el valor asignado por la tienda")
    }
}
