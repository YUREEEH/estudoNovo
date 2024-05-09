    let fome = prompt("você está com fome? (sim/nao)");
    let dinheiro = prompt ("você está com dinheiro? (sim/nao)");
    let restaurante = prompt ("O restaurante está aberto? (sim/nao)");

    if (fome === "nao" || dinheiro === "nao"){
        console.log("Hoje o jantar será em casa");
    }else if(fome = "sim" && dinheiro === "sim"){
        if(restaurante === "sim"){
            console.log("Hoje você vai no seu restaurante preferido");
        }else{
            console.log("Peça um delivery");
        }
    }