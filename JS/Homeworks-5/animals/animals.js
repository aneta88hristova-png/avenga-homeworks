const animal = {
    name: "Lion",
    kind: "Big Cat",
    
    speak: function(message) {
        const output = `${this.name} says: '${message}'`;
        console.log(output);
        document.getElementById('animalInfo').innerHTML += `<p>${output}</p>`;
        return output;
    }
};

animal.speak("Roar! I'm the king of the jungle!");

function Animal(name, kind) {
    this.name = name;
    this.kind = kind;
    
    this.speak = function(message) {
        const output = `${this.name} (${this.kind}) says: '${message}'`;
        console.log(output);
        document.getElementById('animalInfo').innerHTML += `<p>${output}</p>`;
        return output;
    };
}

const dog = new Animal("Dog", "Canine");
const cat = new Animal("Cat", "Feline");
const fox = new Animal("Fox", "Hunter");

dog.speak("Woof woof! Hey bro!!!");
cat.speak("Meow! Where's my food?");
fox.speak("Ring-ding-ding-ding-dingeringeding!");


document.addEventListener('DOMContentLoaded', function() {
    const infoDiv = document.getElementById('animalInfo');
    infoDiv.innerHTML = `<h2>Animals Created:</h2>
        <p>Check the console (F12) to see all messages!</p>`;
});