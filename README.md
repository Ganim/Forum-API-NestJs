
# Fórum API - NestJS

Este repositório possui os arquivos desenvolvidos no módulo de estudo sobre NestJS do ignite da rockeatseat. 



## Instalação

Todos os comandos a seguir devem ser executados no terminal:

#### Realize o download do projeto por meio do git clone

``
    git clone ....
``

#### Acessando a pasta do projeto, instale os módulos do NODE

``
    pnpm node i
``

#### Tendo o Docker instalado, crie o banco de dados

``
    docker compose up -d
``

#### Inicie o prisma (primeira instalação)

``
    pnpm prisma generate
``

#### Faça as migrações do prisma

Antes de executar o comando, ter certeza que apagou todos os arquivos dentro de prisma/migrations

Criar / Atualizar sempre que houver mudanças:

``
    pnpm prisma migrate dev
``

Gerar existentes:
``
    pnpm prisma migrate deploy
``

Em caso de erro, com o docker rodando, execute: 

``
    npx prisma db pull     
``


### Criar as chaves publicas e privadas, Caso não tenha

No terminal WSL2 rodar os seguintes comandos

#### Gerar a chave privada
``openssl genpkey -algorithm RSA -out private.key -pkeyopt rsa_keygen_bits:2048``

#### Gerar a chave pública
``openssl rsa -pubout -in private.key -out public.key -outform PEM``

#### Converter a chave privada para base64
``JWT_PRIVATE_KEY=$(openssl base64 -in private.key -A)``

#### Converter a chave pública para base64
``JWT_PUBLIC_KEY=$(openssl base64 -in public.key -A)``

#### Adicionar as chaves ao arquivo .env
``
echo "JWT_PRIVATE_KEY=\"$JWT_PRIVATE_KEY\"" >> .env``

``echo "JWT_PUBLIC_KEY=\"$JWT_PUBLIC_KEY\"" >> .env
``

#### Remover os arquivos de chave
``rm private.key public.key``

## Execução


#### Iniciando o Docker
Antes de mais nada abra o Docker Desktop e inicie o banco de dados.

#### Iniciar o DB no docker
``docker-compose up -d``


#### Iniciando o Nest
Em um terminal execute:

``
    pnpm start:dev
``

#### Iniciando o Prisma Studio
Em outro terminal execute:

``
    pnpm prisma studio
``
