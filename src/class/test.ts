export default class Test {
    test1: string;
    test2: string;

    constructor(test1: string, test2: string) {
        this.test1 = test1;
        this.test2 = test2;
    }

    test() {
        return this.test1 + ' ' + this.test2 + '!';
    }
}