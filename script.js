let list_celebrities_unsorted = ["Cristiano Ronaldo","Ariana Grande","Harry Potter","Hermione Granger","Gaston PHAN","Jane McKean","Eleanor Tesoro","Matthew Pinsker",
"C-3PO","Daisy","Ron Weasley","Batman","Superman","Iron Man","Spider-Man","Hulk","Donald Trump","Taylor Swift", "Elvis Presley","Bob Marley","Goerge Clooney","Kobe Bryant","Hugh Laurie",
    "Winston Churchill","Kim Kardashian","Natalie Portman","Serena Williams","Roger Federer","Rafael Nadal","Lionnel Messi","Justin Bieber","Selena Gomez","Beyonce","Rihanna","Shakira",
    "Barack Obama","Floyd Mayweather","Nikola Tesla","Walt Disney","Will Smith","Tom Cruise","Karl Max","Anakin Skywalker","Yoda","Darth Vader","Jack Sparrow","Coco Chanel","Homer Simpson",
    "Franklin D. Roosevelt","Nicolas Cage","George Bush","Robin Hood","Nicole Kidman","Benjamin Franklin","Che Guevara","Angelina Jolie","Brad Pitt","Charles Darwin","Albert Einstein",
    "Leonardo da Vinci","Steven Spielberg","Kanye West","Mahatmaa Gandhi","Emma Watson","Pablo Picasso","Socrates","Elton John","Neil Amstrong","Hulk Hogan","Arnold Schwarzenegger",
    "Martin Luther King, Jr.","Cinderella","Chewbacca","Dexter","Jim Carrey","Leonardo DiCaprio","Jennifer Aniston","Naruto","Sasuke","Monkey D Luffy","Michael Jackson",
    "Mickey Mouse","Son Goku","Eminem","Bill Gates","Michael Jordan","Jackie Chan","Steve Jobs","Santa Claus","Pikachu","Scooby-Doo","Bugs Bunny","Chuck Norris","Eric Cartman",
    "Abraham Lincoln","Link","Zelda","PewDiePie","Bart Simpson","Donkey Kong","King Kong","Sonic","Gollum","Mario","Luigi","Yoshi","Bowser","Peach","Mr Bean","Aragorn","J.R.R Tolkien",
    "Luke Skywalker","Obi-Wan Kenobi","Wonder Woman","James Cameron","Simba","The Joker","John Rambo","Wolverine","R2-D2","Gandalf","Count Dracula","Marty McFly","Han Solo",
    "Forrest Gump","Bruce Lee", "William Shakespeare","The Rock","James Bond","Sherlock Holmes","Captain America","Tarzan","Lara Croft","Peter Pan","Indiana Jones","Rocky Balboa",
    "Barbie","Winnie-the-Pooh","Jon Snow","E.T","Zorro","Mary Poppins","Walter White","Vegeta","Bambi","Shrek","LeBron James","Tiger Woods","Neymar","Usain Bolt","Michael Phelps","Conor McGregor",
    "Mohamed Ali","David Beckahm","Lewis Hamilton","Michael Schumacher","Zinedine Zidane","Carl Lewis","Diana Spencer","Adele"
]



let list_celebrities = list_celebrities_unsorted.sort();



console.log(list_celebrities_unsorted.length);


let my_array = []
let new_line = [];
let n =0;
while (n<list_celebrities.length) {
    if (new_line.length<=10) {
        new_line.push(list_celebrities[n]);
    } else {
        my_array.push(new_line)
        new_line = []
    }
    n++;
}


function random_pick() {
    var span = document.getElementById("span_txt");


    var random1 = Math.floor(Math.random() * my_array.length);
    var random2 = Math.floor(Math.random() * my_array[random1].length);
    randomCharacter = my_array[random1][random2];

    console.log(random1);
    console.log(random2);
    console.log(randomCharacter);

    span.innerHTML = randomCharacter;

    if (span.style.display == "none") {
        span.style.display = "inline";
    }

}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}


let table = document.getElementById("azerty");
console.log(table);


generateTable(table, my_array)

