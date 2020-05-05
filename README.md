# Desafio 01 da Maratona Full Cycle 2.0

Seguindo a instrução para realizar o desafio da maratona.

https://github.com/codeedu/maratona2-desafios

## Docker

Criado o arquivo Dockerfile, junto com as configurações necessárias para realizar a execução da app.

Construir a imagem da app

```bash
docker build -t rbferreyra/maratona-fullcycle-2:latest .
```

Executar o container da app

```bash
docker run -p 3000:3000 rbferreyra/maratona-fullcycle-2
```

Abrir a app na url:

http://localhost:3000

Repositório da imagem Docker

https://hub.docker.com/repository/docker/rbferreyra/maratona-fullcycle-2



