
let template = document.createElement("template")

function defined(obj){
    return (typeof(obj) != "undefined")
}

function uid(){
    return Date.now()+"_"+Math.floor(Math.random() * 10000)
}

function suid(){
    let date = (Date.now()).toString();
    const sub = date.substring(date.length-6,date.length-1);
    return sub+"_"+Math.floor(Math.random() * 10000)
}

function send(event_name,data){
	var event = new CustomEvent(event_name, {detail:data});
	window.dispatchEvent(event);
}

function temp(tagName,html_text){
    template.insertAdjacentHTML("beforeend",html_text);
    let elements = template.getElementsByTagName(tagName);
    let res_svg =  elements[elements.length-1];
    return res_svg;
}

function html(parent,tagName,html_text){
    parent.insertAdjacentHTML("beforeend",html_text);
    let elements = parent.getElementsByTagName(tagName);
    let res_svg =  elements[elements.length-1];
    return res_svg;
}

function css(sheet,text){
    sheet.insertRule(text);
}

function br(parent){
    parent.appendChild(document.createElement("br"))
}

function hr(parent){
    parent.appendChild(document.createElement("hr"))
}

function image(parent,url){
    return html(parent,"image",/*html*/`
        <image x="0" y="0" xlink:href=${url}></image>
    `)
}

//mini jQuery like events wrapper
class Events{
    constructor(){
        const events_list = ["click","change","input"]
        events_list.forEach((evtName)=>{
            this[evtName] = (element,func)=> {
                element.addEventListener(evtName,func)
            }
        })
    }
}

function save_json(object,fileName){
    const json_str = JSON.stringify(object,null,'\t');
    var blob = new Blob([json_str], {type: 'application/json'});
    saveAs(blob, fileName);
}

function rand_col() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export{
    html,
    br,hr,
    defined,
    Events,
    save_json,
    rand_col,
    image,
    uid,
    suid,
    send,
    temp,
    css
}
