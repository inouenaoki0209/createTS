import { Study } from './study';
var Test = /** @class */ (function () {
    function Test() {
        this.timer = new Study();
    }
    Test.prototype.startCount = function () {
        console.log('Test started.');
        this.timer.start();
    };
    return Test;
}());
export { Test };
var newCount = new Test();
newCount.startCount();
