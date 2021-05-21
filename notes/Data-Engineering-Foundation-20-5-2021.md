# Data Engineering Foundation | 18/5/2021

## Arquitetura de Big Data
- Big data é um termo popular usado para descrever o crescimento, a disponibilidade e o uso exponencialde informações estruturadas e não estruturadas.

- Big data se apoia na ideia dos 3V's: 
    - Volume: quantidade de dados gerados, transações online e offline, kilobytes ou terabytes, salvos em arquivos. 
    - Velocity: velocidade na geração de dados, gerado em tempo real, dados online e offline e em streams, batch(lote) ou bits. 
    - Variety: estruturado e desestruturado, imagens e vídeos online, geração humana - textos e gerção de máquina - leituras.

### Big data X BI
- Arquitetura Big data:
    - Dados indefinidos (dimensões)
    - o volume e a velocidade dos dados podem impossibilitar o armazenamento prévio.
    - Arquitetura caótica.
    - Pensada para ser escalável.
    - Separação entre processamento batch e tempo real.

    - imagem da arquitetura: https://prnt.sc/136uzhr


- Escalabilidade: qualidade do sistema que consgeue suportar um aumento relativamente elevado de carga sem que isso afete negativamente o seu desempenho.
    - Vertical(Scale Up)
        - Adicionar mais poder de processamento aos servidores existentes.
        - Memória, armazenamento e CPU.
        - Geralmente baseadas em soluções proprietárias.

    - Horizontal(Scale Out)
        - Adicionar mais servidores para aumentar a performance.
        - Possibilidade de usar hardware de baixo custo ou independente da plataforma.
        - Geralmente baseadas em soluções open-source.


- Hadoop: plataforma de processamento distribuído de grandes volumes de dados em cluster de computadores (Projeto Apache).
    - inspirado em uma abordagem inovadora desenvolvida pela Google a problemas de computação distribuída.
    - Aspecto inovador: Processamento local de tarefas sob dados distribuídos previamente entre os nós do cluster (transferência minima dos dados).
    - Escalabilidade: desde um único PC a até centenas de servidores em data center (cada máquina realiza processamento de tarefas e armazenamento de dados).
    - Tolerância a falha: A plataforma é projetada para detectar e tratar automaticamente a ocorrência de falhas (alta disponibilidade e tolerância a falas em software ao invés de hardware - menor custo)

    - Abstação oferecida pelo Hadoop: https://prnt.sc/136wyuz
    - Hadoop Cluster: aquitetura mestre-escravo
        - https://prnt.sc/136xazg
        - https://prnt.sc/136xd22
    
    - Evolução: https://prnt.sc/136xkvb

- HDFS: Tolerância a falhas por meio de replicação dos dados.
    - Arquivos de dados são divididos em blocos de tamanho fixo.
    - Blocos são distribuídos entre DataNodes.
    - Fator de replicação determina que, para cada bloco, duas réplicas serão armazenadas (valor configurável) em outros servidores.

    - HDFS Replicações: https://prnt.sc/136z6vl

    - Apesar de estarem distribuídos, o acesso aos dados é feito de maneira transparente.
    - Uma das formas de inserir dados no HDFS é enviado um arquivo de dados (txt, csv) para o cluster.
        - Comando "hdfs dfs": hdfs dfs -mkdir dados_compras || hdfs dfs -put $HOME/compras_online.csv dados_compras
    - O comando "dfs" permite a execução de diversos comandos sobre o sistema de arquivos: cat, ls, mkdir, rm e etc.

    
    

## Bibliografia coletada
