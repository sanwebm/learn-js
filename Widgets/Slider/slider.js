class Slider {
    constructor(options) {
        let {slider, thumb} = options;
        this.slider = slider;
        this.thumb = thumb;
        this.render();
    }

    render(){

        this.thumb.onmousedown = (event) => {

            event.preventDefault();

            this.shiftX = event.clientX - this.thumb.getBoundingClientRect().left;

            this.mouseMoveHandler = this.onMouseMove.bind(this);
            this.onMouseUpHandler = this.onMouseUp.bind(this);

            document.addEventListener('mousemove', this.mouseMoveHandler);
            document.addEventListener('mouseup', this.onMouseUpHandler);

            //return false;
        };

        this.thumb.ondragstart = (event) => {
            return false;
        };
    }

    onMouseMove(event) {

        let newLeft = event.clientX - this.shiftX - this.slider.getBoundingClientRect().left

        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = this.slider.offsetWidth - this.thumb.offsetWidth;

        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        this.thumb.style.left = newLeft + 'px';

    }

    onMouseUp() {
        document.removeEventListener('mouseup', this.onMouseUpHandler);
        document.removeEventListener('mousemove', this.mouseMoveHandler);
    }

}