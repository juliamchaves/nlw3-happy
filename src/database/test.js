const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {


    //insert dados na table
    //await saveOrphanage(db, {
        //lat: "-27.222633",
        //lng: "-49.6555874",
        //name: "Lar dos meninos",
        //about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade",
        //whatsapp: "964510874",
        //images: [
            //"https://images.unsplash.com/photo-1601564921698-0166194c51ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            //"https://images.unsplash.com/photo-1580516091765-3978351061b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        //].toString(),
        //instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        //opening_hours: "Horário de visitas Das 18h até as 8h",
        //open_on_weekends: "0"
    //})

    //consulta
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar unico orph, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    //deletar dados
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '9'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '10'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '11'"))
})
    
