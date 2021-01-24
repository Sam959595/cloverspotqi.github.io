console.log([1, 2, 5, 6, 8].filter(x => !(x % 2)).reduceRight((c, x) => c + Math.sqrt(x), 0));

/* function funcs(str) {
    document.write(str);
}

function riri(a, b) {
    return a*b/3;
}*/

//funcs("kkk = " + riri(3, 5));

function ds() {
    let d = new Date();

    document.write(d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate())
}
ds();