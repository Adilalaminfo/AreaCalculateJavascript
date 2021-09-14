const radius=[3,1,2,4];

const area=function(radius){
    return 2*Math.PI*radius*radius;
};

const cirumference=function(radius){
    return 2*Math.PI*radius;
};

const diameter=function(radius){
    return 2*radius;

};

const calCulateArea=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]*radius[i]);
    }
    return output;
}

console.log(calCulateArea(radius));
console.log(cirumference(radius));
