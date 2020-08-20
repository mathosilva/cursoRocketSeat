var iptUsuario = document.getElementById('iptGit')
var buscar = document.getElementById('buscar')

var repos = document.getElementById('repos')

buscar.onclick = ()=>{
    repos.innerHTML = 'Carregando...'
    setTimeout(listaRepos, 2000)
}

function listaRepos(){
    var usuario = iptUsuario.value
    axios.get(`https://api.github.com/users/${usuario}/repos`)

    .then(function(response){
        repos.innerHTML = ''
        var tabela = document.createElement('table')
        repos.appendChild(tabela)
        tabela.innerHTML = '<tr><th>ID</th><th>Repo</th><th>link</th></tr>'
        for(var value of response.data){

            var novaLinha = document.createElement('tr')
            novaLinha.innerHTML = `<td>${value.id}</td><td>${value.name}</td><td><a href="${value.html_url}">${value.html_url}</a></td>` 
            // var novoId = document.createElement('td')
            // var idTexto = document.createTextNode(value.id)
            // var novoNome = document.createElement('td')
            // var nomeTexto = document.createTextNode(value.name)
            // var novoLink = document.createElement('td')
            // var linkTexto = document.createTextNode(value.html_url)
            // var link = document.createElement('a')
            // link.setAttribute('href', value.html_url)

            tabela.appendChild(novaLinha)
            // novaLinha.appendChild(novoId)
            // novoId.appendChild(idTexto)
            // novaLinha.appendChild(novoNome)
            // novoNome.appendChild(nomeTexto)
            // novaLinha.appendChild(novoLink)
            // novoLink.appendChild(link)
            // link.appendChild(linkTexto)
            // console.log(value.html_url)
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


   


