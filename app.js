const input = document.querySelector('.input-field');
const button = document.querySelector('.input-button');
const list = document.querySelector('.list');
const doneList = document.querySelector('.done-list')


button.addEventListener('click', function(e){
    e.preventDefault();
    let value = input.value;
    if(value === ''){
        value.outline = '1px solid red'
        setTimeout(function(){
            value.outline = '1px solid transparent'
        }, 1500)
        return;
    }
    
    let markup = `<li class="item"><input class="item-input" type="checkbox"><p>${value}</p></li>`;
    list.insertAdjacentHTML('beforeend', markup);
    input.value = '';
})

    
list.addEventListener('click', function(e){
    if(!e.target.classList.contains('item-input')) return;

    let markup = `<li class="item"><input class="item-input" type="checkbox" checked=true  disabled=true><p>${e.target.parentNode.textContent}</p></li>`;

    doneList.insertAdjacentHTML('beforeend', markup);

    e.target.parentNode.remove()
})
