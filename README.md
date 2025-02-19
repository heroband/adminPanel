# adminPanel-backend

To up container with postreSQL db: 
```
docker-compose up -d
```
To run backend:
```
dotnet run
```
- to check swagger docs, go to:
```
localhost:port/swagger
```

To make and run migrations:

- Make migrations
```
dotnet ef migrations add "message""
```
- To run migrations
```
dotnet ef database update
```