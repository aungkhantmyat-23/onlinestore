
export class CommonUtils{
    static readFile(file:File,obj){
        let fileAsString = '';
        let reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onloadend=() => obj.imageUrl =reader.result as string
    }
    static mapToObj(map){
        let obj ={};
        map?.forEach((key) => {
            let arr =[];
            Object.keys(key).forEach(k => arr.push(k));
            obj[key[arr[0]]] = key[arr[1]]
            arr.splice(0,2);
        });
        return obj;
    }
    static objToMap(obj){
        let map= new Map();
        Object.keys(obj).forEach(key => map.set(key,obj[key]));
        return map;
    }
}