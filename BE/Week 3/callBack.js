// 1. get data negara
// 2. get data provinsi
// 3. get data covid dari tiap provinsi 

//Callback function menggunakan ES5
getRegional = (id, callbackFunc) => {
    setTimeout(() => {
        callbackFunc({
            id: 1,
            name: "Indonesia"
        })
    }, 1000);
}

getProvice = (id, callbackFunc) => {
    setTimeout(() => {
        callbackFunc({
            id: 1,
            name: "DKI Jakarta"
        })
    }, 1000);
}

getDataCovid = (id, callbackFunc) => {
    setTimeout(() => {
        callbackFunc(
            {
                positive: 0,
                sembuh: 10000,
                meninggal: 0
            }
        )
    }, 1000)
}

getRegional(1, region => 
    {
    getProvice(region.id, province => 
        {
        getDataCovid(province.id, data => 
            {
            console.log(data)
        })
    })
}
)

//Total time di function dari ambil ke semua data ini adalah 3 second
// karena masing masing function dikasih timeOut sebanyak 1 second
// console.log(getRegional().id)