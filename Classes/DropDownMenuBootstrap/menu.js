export function Component(element){
    this._element = element;
}

Component.prototype.hide = function(){
    this._element.setAttribute('hidden', true);
};


export function Menu({element, title, list}){
    Component.call(this, element);
    this._title = title;
    this._list = list;
    this.render();
    this._dropDownArea = this._element.querySelector('.dropdown-menu');
    this._element.querySelector('button').addEventListener('click', this.toggle.bind(this));
}

Menu.prototype = Object.create(Component.prototype);
Menu.constructor = Menu;

Menu.prototype.close = function(){
        this._dropDownArea.classList.remove('show');
    };

Menu.prototype.open = function(){
        this._dropDownArea.classList.add('show');
    };

Menu.prototype.toggle = function(){
        this._dropDownArea.classList.toggle('show');
    };

Menu.prototype.render = function(){
        this._element.innerHTML = `
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ${this._title}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                ${this._list.map( (el) => `<a class="dropdown-item" href="#">${el}</a>`).join('') }
            </div>
        </div>
        `;
    };





