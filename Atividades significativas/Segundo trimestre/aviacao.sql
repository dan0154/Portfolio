/*Código referente à atividade do dia 30/06 no classroom*/

CREATE TABLE aviao (
  id_aviao_pk INT NOT NULL,
  modelo VARCHAR (30) not NULL,
  limite_passageiros INT,
  PRIMARY KEY (id_aviao_pk)
  )

CREATE TABLE piloto_copiloto (
  CPF_pk VARCHAR (15) NOT NULL,
  nome VARCHAR (40) not NULL,
  data_admissao VARCHAR (10) not NULL,
  PRIMARY KEY (CPF_pk)
  )
  
CREATE TABLE rotas (
  id_rota_pk INT not NULL,
  local_partida VARCHAR (20) NOT NULL,
  local_chegada VARCHAR (20) not NULL,
  tempo_medio VARCHAR (6) not NULL,
  PRIMARY KEY (id_rota_pk)
  )
  
CREATE table cliente (
  cpf_pk VARCHAR (15) not NULL,
  nome VARCHAR (40) not NULL,
  nacionalidade VARCHAR (20) not NULL,
  PRIMARY key (cpf_pk)
  )
  
CREATE TABLE viagem (
  id_viagem_pk INT not NULL,
  id_aviao_fk INT not NULL,
  id_rota_fk INT not NULL,
  PRIMARY KEY (id_viagem_pk),
  FOREIGN key (id_aviao_fk) REFERENCES aviao(id_aviao_pk),
  FOREIGN KEY (id_rota_fk) REFERENCES rotas(id_rota_pk)
  )
  
CREATE TABLE cliente_telefone (
  cpf_fk VARCHAR (15) not NULL,
  telefone VARCHAR (15) not NULL,
  PRIMARY KEY (telefone),
  FOREIGN KEY (cpf_fk) REFERENCES cliente(cpf_pk)
  )
  
CREATE TABLE viagem_cliente (
  id_viagem_fk INT not NULL,
  cpf_fk VARCHAR (15) NOT NULL,
  FOREIGN KEY (id_viagem_fk) REFERENCES viagem(id_viagem_pk),
  FOREIGN KEY (cpf_fk) REFERENCES cliente(cpf_pk)
  )
  
CREATE TABLE viagem_piloto (
  id_viagem_fk INT not NULL,
  cpf_fk VARCHAR (15) NOT NULL,
  FOREIGN KEY (id_viagem_fk) REFERENCES viagem(id_viagem_pk),
  FOREIGN KEY (cpf_fk) REFERENCES piloto_copiloto(cpf_pk)
  )
  
CREATE TABLE viagem_copiloto (
  id_viagem_fk INT not NULL,
  cpf_copiloto_fk VARCHAR (15) NOT NULL,
  FOREIGN KEY (id_viagem_fk) REFERENCES viagem(id_viagem_pk),
  FOREIGN KEY (cpf_copiloto_fk) REFERENCES piloto_copiloto(cpf_pk)
  )
  