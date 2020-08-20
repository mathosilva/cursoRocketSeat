var iptUsuario = document.getElementById('iptGit')
var buscar = document.getElementById('buscar')

var repos = document.getElementById('repos')

buscar.setAttribute('onclick', `listaRepos()`)

function listaRepos(){
    var usuario = iptUsuario.value
    
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    // response.status

    .then(function(response){
        repos.innerHTML = ''
        
        for(var value of response.data){
            var novoItem = document.createElement('li')
            var itemTexto = document.createTextNode(value.name)
            // var link = document.createElement('a')
            // var repoLink = document.createTextNode('link')
            // link.setAttribute('href', value.html_url)

            repos.appendChild(novoItem)
            novoItem.appendChild(itemTexto)
            // novoItem.appendChild(link)
            // link.appendChild(repoLink)
            console.log(value.name)
        }
        
    })
    .catch(function(error){
        repos.innerHTML = ''
        if(error.response.status === 404){
            // var novoItem = document.createElement('li')
            var itemTexto = document.createTextNode('Usuário não encontrado!')
            repos.appendChild(itemTexto)
            // novoItem.appendChild(itemTexto)
        }
        console.log(error.response.status)
    })
}
