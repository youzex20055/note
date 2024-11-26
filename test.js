const { sayHello } = require('./app');

function testSayHello() {
    const result = sayHello();
    if (result === 'Hello, World!') {
        console.log('اختبار ناجح: sayHello() = Hello, World!');
    } else {
        console.error('اختبار فاشل: sayHello() =', result);
    }
}

// تنفيذ الاختبار
testSayHello();
