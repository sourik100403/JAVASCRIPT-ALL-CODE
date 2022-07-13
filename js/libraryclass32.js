console.log("tut32/library class");
class library{
    constructor(booklist){
        this.booklist=booklist;
        this.issuedbooks={};
    }
    getbooks(){
        this.booklist.forEach(element => {
            console.log(element);
            
        });
    }
    issubook(bookname,user){
        if(this.issuedbooks[bookname]==undefined){
            this.issuedbooks[bookname]=user;
        }
        else{
            console.log("this book is already issued");
        }
    }
    returnbook(bookname){
        delete this.issuedbooks[bookname];

    }

}