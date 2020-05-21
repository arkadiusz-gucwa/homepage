const name = 'Maciek';
const age = 32;

console.log(name)
console.log(age)
console.log(`Nazywam się ${name} i mam ${age} lata`)

const emptyParagrapf = document.querySelector('.week-summary__description--js');
emptyParagrapf.innerHTML='Nawet uzupelnilem tresc JavaScriptem';

const greet = (age, firstName) => {
    console.log(
        `Witaj Drogi odwiedzający nazywam sie ${firstName} i mam ${age} lat.`

    );
}

greet(31, `Arek`)