# hacktivgram-server

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `GET /posts/user`
- `POST /posts`
- `DELETE /posts/:id`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string",
  "avatar": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string",
  "avatar": "string"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "string"
}
```


### POST /posts
Request:

- headers: access_token

- data:

```json
{
  "caption": "string",
  "img": "string",
  "title": "string"
}
```

​Response:

- status: 201
- body:
  ​

```json
{
  "caption": "string",
  "img": "string",
  "UserId": "integer"
}
```
​

### GET /posts/user

description: 
  get all current logged in user posts, and include the owner

Request:

- headers: access_token

Response:

- status: 200
- body:

```json
[
  {
    "caption": "string",
    "img": "integer",
    "title": "string",
    "User": {
      "email": "string"
    }
  }
]
```

​

### DELETE /posts/:id

notes: - ketika berhasil menghapus post
​

Request:

- headers: access_token
- params: 
  - id: "integer" required

Response:

- status: 200
- body:
  ​

```json
{
  "report": "Successfully delete post"
}
```