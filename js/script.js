function generateList(array) {
    const ul = document.createElement('ul');
    array.forEach(item => {
        const li = document.createElement('li');
        if (Array.isArray(item)) {
            li.appendChild(generateList(item));
        } else {
            li.textContent = item;
        }
        ul.appendChild(li);
    });
    return ul;
}

const data = [
    1,
    [
        1.1,
        1.2,
        1.3
    ],
    2,
    3,
    4
];

const generatedList = generateList(data);
document.body.appendChild(generatedList);
