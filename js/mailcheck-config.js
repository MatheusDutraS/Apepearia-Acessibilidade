var campoEmail = document.querySelector('#email');
var sugestao = document.querySelector('#sugestao');

var domains = ['gmail.com', 'aol.com', 'outlook.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org", "br"];

campoEmail.addEventListener('blur', function() {
    Mailcheck.run({
        email: campoEmail.value,
        domains: domains,                      
        topLevelDomains: topLevelDomains,      
        secondLevelDomains: secondLevelDomains,
        suggested: function(suggestion) {
            sugestao.style.display = 'inline-block';
            sugestao.innerHTML = `Você quis dizer: <a class="sugestao--erro">${suggestion.full}</a> ?`;
            sugestao.parentNode.classList.add('contatoCampo--erro');
            campoEmail.classList.add('contatoCampo--validouErro');
            sugestao.setAttribute('tabindex', '0');
            sugestao.setAttribute('role', 'alert');
            // sugestao.focus()
        }
    })
});

sugestao.addEventListener('click', () => {
    campoEmail.value = document.querySelector('.sugestao--erro').textContent
    sugestao.innerHTML = ""
    sugestao.style.display = 'none'
    sugestao.parentNode.classList.remove('contatoCampo--erro');
    sugestao.parentNode.classList.add('contatoCampo--sucesso');
    campoEmail.classList.remove('contatoCampo--validouErro');
    campoEmail.classList.add('contatoCampo--validouFoi');
})