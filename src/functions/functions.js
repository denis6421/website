import { skills_list } from "../components/Portfolio/skills/skills_list";

export const wait = (time) =>
  new Promise((res) => setTimeout(() => res(), time));


  export const decodeName = (name) => {
    return name.split(" ").join("-");
}
export const encodeName = (name) => {
    return name.split("-").join(" ");
}


export const findObjectIndex = (items, property, parameter) => {
    var index = -1;
    for (var i = 0; i < items.length; ++i) {
        if (items[i][property]  == parameter) {
           return index = i;
            break;
        }
    }
}


export const findIndexInArray = (items, parameter) => {
    var index = -1;
    for (var i = 0; i < items.length; ++i) {
        if (items[i]  == parameter) {
           return index = i;
            break;
        }
    }
}
export const getTech = (tech) => {
    let arr = []
    skills_list.forEach(element => {
        tech.filter(m => {
            if(m.toLowerCase() === element.name.toLocaleLowerCase()){
                arr = [...arr,element]  
            }
        })
    })
    return arr

}