
export class CommonUtils{
    static readFile(file:File,obj){
        let fileAsString = '';
        let reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onloadend=() => obj.imageUrl =reader.result as string
    }
    static mapToObj(others: any[]){
        let obj ={}
        others.map(other => obj[other.otherName] = other.otherDesc);
        return obj;
    }
    static objToMap(obj){
        let map= new Map();
        Object.keys(obj).forEach(key => map.set(key,obj[key]));
        return map;
    }
}
