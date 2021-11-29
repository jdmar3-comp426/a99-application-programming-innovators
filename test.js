//This file is just for testing purposes. When final version, please delete.
function currentTime() {
    const d = new Date();
    return d.getUTCMonth()+1+"/"+d.getUTCDate()+"/"+d.getUTCFullYear()+", "+d.getUTCHours()+":"+d.getUTCMinutes()+":"+d.getUTCSeconds()+" UTC"
}

console.log(currentTime());