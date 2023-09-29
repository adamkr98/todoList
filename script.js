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


let addNewItem = (removeBtn, renameBtn) => {
    let idNumber = generateID();

    if(input.value === "") {
        alert('Insert some input');
    } else {
        itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container', generateID());
        newItem = document.createElement('p');
        newItem.classList.add('newItemText');
        btnContainer = document.createElement('div');

        removeBtn = document.createElement('i');
        removeBtn.classList.add('fa', 'fa-trash', idNumber);

        renameBtn = document.createElement('i');
        renameBtn.classList.add('fa', 'fa-pencil', idNumber);

        doneBtn = document.createElement('i');
        doneBtn.classList.add('fa', 'fa-check', idNumber);

        if(input.value.length < 20 ) {
            newItem.textContent = input.value;
        } else {
            alert('too long')
            input.value = "";
            return
        }

        input.value = "";
        list.appendChild(itemContainer);

        itemContainer.appendChild(newItem);
        itemContainer.appendChild(btnContainer);

        btnContainer.append( doneBtn, renameBtn, removeBtn );

        removeBtn.addEventListener('click', (event) => {
            const isSure = window.confirm('Do you really want to remove it?');

            if( isSure === true ) {
                const itemContainer = event.target.closest('.item-container');
                    if (itemContainer) {
                        itemContainer.remove();
                    }
            } else {
                return;
            }
        });

        renameBtn.addEventListener('click', (event) => {
            const parag = event.target.closest('.item-container').querySelector('.newItemText');
            if (parag) {
                let changedName = prompt('Change the name');
                parag.textContent = changedName;
            }
        });

        let isDone = false;
        doneBtn.addEventListener('click', (event) => {
            const doneParag = event.target.closest('.item-container').querySelector('.newItemText');
            const itemContainer = event.target.closest('.item-container');
            
        
            if (isDone === false) {
                doneParag.style.textDecoration = "line-through";
                itemContainer.style.backgroundColor = "#20FC8F";
                isDone = true;
            } else if (isDone === true) {
                doneParag.style.textDecoration = "none";
                itemContainer.style.backgroundColor = "#989C94";
                isDone = false;
            }
        });
        
        

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
        width: 50%;
        heigth: 2rem;
        color: white;
        margin-left: 2rem;
    `;

    btnContainer.style.cssText = `
        // border: red solid 2px;
        width: 9rem;
        height: fit-content;
        margin-right: 1rem;
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

    doneBtn.style.cssText = `
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    `

}

addBtn.addEventListener('click', () => {
    addNewItem();
});

document.addEventListener('keypress', (event) => {
    if(event.code === 'Enter') {
        addNewItem();
    }
});

