Postgraphile and Hasura benchmark with sample Chinook database.

# Usage

You need installed docker. 

Start:

```
docker-compose up --build
```
 
Then install dependencies and run package.json script commands.

```
yarn
yarn start
```

# Benchmark on MacBook Pro:

duration: 10.02s
connections: 10
pipelining: 1

| Server       | Requests/s | Latency | Throughput/Mb |
| :--          | --:        | :-:     | --:           |
| hasura       | 210.8      | 46.80   | 0.44          |
| postgraphile | 204.7      | 48.27   | 0.30          |
