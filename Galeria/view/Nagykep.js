class NagykepView {
    #kep
    constructor(kep, szuloElem) {
        this.#kep = kep
        this.szuloElem = szuloElem
        this.#htmlOsszerak()
        this.balGombElem = $(".bal")
        this.jobbGombElem = $(".jobb")
        this.nagyKepHelye = $("#nagykephelye")
        this.balGombElem.on("click", ()=>{
            this.#sajatEsemenyKezelo("bal")
        })
        this.jobbGombElem.on("click", ()=>{
            this.#sajatEsemenyKezelo("jobb")
        })
        
    }
    nagyKepCsere(kep){
        this.nagyKepHelye.attr("src", kep)
    }
    #htmlOsszerak() {
        let txt = ``
        txt += `
    <div class="card">
    <button class="bal">BAL</button>
  <div class="card-header">Főkép</div>
  <div class="card-body"><img src="${this.#kep}" id="nagykephelye" class="img-thumbnail"></div>
  <div class="card-footer">Leírás</div>
  <button class="jobb">JOBB</button>
</div>

    `
        this.szuloElem.html(txt)
    }
    #sajatEsemenyKezelo(esemenynev){
        console.log(esemenynev)
        const esemenyem = new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem)
    }
}
export default NagykepView