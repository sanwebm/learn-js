class Clock {

    constructor(options){
        let {elem} = options;
        this.elem = elem;
        this.render();
    }


    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        this.elem.querySelector('.hour').innerHTML = hours;

        let min = date.getMinutes();
        if (min < 10) min = '0' + min;
        this.elem.querySelector('.min').innerHTML = min;

        let sec = date.getSeconds();
        if (sec < 10) sec = '0' + sec;
        this.elem.querySelector('.sec').innerHTML = sec;
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval( () => this.render(), 1000);
    }


}