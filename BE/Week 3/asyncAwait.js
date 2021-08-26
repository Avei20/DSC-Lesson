// disini codingannya akan lebih enak dilihat daripada promise sama callback 
// sehingga lebih mudah dipahami 
// kalo pake promise maka akan banyak then then then tehn 
// kalo pake asycn await ini dia kliatan kaya code sync biasa
// ini di ES7

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

// kesimpulannya adalah async await cuma dipake untuk ngegantiin console log . then yang banyak di promise 

async function showData() // butuh jadi function biasa jadi ga butuh arrow function
{
    try 
    {
        let region = await getRegional(1)
        let province = await getProvice (region.id)
        let data = await getDataCovid (province.id)

        console.log (data)
    }
    catch (error)
    {
        console.log (error)
    }
}

showData()
