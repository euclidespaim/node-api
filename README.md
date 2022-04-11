
# Node API

Database control API of a library using Express and MongoDB. It has the main HTTP verbs applied and uses good programming practices.


## API Reference

#### Get all items

```http
  GET /listarLivros
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ``        | `string` | Show all books             |


#### Get an item by id

```http
  GET /listarLivroPorId/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Register new items

```http
  POST /cadastrarLivros
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ``        | `string` | Add new books              |


#### Update item

```http
  PUT /atualizarLivro/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Remove an item

```http
  DELETE /removerLivro/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## 🚀 About Me
I'm a full stack developer...


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Support

For support, email fake@fake.com or join our Slack channel.


## Appendix

https://www.buymeacoffee.com/euclidespaim

