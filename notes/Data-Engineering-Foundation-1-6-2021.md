1. vagrant up
2. vagrant ssh node1
3. hdfs dfs -mkdir /user/vagrant/dados/professores/ 
4. hdfs dfs  -put <arquivo origem> <arquivo final> // dentro da vm || a pasta /vagrant dentro da vm é uma cópia da raiz da vm 
5. dentro do vs, na pasta hive criar uma tabela externa de professores
6. hive -f <arquivo tabela>
7. hive
8. consultas aleatórias de teste 

// a partir do ponto 4, tabela interna (ORC)
5. dentro do vs, na pasta hive criar uma tabela interna de professores // sem delimitador e sem location
6. hive -f <arquivo tabela>
7. hive
8. consultas aleatórias de teste 
9. para sobrescrever os registros, criar um arquivo de script para insert // para executar: repetir os passos 4 e 6