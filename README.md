## Sumário / Table of Contents

- [Sobre](#sobre)
- [Instalação](#instalação)
- [Testes](#testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Conceitos DDD](#conceitos-ddd)
- [About](#about)
- [Installation](#installation)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [DDD Concepts](#ddd-concepts)

---

## Sobre

Este projeto demonstra os princípios de DDD (Domain-driven Design) usando Node.js e TypeScript. Ele implementa entidades, casos de uso, repositórios e value objects para modelar um fórum de perguntas e respostas.

## Instalação

```bash
npm install
```

## Testes

```bash
npm run test
npm run test:watch
```

## Estrutura do Projeto

- `src/`: Código principal do domínio e casos de uso
- `test/`: Repositórios e fábricas em memória para testes
- `core/`: Utilitários e tipos base

### Exemplo arvore de arquivos

```
├── 📁 src/
│   ├── 📁 core/
│   │   ├── 📁 entities/
│   │   │   ├── 📄 base-entity-example.ts
│   │   ├── 📁 repositories/
│   │   │   └── 📄 pagination-params-example.ts
│   │   └── 📁 types/
│   │       └── 📄 optional-example.ts
│   └── 📁 domain/
│       └── 📁 forum/
│           ├── 📁 application/
│           │   ├── 📁 repositories/
│           │   │   ├── 📄 repository-example.ts
│           │   └── 📁 use-cases/
│           │       ├── 📄 use-case-example.ts
│           └── 📁 enterprise/
│               └── 📁 entities/
│                   ├── 📁 value-objects/
│                   │   ├── 📄 value-object-example.ts
│                   ├── 📄 entity-example.ts
├── 📁 test/
│   ├── 📁 factories/
│   │   ├── 📄 make-example.ts
│   └── 📁 repositories/
│       ├── 📄 in-memory-example-repository.ts
├── 📄 package.json
```

## Conceitos DDD

- **Entidades**: Representam objetos com identidade única (ex: Pergunta, Resposta)
- **Value Objects**: Objetos de valor sem identidade (ex: Slug)
- **Repositórios**: Abstraem acesso a dados
- **Casos de Uso**: Lógica de negócio central
- **Agregados**: Agrupam entidades relacionadas
- **Eventos de Domínio**: Reações a mudanças importantes

---

## About

This project demonstrates DDD (Domain-driven Design) principles using Node.js and TypeScript. It implements entities, use cases, repositories, and value objects to model a Q&A forum.

## Installation

```bash
npm install
```

## Testing

```bash
npm run test
npm run test:watch
```

## Project Structure

- `src/`: Main domain code and use cases
- `test/`: In-memory repositories and factories for testing
- `core/`: Utilities and base types

### Example file tree

```
├── 📁 src/
│   ├── 📁 core/
│   │   ├── 📁 entities/
│   │   │   ├── 📄 base-entity-example.ts
│   │   ├── 📁 repositories/
│   │   │   └── 📄 pagination-params-example.ts
│   │   └── 📁 types/
│   │       └── 📄 optional-example.ts
│   └── 📁 domain/
│       └── 📁 forum/
│           ├── 📁 application/
│           │   ├── 📁 repositories/
│           │   │   ├── 📄 repository-example.ts
│           │   └── 📁 use-cases/
│           │       ├── 📄 use-case-example.ts
│           └── 📁 enterprise/
│               └── 📁 entities/
│                   ├── 📁 value-objects/
│                   │   ├── 📄 value-object-example.ts
│                   ├── 📄 entity-example.ts
├── 📁 test/
│   ├── 📁 factories/
│   │   ├── 📄 make-example.ts
│   └── 📁 repositories/
│       ├── 📄 in-memory-example-repository.ts
├── 📄 package.json
```

## DDD Concepts

- **Entities**: Objects with unique identity (e.g., Question, Answer)
- **Value Objects**: Value objects without identity (e.g., Slug)
- **Repositories**: Abstract data access
- **Use Cases**: Core business logic
- **Aggregates**: Group related entities
- **Domain Events**: React to important changes
