# express-validator-migrate-5-to-6

Starting with express-validator v6.0.0, the approach for doing validations is more declarative and in turn some of the ways we had done in v5 would require some changes. The purpose of this project is to show how to migrate our existing express-validator code from v5 to v6 through sample codes. With the understanding that there is a more declarative way of doing the validations in v6+, the only requirement in the sample codes we set for is to keep the similar programmatical approach in both versions so that we are comparing apples to apples.

> **For a complete list of breaking changes and new features in express-validator 6.0.0**,
> please check [v6.0.0](https://github.com/express-validator/express-validator/releases/tag/v6.0.0).

## Installation and running the code

For the sample code using v5, go to the v5 folder, run the following commands and a server will be listening on the port, 3000.

```
cd v5
npm install
node index.js
```

To run some tests in the commandline, run

```
curl --location --request POST 'localhost:3000/' \
--header 'Content-Type: application/json' \
--data-raw '{"greetings1": "<script>badcall()</script>"}'
```

Expected result: `checking done, error: [{"location":"body","param":"greetings","msg":"Invalid value"}]`

Run:

```
curl --location --request POST 'localhost:3000/' \
--header 'Content-Type: application/json' \
--data-raw '{"greetings": "<script>badcall()</script>"}'
```

Expected result: `checking done, hello: &lt;script&gt;badcall()&lt;&#x2F;script&gt;`

To take down the server: Press `Ctrl + C` or `Cmd + C`

For the sample code using v6

```
cd v6
npm install
node index.js
```

## Documentation

Please refer to the documentation on the latest [express-validator](https://express-validator.github.io).

## License

MIT License
