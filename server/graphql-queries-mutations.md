# GraphQL Queries and Mutations

Below are the queries and mutations for the GraphQL for client and project info stored in MongoDB.

## Clients

Available fields : id, name, email, phone

**Get names of all clients**
```
{
  clients {
    name
  }
}
```

**Get a single client name and email**
```
{
  client(id: 1) {
    name
    email
  }
}
```

**Create a new client and return all data**
```
mutation {
  addClient(name: "Tony Stark", email: "ironman@gmail.com", phone: "955-365-3376") {
    id
    name
    email
    phone
  }
}
```

**Delete a client and return id**
```
mutation {
  deleteClient(id: 1) {
    id
  }
}
```
---------

## Projects

Available fields : id, name, description, status, clientId (<= could further access all the info of Project's client)

**Get name and status of all projects**
```
{
  projects {
    name
    status
  }
}
```

**Get a single project name, description along with the client name and email**
```
{
  project(id: 1) {
    name
    description,
    client {
      name
      email
    }
  }
}
```

**Create a new project and return name and description**
```
mutation {
  addProject(name: "Mobile App", description: "This is the project description", status: "new", clientId: "1") {
   name
   description
  }
}
```

**Update a project status and return name and status**
```
mutation {
  updateProject(status: "completed") {
   name
   status
  }
}
```
