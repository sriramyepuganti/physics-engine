window.Vector = (() => {
    return class {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        add(velocityVector) {
            return new Vector(this.x + velocityVector.x, this.y + velocityVector.y);
        }

        sub(velocityVector) {
            return new Vector(this.x - velocityVector.x, this.y - velocityVector.y);
        }

        mul(num) {
            return new Vector(this.x * num, this.y * num);
        }

        div(num) {
            return new Vector(this.x / num, this.y / num);
        }

        magnitude() {
            return Math.sqrt(this.x ** 2 + this.y ** 2);
        }

        noramlize() {
            const magnitude = this.magnitude();
            if (magnitude != 0) {
                return this.div(magnitude);
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