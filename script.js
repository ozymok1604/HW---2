const students = ["Олександр", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(){
    let girls = [];
    let boys = [];
    len = students.length;
    for (let i = 0;i<len;i++){
        str = students[i];
        str1 = str.split('');
    
        if (str1[str1.length - 1] != "а"){
            boys.push(students[i]);           
        }else{
            girls.push(students[i]);
        }
        
    }
    let pairs = [];
    
    for (let i = 0;i<len / 2;i++){
        pairs[i] = '[' + boys[i] + ',' + girls[i] + ']';
    }
    return pairs;
    
}


function getSubject(){
    pairs = getPairs();
    

    subjects = [];
    for (let i = 0;i<len / 2;i++){
        subjects[i] =  pairs[i] + ' - ' + themes[i];

    }

    return subjects;
}


function getMark(){
    let pairs = getPairs();
    let marks2 = [];
    for (let i = 0;i<len / 2;i++){
        marks2[i] =  pairs[i] + ' - ' + marks[i];

    }
    console.log(marks2);

}

function getRandomMark(){
    let random = [];
    let pairs = getSubject();
    for (let i = 0;i<len / 2;i++){
        random[i] = pairs[i] + '  '+Math.floor(Math.random() * 5);


    }
    return random;
}

