function Criarpartida(grupo, time1, time2, horario){
    return `
        <li>
            <img src="./assets/${time1}.svg" alt="${time1}" />
            <strong>${horario}</strong>
            <img src="./assets/${time2}.svg" alt="${time2}" />
        </li>
            <h3>${time1}<span>${time2}</h3>
    `
}

let delay = -0.3;
function criarCard(data, dia, partida){
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${data} <span>${dia}</span></h2>
            <ul>
                ${partida}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML =
    criarCard("20/11", "DOMINGO", 
    Criarpartida("GRUPOA","Catar","Equador","13:00") )+ 

    criarCard("21/11", "SEGUNDA", 
    Criarpartida("GRUPOB","Inglaterra","Irã","10:00") +
    Criarpartida("GRUPOA","Senegal","Holanda","13:00") +
    Criarpartida("GRUPOB","EUA","Gales","16:00") )+

    criarCard("22/11", "TERÇA", 
    Criarpartida("GRUPOC","Argentina","Arabia Saudita","07:00") +
    Criarpartida("GRUPOD","Dinamarca","Tunisia","10:00") +
    Criarpartida("GRUPOC","Mexico","Polonia","13:00") + 
    Criarpartida("GRUPOD","França","Australia","16:00"))+

    criarCard("23/11", "QUARTA", 
    Criarpartida("GRUPOF","Marrocos","Croacia","07:00") +
    Criarpartida("GRUPOE","Alemanha","Japão","10:00") +
    Criarpartida("GRUPOE","Espanha","Costa Rica","13:00") +
    Criarpartida("GRUPOF","Belgica","Canada","16:00") )+

    criarCard("24/11", "QUINTA", 
    Criarpartida("GRUPOG","Suiça","Camarões","07:00") +
    Criarpartida("GRUPOH","Uruguai","Coreia do Sul","10:00") +
    Criarpartida("GRUPOH","Portugal","Gana","13:00") +
    Criarpartida("GRUPOG","Brasil","Servia","16:00") )+

    criarCard("25/11", "SEXTA", 
    Criarpartida("GRUPOB","Gales","Irã","07:00") +
    Criarpartida("GRUPOA","Catar","Senegal","10:00") +
    Criarpartida("GRUPOA","Holanda","Equador","13:00") +
    Criarpartida("GRUPOB","Inglaterra","EUA","16:00") )+

    criarCard("26/11", "SABADO", 
    Criarpartida("GRUPOD","Tunisia","Australia","07:00") +
    Criarpartida("GRUPOC","Polonia","Arabia Saudita","10:00") +
    Criarpartida("GRUPOD","França","Dinamarca","13:00") +
    Criarpartida("GRUPOC","Argentina","Mexico","16:00") )+

    criarCard("27/11", "DOMINGO", 
    Criarpartida("GRUPOE","Japão","Costa Rica","07:00") +
    Criarpartida("GRUPOF","Belgica","Marrocos","10:00") +
    Criarpartida("GRUPOF","Croacia","Canada","13:00") +
    Criarpartida("GRUPOE","Espanha","Alemanha","16:00") )+

    criarCard("28/11", "SEGUNDA", 
    Criarpartida("GRUPOG","Camarões","Servia","07:00") +
    Criarpartida("GRUPOH","Coreia do Sul","Gana","10:00") +
    Criarpartida("GRUPOG","Brasil","Suiça","13:00") +
    Criarpartida("GRUPOH","Portugal","Uruguai","16:00") )+

    criarCard("29/11", "TERÇA", 
    Criarpartida("GRUPOA","Equador","Senegal","07:00") +
    Criarpartida("GRUPOA","Holanda","Catar","10:00") +
    Criarpartida("GRUPOB","Irã","EUA","13:00") +
    Criarpartida("GRUPOB","Gales","Inglaterra","16:00") )+

    criarCard("30/11", "QUARTA", 
    Criarpartida("GRUPOD","Tunisia","França","07:00") +
    Criarpartida("GRUPOD","Australia","Dinamarca","10:00") +
    Criarpartida("GRUPOC","Polonia","Argentina","13:00") +
    Criarpartida("GRUPOC","Arabia Saudita","Mexico","16:00") )+

    criarCard("01/12", "QUARTA", 
    Criarpartida("GRUPOF","Croacia","Belgica","07:00") +
    Criarpartida("GRUPOF","Canada","Marrocos","10:00") +
    Criarpartida("GRUPOE","Japão","Espanha","13:00") +
    Criarpartida("GRUPOE","Costa Rica","Alemanha","16:00") )+

    criarCard("01/12", "QUARTA", 
    Criarpartida("GRUPOH","Coreia do Sul","Portugal","07:00") +
    Criarpartida("GRUPOH","Gana","Uruguai","10:00") +
    Criarpartida("GRUPOG","Servia","Suiça","13:00") +
    Criarpartida("GRUPOG","Camarões","Brasil","16:00") )