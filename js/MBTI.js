function generateLetterItem(letter) {
    const letterItem = document.createElement("div");
    letterItem.classList.add("letter-item");

    const link = document.createElement("a");
    link.href = `lettercontents.html?letter=${letter.id}`;

    const img = document.createElement("img");
    img.src = `img/decoration${letter.id}.png`;
    img.alt = `Letter ${letter.id}`;

    const text = document.createTextNode(letter.receiver_name);

    link.appendChild(img);
    link.appendChild(text);
    letterItem.appendChild(link);

    return letterItem;
}

const lettershelf = document.getElementById("lettershelf");

letters.forEach(letter => {
    const letterItem = generateLetterItem(letter);
    lettershelf.appendChild(letterItem);
});

