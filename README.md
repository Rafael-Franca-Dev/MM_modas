# MM_modas
trabalho MAURICIO

## Executar o frontend

Abra um terminal na raiz do projeto e rode:

```powershell
cd frontend
npm install
npm run dev
```

Depois, abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

O backend Spring Boot é separado do frontend. Para executá-lo, use outro terminal na raiz:

```powershell
./mvnw.cmd spring-boot:run
```

O backend ainda precisa de uma configuração de banco de dados em `src/main/resources/application.properties` para iniciar corretamente.
