# Application Architecture | 17/6/2021

## Processo Arquitetural

### 1. Análise
1. Analisar todos os requisitos
2. Separar e priorizar os requisitos arquiteturais
3. Detalhar o suficiente para que possam ser testados (criar cenários)

### 2. Síntese
1. Selecionar as táticas arquiteturais para cada requisito
2. Selecionar os estilos/padrões/ferramentas para cada tática arquitetural (POC)

### 3. Avaliação
1. Selecionar a arquitetura candidata

## Cenário Geral de desempenho
- Fonte de estímulos: Pode vir de dentro e de fora do sistema, como: usuários, sistemas externos, componentes internos, etc.

- Estímulo: Eventos que chegam ao sistema de forma periódica, esporádica ou aleatória.
** Todo estímulo tem uma resposta.

- Artefato: Mede o desempenho do sistema como um todo, de um módulo, componente, etc.

- Ambiente: Avalia o desempenho em modo normal e em modo sobrecarregado.

## Latêcia
- Tempo entre a chegada de um evento e a geração de uma resposta. 

## Vazão - throughput
- Quantidade de eventos processados dentro de um período de tempo.

# Desempenho
"É o nível ao qual o sistema consegue atender aos requisitos de vazão e latência em números de transações por tempo ou tempo para executar apenas uma transação".

** Paralelismo

---

O evento chega e duas situações podem ocorrer:
- O sistema processa ou o processo é bloqueado/espera.

## Melhora de desempenho
- Melhorar a infraestrutura.
- Adicionar mais máquina no ambiente.
- Mexer no código ou arquitetura.

## Tipos de persistência
- Memória cache
    - Rápido acesso, leitura e escrita porém volátil.

- Bancos de dados
    - Informações estruturadas e persistentes.

- Sistemas de arquivos
    - Não estruturado, imagens, binários.

- NoSQL
    - Não estruturados que escalam.

- Filas de mensagem
    - Checkpoints de processamentos, escalabilidade, tolerante a falhas, assincronismo.

## Tipos de aplicações
- Server side
    - UI rendering (ASP Net MVC, Django, Spring MVC)
    - Services (HTTP/SOAP/JSON)

- Client Side
    - SPA (Angular, React, Vue.js, Flutter)
    - Desktop app (Electron)
    - Mobile app (Kotlin, Swift, Ionic, Flutter)

- Backend
    - Batch
    - Online

- Arquitetura orientada a eventos
    - Serveless (Cloud Native)


## Táticas arquitteturais - Desempenho
- Controle de recurso: realizar bom uso dos recursos que possuo.
- Gestão de recurso: aumentar a quantidade de recursos, o que gera mais gasto. 

## Bibliografia coletada
