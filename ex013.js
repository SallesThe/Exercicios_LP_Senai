function mediaAlunos(nota1, nota2, nota3) {
    let mediaFinal = ((nota1 * 2 + nota2 * 3 + nota3 * 5) / 10)
    if (mediaFinal >= 7) {
        console.log("Aluno aprovado! Media: " + mediaFinal)
    } else {
        console.log("Aluno reprovado! Media: " + mediaFinal)
    }
}

mediaAlunos(8, 7, 7);
// Output: Aluno aprovado! Media: 7.2