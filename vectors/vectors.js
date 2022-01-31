window.Vector = (() => {
    return class {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        copy() {
            return Object.create(this);
        }
        
        add(velocityVector) {
            this.x += velocityVector.x;
            this.y += velocityVector.y;
        }

        sub(velocityVector) {
            this.x -= velocityVector.x;
            this.y -= velocityVector.y;
        }

        mul(num) {
            this.x *= num;
            this.y *= num;
        }

        div(num) {
            this.x /= num;
            this.y /= num;
        }

        magnitude() {
            return Math.sqrt(this.x ** 2 + this.y ** 2);
        }

        noramlize() {
            const magnitude = this.magnitude();
            if (magnitude != 0) {
                this.div(magnitude);
            }
        }

        radians(deg) {
            return 2 * Math.PI * (deg / 360);
        }

        angle(velocityVector) {
            return Math.atan(velocityVector.y / velocityVector.x);
        }

        limit(max) {
            let magnitude = this.magnitude();
            if (magnitude > max) {
                this.x = max;
                this.y = max;
            }
        }
    }
})();
