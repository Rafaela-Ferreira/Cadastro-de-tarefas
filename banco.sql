create database tarefas;
use tarefas;

create table cadastro(
  id int primary key NOT NULL AUTO_INCREMENT,
  nomeTarefa varchar(50) not null,
  dataConclusao date not null
);

insert into cadastro values
  (null, 'Estudar', '05/07/2022'),
  (null, 'Trabalhar', '06/07/2022');