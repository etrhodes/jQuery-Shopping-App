function addItem () {
$('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let newItem = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    let html = `
    <li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `
    if(newItem) {
        $('.shopping-list').append(html);
    }
    })
};

function checkItem () {
    $('.container').on('click', '.shopping-item-toggle', event => {
        $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
};

function deleteItem () {
    $('.container').on('click', '.shopping-item-delete', event => {
        $(event.currentTarget).closest('li').remove();
    })
};

$(
addItem(),
checkItem(),
deleteItem(),
); 