const toLog = () => {
    console.log("BODY");
}

startClass = () =>{
    const dBody = document.body
    console.log(dBody);
    return dBody
}

class appPopup{
    constructor(inputArray){
        this.active = []
        this.getArray(inputArray)
    }
    getArray(inpArray){
        inpArray.forEach(el => {
            console.log(document.querySelector(`#${el.id} + label span`).innerHTML);
            this.active.push(document.querySelector(`#${el.id} + label span`).innerHTML)
        });
        this.runApp()
    }
    runApp(){
        chrome.tabs.query({active: true}, tabs => {
            const tab = tabs[0]
            if(tab){
                chrome.scripting.executeScript(
                    {
                        target:{tabId: tab.id, allFrames: true},
                        files: ["app.js"],
                        func: startClass
                    },
                    toLog()
                )
            } else{
                alert("There are no active tabs")
            }
        })
    }
}

class appForm{
    constructor(){
        document.querySelector("#get").addEventListener('click', () => {
            if(document.querySelectorAll("input:checked").length != 0){
                new appPopup(document.querySelectorAll("input:checked"))
            } else{
                alert("Вы не выбрали ни один фильтр!!!")
            } 
        })
    }
}

new appForm()