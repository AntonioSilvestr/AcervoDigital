const livros =  [
    {
      titulo: "Dom Quixote",
      autor: "Miguel de Cervantes",
      ano_publicacao: 1605,
      capa: "https://m.media-amazon.com/images/I/51XULadddlL.jpg"
    },
    {
      titulo: "Cem Anos de Solidão",
      autor: "Gabriel García Márquez",
      ano_publicacao: 1967,
      capa: "https://m.media-amazon.com/images/I/81SQPrWU7SL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      ano_publicacao: 1949,
      capa: "https://m.media-amazon.com/images/I/819js3EQwbL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      titulo: "O Grande Gatsby",
      autor: "F. Scott Fitzgerald",
      ano_publicacao: 1925,
      capa: "https://m.media-amazon.com/images/I/51yuop3TiDL.jpg"
    },
    {
      titulo: "Orgulho e Preconceito",
      autor: "Jane Austen",
      ano_publicacao: 1813,
      capa: "https://m.media-amazon.com/images/I/51kS4++58fL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      titulo: "Moby Dick",
      autor: "Herman Melville",
      ano_publicacao: 1851,
      capa: "https://m.media-amazon.com/images/I/81R91ODA9DL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      titulo: "Ulisses",
      autor: "James Joyce",
      ano_publicacao: 1922,
      capa: "https://m.media-amazon.com/images/I/61-5X0w8VqS._AC_UF1000,1000_QL80_.jpg"
    },
    {
      titulo: "Crime e Castigo",
      autor: "Fyodor Dostoyevsky",
      ano_publicacao: 1866,
      capa: "https://m.media-amazon.com/images/I/916WkSH4cGL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      ano_publicacao: 1954,
      capa: "https://m.media-amazon.com/images/I/71ZLavBjpRL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      titulo: "Em Busca do Tempo Perdido",
      autor: "Marcel Proust",
      ano_publicacao: 1913,
      capa: "https://m.media-amazon.com/images/I/815tEnat8QL._AC_UF1000,1000_QL80_.jpg"
    }
]
function mostrarLivros(){
    const caixaLivros = document.getElementById('livros')
    for (let i = 0; i<livros.length; i++){
        const livro = document.createElement('div')
        livro.classList.add("livro")

        const livroImagem = document.createElement('img')
        livroImagem.classList.add("livro-imagem")
        livroImagem.setAttribute('src', `${livros[i].capa}`)
        livro.appendChild(livroImagem)

        const livroTitulo = document.createElement("h1")
        livroTitulo.classList.add("livro-titulo")
        livroTitulo.textContent = `${livros[i].titulo}`
        livro.appendChild(livroTitulo)

        const livroAutor = document.createElement("h1")
        livroAutor.classList.add("livro-autor")
        livroAutor.textContent = `${livros[i].autor}`
        livro.appendChild(livroAutor)

        caixaLivros.appendChild(livro)
    }
    
}
mostrarLivros()