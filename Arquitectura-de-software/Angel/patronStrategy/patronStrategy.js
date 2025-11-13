// Estrategia (formas diferentes de recibir el pedido)
class ComerEnRestaurante {
    procesar(){
        console.log("Platillo servido en 15 min en restaurante");
    }
}
class PedidoDomicilio {
    procesar(){
        console.log("Un repartidor entrega en 40 minutos");
    }
}
class ParaLlevar {
    procesar(){
        console.log("Tu pedido estará listo para recoger en mostrador en 20 minutos");
    }
}

// La app usa la estrategia
class AppComida {
    constructor(estrategia){
        this.estrategia = estrategia;
    }
    setEstrategia(estrategia){
        this.estrategia = estrategia;
    }
    procesarPedido(){
        this.estrategia.procesar();
    }
}

// Ejemplo de cómo usar
const enRestaurante = new ComerEnRestaurante();
const domicilio = new PedidoDomicilio();
const llevar = new ParaLlevar();

const app = new AppComida(enRestaurante);
app.procesarPedido();

app.setEstrategia(domicilio);
app.procesarPedido();

app.setEstrategia(llevar);
app.procesarPedido();
