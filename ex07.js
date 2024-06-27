const students = ['Joao', 'Juliana', 'Caio', 'Ana'];
const averages = [10, 8, 7.5, 9];

const list = [students, averages];

function verifyNameNGrades(student) {
    if(list[0].includes(student)){
        const [students, averages] = list;
        const index = students.indexOf(student);
        const StudentsAverage = averages[index];
        console.log(`${student} has the average ${StudentsAverage}`);

    }else{
        console.log('The Student dont exist');
    }

}

verifyNameNGrades('Caio');
verifyNameNGrades('Juli');
