---
description: Diretrizes obrigatórias para o Projeto Evolutivo (Foco AV1 e Base) da disciplina de Front-end Frameworks.
applyTo: '**/*'
---

# Diretrizes do Projeto Evolutivo (Base e Fase AV1)

Ao gerar ou refatorar código para este projeto, deves seguir estritamente as regras aplicáveis à fase inicial (AV1) e à base estrutural do projeto, conforme o roteiro oficial da disciplina:

## 1. Stack Tecnológica Base (Obrigatória em todo o projeto)
*   **Core:** Utiliza estritamente **React** (apenas componentes funcionais), **JavaScript** e **Vite**.
*   **Navegação:** Utiliza exclusivamente o **React Router** para todas as rotas e navegação da aplicação[cite: 8].
*   **Estilos:** Utiliza CSS tradicional e/ou CSS Modules[cite: 8].
*   **Proibições:** Não utilizes TypeScript, Redux, Zustand (ou bibliotecas similares de estado global global), Axios nem Next.js[cite: 8].

## 2. Padrões de Componentes e Organização
*   **Comunicação e Estado:** Utiliza sempre `props` para passar dados entre componentes e `useState` para qualquer estado mutável interno[cite: 8].
*   **Renderização de Listas:** Todas as iterações de listas na interface devem possuir chaves (`keys`) únicas e estáveis[cite: 8].
*   **Eventos:** Todos os eventos do utilizador (cliques, inputs, etc.) devem ser geridos por funções[cite: 8].
*   **Reutilização e Separação:** Cria componentes pequenos e reutilizáveis, mantendo uma separação clara entre a interface e a lógica.
*   **Estrutura de Pastas Obrigatória:** O projeto deve estar organizado utilizando a seguinte árvore de diretórios base: `src/components/`, `src/pages/`, `src/data/`, `src/styles/` e `src/hooks/`[cite: 8].

## 3. Gestão de Dados e Persistência (Regras da AV1)
*   **NÃO utilizes consumo de APIs nesta fase.**[cite: 8]
*   **Dados Iniciais:** Os dados de partida para o domínio da aplicação devem ser lidos a partir de um ficheiro local (preferencialmente em `src/data/dados.json` ou `.js`)[cite: 8].
*   **Persistência (AV1):** Utiliza estritamente a API `localStorage` do browser para gravar de forma persistente qualquer alteração efetuada nos dados principais (ex: adicionar novo item, editar, favoritar)[cite: 8].

## 4. Requisitos Mínimos de Interface e Navegação
*   **Rotas:** O projeto deve conter um mínimo de **3 rotas úteis**, sendo obrigatório ter páginas como: inicial, detalhe de um item e uma operação de edição/criação[cite: 8].
*   **Formulários:** Deves implementar pelo menos um formulário com campos controlados pelo React (controlled components) e que inclua validação dos campos obrigatórios[cite: 8].
*   **Mensagens e Feedback:** A interface deve renderizar mensagens condicionais visíveis para estados como: listas vazias, resultados de validação e confirmação após a execução de ações (sucesso/erro)[cite: 8].
*   **Funcionalidades de Lista:** A listagem principal de dados deve ter capacidades de **busca, filtro ou ordenação**, e as mesmas devem ser geridas por estados do React[cite: 8].
*   **Comentários:** Lembra-te de aplicar a regra previamente definida de comentar o código (a cada ~10 linhas, máximo 4 linhas de explicação).

