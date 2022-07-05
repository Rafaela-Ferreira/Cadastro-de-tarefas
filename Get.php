<?php
    //echo "Script de leitura de dados";
    //conexão com o banco de dados
    $dbHost = "localhost:3306";//3306 onde está o banco de dados
    $dbUser = "root";
    $dbPassword = ""; //'ifsp'
    $dbName = "tarefas";

    $connection = mysqli_connect($dbHost,$dbUser,$dbPassword, $dbName);

    if($connection){
        //echo "<br />Conexão efetuada com sucesso! ";
        //Realizar a leitura do banco
        $query = "select * from cadastro";
        $results = mysqli_query($connection, $query);
        //var_dump($results);
        //Entregar os dados para quem pediu

        $Tarefas = [];
        $index = 0;

        while($record = mysqli_fetch_row($results)){
            //var_dump ($record);
            $Tarefa = new stdClass(); //criando um objeto
            $Tarefa->id = $record[0];
            $Tarefa->nomeTarefa = $record[1];
            $Tarefa->dataConclusao = $record[2];
            $Tarefas[$index] = $Tarefa;
            $index = $index +1;

        }
        echo json_encode($Tarefas);

    }else{
        echo "<br />Conxão não efetuada!";
        echo "<br />". mysqli_connect_error();

    }

?>