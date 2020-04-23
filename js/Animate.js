class Animate {
    constructor(element){
        this.element = element;       
    } 

    startAnimate(){
        window.addEventListener("load", () => {
            this.element.style.opacity = 1;
            this.element.style.transform = `translate3d(0, 0, 0)`;
            this.element.style.transition = `1s`;
        })  
    }

    setAnimationUp(value){
        this.element.style.opacity = 0;
        this.element.style.transform = `translate3d(0, -${value}px, 0)`;
    }

    setAnimationDown(value){
        this.element.style.opacity = 0;
        this.element.style.transform = `translate3d(0, ${value}px, 0)`;
    }

    setAnimationRight(value){
        this.element.style.opacity = 0;
        this.element.style.transform = `translate3d(-${value}px, 0, 0)`;
    }

    setAnimationLeft(value){
        this.element.style.opacity = 0;
        this.element.style.transform = `translate3d(${value}px, 0, 0)`;
    }

    setCustomAnimation(x, y, z = 0){
        this.element.style.opacity = 0;
        this.element.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }

    setAnimationOpacity(){
        this.element.style.opacity = 0;
        this.element.style.transition = 1;
    }

}

export default Animate;