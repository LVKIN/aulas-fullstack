Infrastructing and Cloud Computing
20/4/2021

Acessar a documentação das stacks
*Azure
*AWS
*GCP

Livro: Infrastructure as Code 
IaC

**Pesquisar o que é DevOps

escalabilidade
observabilidade

S.O/Redes - IaaS
Softwares - PaaS
Sem preucupação com Software - Saas

6 niveis de monitoramento - 6R's

1. Re-host
2. Re-platform
3. Re-factor/Re-architect
4. Re-purcashe
5. Retire
6. Retain

Iterativa Incremental

Migração Lift Shift(Rehosting): migrar a aplicação da forma que está -> IaaS
usa ferramenta de migração e valida se está tudo correto
malefícios: não se utiliza todos os benefícios que nuvem pode oferecer, não aumenta a escalabilidade

Migração Lift Reshape(Re-plataforming): migração parcial, refatoração de pontos estratégicos como database IaaS - PaaS
Gera mais tempo de trabalho

Migração Refactoring: Cloud Native PaaS
Mais tempo de trabalho, se encaixa melhor no marketing do CC

Migração Repurchasing: SaaS


Citação: Nem todo sistema precisa estar 100% disponível	


Estrutura em nuvem não deve ser tratada como animal de estimação

- Tratar como gado: cloud-friendly
- Tratar como Animal: infrastructing

## Hosting
1. Traditional Deployment
2. Virtualized Deployment
3. Container Deployment

** Containerização (Linux)

- Processo do sistema operacional
- Isola o processo
- Econômico

Service Serverless


## Stacks Provisionamento: Criação
1. Vagrant - Virtualização | IaaS (https://www.vagrantup.com/docs)
2. Terraform - Cloud | IaaS - PaaS - SaaS
3. Kubernetes - Containerização | PaaS

## Stacks Configuração: 
1. Docker - Containerização
2. Puppet - Virtualização | IaaS
3. Ansible - Virtualização

$ vagrant init - projeto vagrant
$ vagrant up - subir máquina vagrant

vagrant -> Box