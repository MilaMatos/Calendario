function Criarpartida(grupo, time1, time2, horario){
    return `
        <li>
            <img src="./assets/${grupo}/${time1}.svg">
            <strong>${horario}</strong>
            <img src="./assets/${grupo}/${time2}.svg" alt="">
        </li> 
    `
}

function criarCard(data, dia, partida){
    return `
        <div class="card">
            <h2>${data} <span>${dia}</span></h2>
            <ul>
                ${partida}
            </ul>
        </div>
    `
}

document.querySelector('#app').innerHTML = `
    <header id="logo">
        <img src="./assets/logo.svg" alt="NLW LOGO">
    </header>
    <h1>FASE DE GRUPOS</h1>
    <main id="cards">
    ${criarCard("20/11", "DOMINGO", 
    Criarpartida("GRUPOA","qat","ecu","13:00")
    )}
    ${criarCard("21/11", "SEGUNDA", 
    Criarpartida("GRUPOB","ing","ira","10:00") +
    Criarpartida("GRUPOA","sen","hol","13:00") +
    Criarpartida("GRUPOB","EUA","paG","16:00")
    )}
    ${criarCard("22/11", "TERÇA", 
    Criarpartida("GRUPOC","arg","arS","07:00") +
    Criarpartida("GRUPOD","din","tun","10:00") +
    Criarpartida("GRUPOC","mex","pol","13:00") + 
    Criarpartida("GRUPOD","fra","aus","16:00")
    )}
    ${criarCard("23/11", "QUARTA", 
    Criarpartida("GRUPOF","mar","cro","07:00") +
    Criarpartida("GRUPOE","ale","jap","10:00") +
    Criarpartida("GRUPOE","esp","coR","13:00") +
    Criarpartida("GRUPOF","bel","can","16:00") 
    )}
    ${criarCard("24/11", "QUINTA", 
    Criarpartida("GRUPOG","sui","cam","07:00") +
    Criarpartida("GRUPOH","uru","coS","10:00") +
    Criarpartida("GRUPOH","por","gan","13:00") +
    Criarpartida("GRUPOG","bra","ser","16:00") 
    )}
    ${criarCard("25/11", "SEXTA", 
    Criarpartida("GRUPOB","paG","ira","07:00") +
    Criarpartida("GRUPOA","qat","sen","10:00") +
    Criarpartida("GRUPOA","hol","ecu","13:00") +
    Criarpartida("GRUPOB","ing","EUA","16:00") 
    )}
    ${criarCard("26/11", "SABADO", 
    Criarpartida("GRUPOD","tun","aus","07:00") +
    Criarpartida("GRUPOC","pol","arS","10:00") +
    Criarpartida("GRUPOD","fra","din","13:00") +
    Criarpartida("GRUPOC","arg","mex","16:00") 
    )}

    ${criarCard("27/11", "DOMINGO", 
    Criarpartida("GRUPOE","jap","coR","07:00") +
    Criarpartida("GRUPOF","bel","mar","10:00") +
    Criarpartida("GRUPOF","cro","can","13:00") +
    Criarpartida("GRUPOE","esp","ale","16:00") 
    )}
    ${criarCard("28/11", "SEGUNDA", 
    Criarpartida("GRUPOG","cam","ser","07:00") +
    Criarpartida("GRUPOH","coS","gan","10:00") +
    Criarpartida("GRUPOG","bra","sui","13:00") +
    Criarpartida("GRUPOH","por","uru","16:00") 
    )}
    ${criarCard("29/11", "TERÇA", 
    Criarpartida("GRUPOA","ecu","sen","07:00") +
    Criarpartida("GRUPOA","hol","qat","10:00") +
    Criarpartida("GRUPOB","ira","EUA","13:00") +
    Criarpartida("GRUPOB","paG","ing","16:00") 
    )}
    ${criarCard("30/11", "QUARTA", 
    Criarpartida("GRUPOD","tun","fra","07:00") +
    Criarpartida("GRUPOD","aus","din","10:00") +
    Criarpartida("GRUPOC","pol","arg","13:00") +
    Criarpartida("GRUPOC","arS","mex","16:00") 
    )}

    ${criarCard("01/12", "QUARTA", 
    Criarpartida("GRUPOF","cro","bel","07:00") +
    Criarpartida("GRUPOF","can","mar","10:00") +
    Criarpartida("GRUPOE","jap","esp","13:00") +
    Criarpartida("GRUPOE","coR","ale","16:00") 
    )}
    ${criarCard("01/12", "QUARTA", 
    Criarpartida("GRUPOH","coS","por","07:00") +
    Criarpartida("GRUPOH","gan","uru","10:00") +
    Criarpartida("GRUPOG","ser","sui","13:00") +
    Criarpartida("GRUPOG","cam","bra","16:00") 
    )}
    </main>
`