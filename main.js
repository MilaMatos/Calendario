function Criarpartida(time1, time2, horario){
    return `
        <li>
            <img src="./assets/${time1}.svg" />
            <strong>${horario}</strong>
            <img src="./assets/${time2}.svg" />
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
    Criarpartida("qat","ecu","13:00")
    )}
    ${criarCard("21/11", "SEGUNDA", 
    Criarpartida("ing","ira","10:00") +
    Criarpartida("sen","hol","13:00") +
    Criarpartida("EUA","paG","16:00")
    )}
    ${criarCard("22/11", "TERÇA", 
    Criarpartida("arg","arS","07:00") +
    Criarpartida("din","tun","10:00") +
    Criarpartida("mex","pol","13:00") + 
    Criarpartida("fra","aus","16:00")
    )}
    ${criarCard("23/11", "QUARTA", 
    Criarpartida("mar","cro","07:00") +
    Criarpartida("ale","jap","10:00") +
    Criarpartida("esp","coR","13:00") +
    Criarpartida("bel","can","16:00") 
    )}
    ${criarCard("24/11", "QUINTA", 
    Criarpartida("sui","cam","07:00") +
    Criarpartida("uru","coS","10:00") +
    Criarpartida("por","gan","13:00") +
    Criarpartida("bra","ser","16:00") 
    )}
    ${criarCard("25/11", "SEXTA", 
    Criarpartida("paG","ira","07:00") +
    Criarpartida("qat","sen","10:00") +
    Criarpartida("hol","ecu","13:00") +
    Criarpartida("ing","EUA","16:00") 
    )}
    ${criarCard("26/11", "SABADO", 
    Criarpartida("tun","aus","07:00") +
    Criarpartida("pol","arS","10:00") +
    Criarpartida("fra","din","13:00") +
    Criarpartida("arg","mex","16:00") 
    )}

    ${criarCard("27/11", "DOMINGO", 
    Criarpartida("jap","coR","07:00") +
    Criarpartida("bel","mar","10:00") +
    Criarpartida("cro","can","13:00") +
    Criarpartida("esp","ale","16:00") 
    )}
    ${criarCard("28/11", "SEGUNDA", 
    Criarpartida("cam","ser","07:00") +
    Criarpartida("coS","gan","10:00") +
    Criarpartida("bra","sui","13:00") +
    Criarpartida("por","uru","16:00") 
    )}
    ${criarCard("29/11", "TERÇA", 
    Criarpartida("ecu","sen","07:00") +
    Criarpartida("hol","qat","10:00") +
    Criarpartida("ira","EUA","13:00") +
    Criarpartida("paG","ing","16:00") 
    )}
    ${criarCard("30/11", "QUARTA", 
    Criarpartida("tun","fra","07:00") +
    Criarpartida("aus","din","10:00") +
    Criarpartida("pol","arg","13:00") +
    Criarpartida("arS","mex","16:00") 
    )}

    ${criarCard("01/12", "QUARTA", 
    Criarpartida("cro","bel","07:00") +
    Criarpartida("can","mar","10:00") +
    Criarpartida("jap","esp","13:00") +
    Criarpartida("coR","ale","16:00") 
    )}
    ${criarCard("01/12", "QUARTA", 
    Criarpartida("coS","por","07:00") +
    Criarpartida("gan","uru","10:00") +
    Criarpartida("ser","sui","13:00") +
    Criarpartida("cam","bra","16:00") 
    )}
    </main>
`