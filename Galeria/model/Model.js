import { KEPLISTA } from "./adat.js"
class Model{
    #list = []
    #id
constructor(){
this.#list= KEPLISTA
this.#id =0
}
getList(){
    return this.#list
}
getAktKep(){
    return this.#list[this.#id]
}
jobb(){
    this.#id++
    if(this.#id>=this.#list.length){
        this.#id = 0
    }
}
bal(){
    this.#id--
    if(this.#id < 0){
        this.#id=this.#list.length-1
    }
}
}
export default Model