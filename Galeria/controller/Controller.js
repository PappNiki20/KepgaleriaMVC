import Model from "../model/Model.js"
import NagykepView from "../view/Nagykep.js"
class Controller {
    constructor() {
        const MODEL = new Model()
        const NAGYKEPVIEW = new NagykepView(MODEL.getAktKep(), $(".nagykep"))
        $(window).on("jobb", () => {
            MODEL.jobb()
            let AktKep= MODEL.getAktKep()
            MODEL.getAktKep()
            NAGYKEPVIEW.nagyKepCsere(AktKep)
        })
        $(window).on("bal", () => {
            MODEL.bal()
            let AktKep= MODEL.getAktKep()
            MODEL.getAktKep()
            NAGYKEPVIEW.nagyKepCsere(AktKep)
        })
       
    }

}
export default Controller