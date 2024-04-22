document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM totalmente carregado.");

  const avaliacaoBtn = document.getElementById("avaliacao-btn");

  if (avaliacaoBtn) {
    avaliacaoBtn.addEventListener("click", function(event) {
      event.preventDefault();
      console.log("Botão de avaliação clicado.");

      const targetId = this.getAttribute('data-target');

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  } else {
    console.error("Botão de avaliação não encontrado.");
  }

  // Função para animar elementos quando eles entram na visualização
  function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); 
        observer.unobserve(entry.target);
      }
    });
  }

  // Cria um observer de interseção para animar elementos ao rolar a página
  const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.5 });

  const elements = document.querySelectorAll('.animacao');

  elements.forEach(element => {
    observer.observe(element);
  });

  // Função para verificar o scroll e animar elementos que estão visíveis
  function checkScroll() {
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight * 0.75) {
        element.classList.add('visible');
      }
    });
  }

  // Adiciona um event listener para o evento de scroll da janela
  window.addEventListener('scroll', checkScroll);

  checkScroll();

  // Adiciona rolagem suave para os links do menu
  const links = document.querySelectorAll('nav ul a');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Obtém o ID da seção alvo a partir do atributo 'href' do link
      const targetId = this.getAttribute('href').substring(1);

      // Seleciona o elemento alvo com o ID obtido e rola suavemente até ele
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Adiciona rolagem suave ao clicar no botão "Marque uma avaliação"
  if (avaliacaoBtn) {
    avaliacaoBtn.addEventListener("click", function(event) {
      event.preventDefault();

      // Rola suavemente até a seção de contato
      const contatoSection = document.getElementById("contato");

      if (contatoSection) {
        contatoSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Função para animar elementos ao rolar a página
  function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const children = target.querySelectorAll('.animacao');
        
        children.forEach(child => {
          child.classList.add('visible');
        });

        observer.unobserve(target);
      }
    });
  }

  // Seleciona todas as seções que devem ser observadas para animação ao rolar
  const sections = document.querySelectorAll('section');

  // Registra cada seção no observer para animação ao rolar
  sections.forEach(section => {
    observer.observe(section);
  });
});
