// ini di ES 6 
// promise punya call back di dalam functionnya 
// sehingga promise adalah callback di dalam callback 
// sehingga apabila sukses atau gagal functionnya akan selalu di callback 
// perbedaannya adalah di reject dan resolve 

getRegional = (id, callbackFunc) => 
{
    return new Promise((resolve, reject) => 
    {
        if (id !== 1)
            return reject({
                message: "salah id"
            }) // early return -> berusaha ngambil kemungkinan yang gagal dahulu sebelum yang berhasil
        setTimeout(() =>
        {
            resolve(
            {
                id: 1, 
                name: "Indonesia" 
            })
        }, 1000);
    })
}

getProvice = (id, callbackFunc) => 
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(
            {
                id: 1,
                name : "DKI Jakarta"
            })
        }, 1000);
    })
    
}

getDataCovid = (id, callbackFunc) => 
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout (() => 
        {
            resolve(
            {
                positive : 0,
                sembuh : 10000,
                meninggal: 0
            })
        }, 1000);
    })
    
}

//ex Resolve
getRegional(1).then(region => console.log (region))

// Ex Reject
getRegional(2)
    .then (region => console.log(region))
    .catch(err => console.log (err))

getRegional(1)
    .then (region => getProvice(region.id))
    .then (province => getDataCovid(province.id))
    .then (data =>console.table (data)) // ada console.table juga
    .catch(err => console.log (err))