## Sumário / Table of Contents

- [Sobre](#sobre)
- [Instalação](#instalação)
- [Testes](#testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Conceitos DDD](#conceitos-ddd)
- [Funcionalidades](#funcionalidades)
- [About](#about)
- [Installation](#installation)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [DDD Concepts](#ddd-concepts)
- [Features](#features)

---

## Sobre

Este projeto demonstra os princípios de DDD (Domain-driven Design) usando Node.js e TypeScript. Ele implementa entidades, casos de uso, repositórios, value objects e eventos de domínio para modelar um fórum de perguntas e respostas.

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

- `src/`: Código principal do domínio, incluindo entidades, value objects, casos de uso, repositórios, eventos e erros.
- `test/`: Repositórios em memória, fábricas e utilitários para testes automatizados.
- `core/`: Tipos base, utilitários, eventos de domínio e erros compartilhados.
- `domain/`: Subdomínios como `forum` e `notification`, organizados em camadas de aplicação e entidades.

### Exemplo arvore de arquivos

```
├── 📁 src/
│   ├── 📁 core/
│   │   ├── 📁 entities/
│   │   │   ├── 📄 base-entity-example.ts
│   │   ├── 📁 errors/
│   │   │   ├── 📁 errors/
│   │   │   │   ├── 📄 error.example.ts
│   │   │   └── 📄 use-case-interface-error.example.ts
│   │   ├── 📁 events/
│   │   │   ├── 📄 domain-event.ts
│   │   │   ├── 📄 domain-events.spec.ts
│   │   │   ├── 📄 domain-events.ts
│   │   │   └── 📄 event-handler.ts
│   │   ├── 📁 repositories/
│   │   │   └── 📄 pagination-params-example.ts
│   │   ├── 📁 types/
│   │   │   └── 📄 optional-example.ts
│   │   ├── 📄 either.spec.ts
│   │   └── 📄 either.ts
│   └── 📁 domain/
│       ├── 📁 forum/
│       │    ├── 📁 application/
│       │    │   ├── 📁 repositories/
│       │    │   │   ├── 📄 repository-example.ts
│       │    │   └── 📁 use-cases/
│       │    │       ├── 📄 use-case-example.ts
│       │    └── 📁 enterprise/
│       │        └── 📁 entities/
│       │            ├── 📁 value-objects/
│       │            │   ├── 📄 value-object-example.ts
│       │            ├── 📄 entity-example.ts
│       │       └── 📁 events/
│       │           ├── 📄 event-example.ts
│       └── 📁 notification/
│           ├── 📁 application/
│           │   ├── 📁 repositories/
│           │   │   └── 📄 repository-example.ts
│           │   ├── 📁 subscribers/
│           │   │   ├── 📄 on-subscriber-example.spec.ts
│           │   └── 📁 use-case/
│           │       ├── 📄 use-case-example.ts
│           └── 📁 enterprise/
│               └── 📁 entities/
│                   └── 📄 entity-example.ts
├── 📁 test/
│   ├── 📁 factories/
│   │   ├── 📄 make-example.ts
│   ├── 📁 repositories/
│   │   ├── 📄 in-memory-example-repository.ts
│   └── 📁 utils/
│       └── 📄 utils-example.ts
├── 📄 package.json
```

## Conceitos DDD

- **Entidades**: Objetos com identidade única (ex: Pergunta, Resposta, Comentário)
- **Value Objects**: Objetos de valor sem identidade (ex: Slug)
- **Repositórios**: Abstraem acesso a dados
- **Casos de Uso**: Lógica de negócio central (ex: criar, editar, buscar perguntas/respostas)
- **Agregados**: Agrupam entidades relacionadas
- **Eventos de Domínio**: Reações a mudanças importantes (ex: notificação ao criar resposta)

## Funcionalidades

- Criação, edição e remoção de perguntas, respostas e comentários
- Busca de perguntas recentes com paginação
- Manipulação de anexos em perguntas e respostas
- Notificações automáticas via eventos de domínio
- Repositórios em memória para testes
- Cobertura de testes automatizados para todos os casos de uso
- Value Object para Slug de perguntas
- Lista observada (WatchedList) para controle de anexos


---

## About

This project demonstrates DDD (Domain-driven Design) principles using Node.js and TypeScript. It implements entities, use cases, repositories, value objects, and domain events to model a Q&A forum.

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

- `src/`: Main domain code, including entities, value objects, use cases, repositories, events, and errors.
- `test/`: In-memory repositories, factories, and utilities for automated testing.
- `core/`: Base types, utilities, domain events, and shared errors.
- `domain/`: Subdomains such as `forum` and `notification`, organized into application layers and entities.

### Example file tree

```
├── 📁 src/
│   ├── 📁 core/
│   │   ├── 📁 entities/
│   │   │   ├── 📄 base-entity-example.ts
│   │   ├── 📁 errors/
│   │   │   ├── 📁 errors/
│   │   │   │   ├── 📄 error.example.ts
│   │   │   └── 📄 use-case-interface-error.example.ts
│   │   ├── 📁 events/
│   │   │   ├── 📄 domain-event.ts
│   │   │   ├── 📄 domain-events.spec.ts
│   │   │   ├── 📄 domain-events.ts
│   │   │   └── 📄 event-handler.ts
│   │   ├── 📁 repositories/
│   │   │   └── 📄 pagination-params-example.ts
│   │   ├── 📁 types/
│   │   │   └── 📄 optional-example.ts
│   │   ├── 📄 either.spec.ts
│   │   └── 📄 either.ts
│   └── 📁 domain/
│       ├── 📁 forum/
│       │    ├── 📁 application/
│       │    │   ├── 📁 repositories/
│       │    │   │   ├── 📄 repository-example.ts
│       │    │   └── 📁 use-cases/
│       │    │       ├── 📄 use-case-example.ts
│       │    └── 📁 enterprise/
│       │        └── 📁 entities/
│       │            ├── 📁 value-objects/
│       │            │   ├── 📄 value-object-example.ts
│       │            ├── 📄 entity-example.ts
│       │       └── 📁 events/
│       │           ├── 📄 event-example.ts
│       └── 📁 notification/
│           ├── 📁 application/
│           │   ├── 📁 repositories/
│           │   │   └── 📄 repository-example.ts
│           │   ├── 📁 subscribers/
│           │   │   ├── 📄 on-subscriber-example.spec.ts
│           │   └── 📁 use-case/
│           │       ├── 📄 use-case-example.ts
│           └── 📁 enterprise/
│               └── 📁 entities/
│                   └── 📄 entity-example.ts
├── 📁 test/
│   ├── 📁 factories/
│   │   ├── 📄 make-example.ts
│   ├── 📁 repositories/
│   │   ├── 📄 in-memory-example-repository.ts
│   └── 📁 utils/
│       └── 📄 utils-example.ts
├── 📄 package.json
```

## DDD Concepts

- **Entities**: Objects with unique identity (e.g., Question, Answer, Comment)
- **Value Objects**: Value objects without identity (e.g., Slug)
- **Repositories**: Abstract data access
- **Use Cases**: Core business logic (e.g., create, edit, fetch questions/answers)
- **Aggregates**: Group related entities
- **Domain Events**: React to important changes (e.g., notification on answer creation)

## Features

- Create, edit, and delete questions, answers, and comments
- Fetch recent questions with pagination
- Manage attachments for questions and answers
- Automatic notifications via domain events
- In-memory repositories for testing
- Automated test coverage for all use cases
- Value Object for question Slug
- WatchedList for attachment management