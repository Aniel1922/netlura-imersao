// Capturar cliques nos perfis e armazenar no localStorage
document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', function(event) {
        event.preventDefault(); // Previne navegação padrão
        
        // Extrai o nome do perfil (do figcaption)
        const nome = this.querySelector('figcaption').textContent;
        
        // Extrai a URL da imagem
        const imagem = this.querySelector('img').src;
        
        // Armazena no localStorage
        localStorage.setItem('perfilAtivo', JSON.stringify({
            nome: nome,
            imagem: imagem,
            dataSelecao: new Date().toISOString()
        }));
        
        // Navega para o catálogo
        window.location.href = this.href;
    });
});
