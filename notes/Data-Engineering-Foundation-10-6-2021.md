// Inicialização do Spark

1. export PYSPARK_DRIVER_PYTHON=jupyter
2. export PYSPARK_DRIVER_PYTHON_OPTS='notebook --ip 0.0.0.0'
3. pyspark

// exercício 1

1. Carregue os arquivos beneficios.csv e doencas.csv no spark
2. Liste a idade, sexo e especie apenas para o sexo 'Masculino' cuja doença seja restrita ao sexo 'F'

// resposta final do execício

df2.select(df2.idade_conc, df2.sexo, df2.especie, df2.restr_sexo).filter((df2.sexo == 'Masculino') & (df2.restr_sexo == 'F')).show()

---

// exercicio 2

1. Crie uma tabela chamada top10_doencas que contenha a doença, o sexo, a média de idade e o total de beneficios para as 10 maiores doenças. Use o método limit(n) para obter as n primeiras linhas do DataFrame;

// resposta final do execício

df2.filter(df2.doenca.isNotNull()).groupby('doenca','sexo').agg(F.avg('idade_conc').alias('media_idade'), F.count('*').alias('total')).orderBy('total',ascending=False).limit(10).write.saveAsTable('top10_doencas', mode='overwrite')
