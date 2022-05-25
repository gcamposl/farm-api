# farmAPI (em desenvolvimento... ⚙️)

- Um "simples" crud API Rest utilizando todas as seguintes tecnologias:

- [x] npm 8.1.2
- [x] node 16.13.2
- [x] javascript ES6
- [x] DDD - Domain Driven Design
- [x] SOLID
- [x] Docker e docker-compose
- [x] Postgres
- [x] Swagger
- [x] Tests unitários com Jest
- [] ?Algum service cloud... 

## Banco de Dados Postgress


```sql
CREATE TABLE farm (
	far_id uuid PRIMARY KEY,
  	far_name varchar ( 50 ) NOT NULL,
  	far_size numeric,
  	created_at timestamp NOT NULL
);

CREATE TABLE animal (
	ani_id uuid PRIMARY KEY,
  	ani_identification integer NOT NULL,
  	ani_breed varchar ( 50 ),
  	created_at timestamp NOT NULL
);

CREATE TABLE farm_animal (
  	far_id uuid NOT NULL,
  	ani_id uuid NOT NULL,
  	PRIMARY KEY (far_id, ani_id),	
  	FOREIGN KEY (far_id)
  		REFERENCES farm (far_id),
  	FOREIGN KEY (ani_id)
  		REFERENCES animal (ani_id)
 );
 ```