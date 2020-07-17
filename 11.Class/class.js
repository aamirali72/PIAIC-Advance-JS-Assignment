class Students {
    constructor(n, ag, add) {
        this.name = n
        this.age = ag
        this.address = add
    }
    func() {
        console.log("func running " + this.name)
    }
    //    static dumval = "ABC" //static can use class for direct call without new. mostlu not use

}

//console.log(Students.dumval) //static can use for direct call without new.

var ameen = new Students("ameen", 20, "15/A")
console.log(ameen.func())

var rizwan = new Students("Rizwan", 45, "16/P")
console.log(rizwan.func()