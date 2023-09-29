let addBtn = document.querySelector('.add');
let input = document.querySelector('input');
let list = document.querySelector('.list');
input.focus();

let generateID = () => {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let milliseconds = currentDate.getMilliseconds();

    let randomID = `${day}${month}${year}${hours}${minutes}${seconds}${milliseconds}`;
    return randomID;
}



let itemContainer;
let newItem;
let btnContainer;
let removeBtn;
let renameBtn;

let addNewItem = (removeBtn) => {
    let idNumber = generateID();

    if(input.value === "") {
        alert('Insert some input');
    } else {
        itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container', generateID());
        newItem = document.createElement('p');
        btnContainer = document.createElement('div');

        removeBtn = document.createElement('i');
        removeBtn.classList.add('fa', 'fa-trash', idNumber);

        renameBtn = document.createElement('i');
        renameBtn.classList.add('fa', 'fa-pencil', idNumber);

        newItem.textContent = input.value;
        input.value = "";
        list.appendChild(itemContainer);

        itemContainer.appendChild(newItem);
        itemContainer.appendChild(btnContainer);

        btnContainer.append(removeBtn, renameBtn);

    }

    itemContainer.style = `
        border-bottom: white solid 2px;
        background-color: #989C94;
        height: 2rem;
        display: flex;
        justify-items: space-between;
        align-items: center;
    `;

    newItem.style.cssText = `
        width: 60%;
        heigth: 2rem;
        color: white;
        margin-left: 2rem;
    `;

    btnContainer.style.cssText = `
        width: 5rem;
        height: fit-content;
        display: flex;
        justify-content: space-between;
    `

    removeBtn.style.cssText = `
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    renameBtn.style.cssText = `
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

}

addBtn.addEventListener('click', () => {
    addNewItem();
});

document.addEventListener('keypress', (event) => {
    if(event.code === 'Enter') {
        addNewItem();
    }
});

add