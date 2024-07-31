
# Projeto Hinova

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e customizável.
- **Vite**: Ferramenta de build e desenvolvimento rápida para projetos web.

## Estrutura do Projeto

### Arquivo Principal
- **App.tsx**: Arquivo principal da aplicação, responsável por importar e renderizar as seções principais da single page.

### Seções da Página
As seções da página foram componentizadas para manter o código mais organizado e fácil de entender. Elas estão localizadas na pasta `src/pages`:
- **ServicesList**: Lista de serviços oferecidos.
- **Contact**: Seção de contato.
- **Apps**: Seção apresentando aplicativos ou ferramentas.
- **Presentation**: Seção de apresentação principal.

### Componentes
Os componentes reutilizáveis da aplicação estão localizados na pasta `src/components`:
- **Carousel**: Componente de carrossel para exibição de conteúdo em slides.
- **IndicationForm**: Formulário para indicação de amigos.
- **WorkShops**: Componente para listagem de workshops ou oficinas.

### Hooks
Os hooks personalizados estão na pasta `src/hooks`:
- **alertContext.tsx**: Context API que controla os alertas de notificação do site.
- **useOnScreen.tsx**: Hook que detecta em que parte da tela o usuário está.

### Serviços
A pasta `src/services` contém os arquivos de serviços, que utilizam a biblioteca `axios` para realizar requisições HTTP:
- **api.ts**: Configuração e funções genéricas para chamadas API.
- **IndicationService.tsx**: Serviço responsável por enviar dados de indicação de amigos.
- **WorkshopsService.tsx**: Serviço responsável por obter dados de workshops ou oficinas.

## Como Rodar o Projeto

1. **Clone o repositório**:
   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. **Instale as dependências**:
   ```
   npm install
   ```
3. **Inicie o servidor de desenvolvimento**:
   ```
   npm run dev
   ```
4. **Acesse a aplicação**: A aplicação estará disponível em `http://localhost:3000`.

## Contribuições
Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request para melhorias ou correções.

## Licença
Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
