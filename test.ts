import {Study} from './study';

export class Test {
    private timer: Study;

    constructor() {
        this.timer = new Study();
    }

    public startCount() {
        console.log('Test started.');
        this.timer.start();
    }
}

const newCount = new Test();
newCount.startCount();


