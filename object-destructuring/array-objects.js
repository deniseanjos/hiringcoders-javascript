const filmes = [
    { 
        id: 1,
        titulo: "Dilema das Redes",
        genero: "Documentario",
        duracao: 120
    },
    { 
        id: 2,
        titulo: "US",
        genero: "Terror",
        duracao: 100
    },
    { 
        id: 3,
        titulo: "Corra",
        genero: "Suspense",
        duracao: 180
    }
]

const [{id,titulo, genero, duracao}] = filmes

console.log(titulo)

filmes.map(filme => console.log(filme.genero))