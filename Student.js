const student = {
    name : 'Tarun Shyam',
    age : 24,
    marksPercentage : 80.6,
    greet : function (){
        console.log(`
        Hi! My name is ${this.name}, I am ${this .age} years old,
        and I successfully completed my graduation with an score of ${this.marksPercentage}%.
        Thank You !
        `)
    }
}
student.greet();