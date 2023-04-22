// object literal
const book1 ={
    title:"book one",
    author:"john doe",
    year:2013,
    getSummary: function(){
return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book1.getSummary())
// console.log(book1.title)
//object values 
const book2 ={
    title:"book one",
    author:"jane doe",
    year:2013,
    getSummary: function(){
return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(Object.values(book2))
//object kets
console.log(Object.keys(book2))