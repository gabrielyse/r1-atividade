const personagem = {
    nome: "Peter Parker",
    codinome: 'Homem Aranha',
    poder: 'Dna de Aranha',
    armaSecundaria: 'Lançadores de teia',
    velocidade: 90, // 0 a 100
    forca: 70, // 0 a 100
    resistencia: 60, // 0 a 100
    descricao: function () {
        return "Nome do personagem: " + this.nome; + '\n'
        + 'Codinome do personagem' + this.codinome; + '\n'
        + 'Poder do personagem' + this.poder; + '\n'
        + 'Arma Secundaria do personagem' + this.armaSecundaria; + '\n'
        + 'Velocidade do personagem' + this.velocidade; + '\n'
        + 'Força do personagem' + this.forca; + '\n'
        + 'Resistencia do personagem' + this.resistencia

    }

}
const personagem2 = {
    nome: 'quandale dingle',
    codinome: 'Hulk',
    poder: 'Radiação Gama',
    armasecundaria: 'nenhuma',
    velocidade: 70,
    forca: 100,
    resistencia: 60,
    descricao: function () {
        return 'Nome do personagem:' + this.nome; + '\n'
        + 'Codinome do personagem' + this.codinome; + '\n'
        + 'Poder do personagem' + this.poder; + '\n'
        + 'Arma secundaria do personagem' + this.armasecundaria; + '\n'
        + 'Velocidade do personagem' + this.velocidade; + '\n'
        + 'Força do personagem' + this.forca; + '\n'
        + 'Resistencia do personagem' + this.resistencia + '\n'

    }
}
const personagem3 = {
    nome: 'Steve Rogers',
    codinome: 'Capitão America',
    poder: 'Super Soro',
    armasecundaria: 'Escudo',
    velocidade: 80,
    forca: 90,
    resistencia: 70,
    descricao: function () {
        return 'Nome do personagem:' + this.nome;
        + 'codinome do personagem' + this.codinome; + '\n'
        + 'Poder do personagem' + this.poder; + '\n'
        + 'Arma secundaria do personagem' + this.armasecundaria; + '\n'
        + 'Velocidade do personagem' + this.velocidade; + '\n'
        + 'Força do personagem' + this.forca; + '\n'
        + 'Resistencia do personagem' + this.resistencia + '\n'

    }
}
const personagem4 = {
    nome: 'Natasha Romanoff',
    codinome: 'Viúva Negra',
    poder: 'habilidades de combate avançadas',
    armasecundaria: 'bastões de choque',
    velocidade: 85,
    forca: 55,
    resistencia: 65,
    descricao: function () {
        return 'Nome do personagem:' + this.nome; + '\n'
        + 'Codinome do personagem' + this.codinome; + '\n'
        + 'Poder do personagem' + this.poder; + '\n'
        + 'Arma secundaria do personagem' + this.armasecundaria; + '\n'
        + 'Velocidade do personagem' + this.velocidade; + '\n'
        + 'Força do personagem' + this.forca; + '\n'
        + 'Resistencia do personagem' + this.resistencia + '\n'
    }
}

const personagem5 = {
    nome: 'Thor',
    codinome: 'Thor',
    poder: 'Força Asgardiana',
    armasecundaria: 'mjolnir',
    velocidade: 88,
    forca: 100,
    resistencia: 95,
    descricao: function () {
        return 'Nome do personagem:' + this.nome; + '\n'
        + 'Codinome do personagem' + this.codinome; + '\n'
        + 'Poder do personagem' + this.poder; + '\n'
        + 'Arma secundaria do personagem' + this.armasecundaria; + '\n'
        + 'Velocidade do personagem' + this.velocidade; + '\n'
        + 'Força do personagem' + this.forca; + '\n'
        + 'Resistencia do personagem' + this.resistencia + '\n'
    }
}

const personagem6 = {
    nome: 'Tony Stark',
    codinome: 'Homem de Ferro',
    poder: 'tecnologia',
    armasecundaria: 'nao possui',
    velocidade: 75,
    forca: 80,
    resistencia: 75,
    descricao: function () {
        return 'Nome do personagem:' + this.nome; + '\n'
        + 'Codinome do personagem' + this.codinome; + '\n'
        + 'Poder do personagem' + this.poder; + '\n'
        + 'Arma secundaria do personagem' + this.armasecundaria; + '\n'
        + 'Velocidade do personagem' + this.velocidade; + '\n'
        + 'Força do personagem' + this.forca; + '\n'
        + 'Resistencia do personagem' + this.resistencia + '\n'
    }
}

const personagens = [personagem, personagem2, personagem3, personagem4, personagem5, personagem6]

function podertotal(p){
    return p.velocidade + p.forca + p.resistencia;
}
let maisforte = personagens[0]
for (let i = 1; i < personagens.length; i++) {
    if (podertotal(personagens[i]) > podertotal(maisforte)) {
        maisforte = personagens[i];
    }
}
console.log('O personagem mais forte é ' + maisforte.codinome + ' com poder total de ' + podertotal(maisforte) + '!');