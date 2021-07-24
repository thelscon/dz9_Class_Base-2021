'use strict' ;

class Person {

    #_PERMISSION_GANDER = [ 'male' , 'female' , 'non-binary' , 'transgender' , 'intersex' , 'n/a' ] ;

    #_name ;
    #_age ;
    #_gander ;

    constructor ( name , age , gander ) {

        Object.defineProperties ( this , {
            'name' : {
                get : function () { return this.#_name } ,
                set : function ( value ) { this.#_name = value.trim () } ,
                enumerable : false ,
                configurable : false
            } ,
            'age' : {
                get : function () { return this.#_age } ,
                set : function ( value ) {
                    value = parseInt ( value ) ;
                    if ( value > 0 && value <= 120 ) {
                        this.#_age = value ;
                    }
                } ,
                enumerable : false ,
                configurable : false
            } ,
            'gander' : {
                get : function () { return this.#_gander } ,
                set : function ( value ) {
                    value = value.trim().toLowerCase() ;
                    if( this.#_PERMISSION_GANDER.includes( value ) ) {
                        this.#_gander = value ;
                    }
                } ,
                enumerable : false ,
                configurable : false
            }
        } ) ;

        this.name = name ;
        this.age = age ;
        this.gander = gander ;

    }

}

const newPerson = new Person ( ' bob' , 120 , ' Male' ) ; 
console.log ( newPerson.name ) ;
console.log ( newPerson.age ) ;
newPerson.name = 'ivan' ;
newPerson.age = 121 ;
console.dir ( newPerson.name ) ;
console.log ( newPerson.male ) ;

/* Object.defineProperty ( newPerson , 'age' , { //нельзя изменить поле объекта age
    configurable : true ,
    value : '121'
} ) ;
console.log ( newPerson ) ; */