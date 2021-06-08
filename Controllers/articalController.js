var artical = require('../Models/artical');
var queries = require('../Database/queries')
var db_connection = require('../Database/connection')

exports.getArticalsList = async  (req, res)=>
{
    try{
        
        var listQuery = queries.articalQueryList.getAtricalsList_Query ;
        var data = await db_connection.dbQuery(listQuery);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to list the Articals'});
    }
}

exports.getArticalById =async  (req, res)=>
{
    try{
        var id = req.body.atricalId;
        var listQuery = queries.articalQueryList.getArticalById_Query ;
        var data = await db_connection.dbQuery(listQuery , id);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to list the Articals'});
    }
}


exports.createArtical =async  (req, res)=>
{
    try{
        if( ! req.body.title || ! req.body.body || ! req.body.author )
            return res.status(500).send({"error Message" :"some required data are not provided..."});

        atricalData =[req.body.title , req.body.body , req.body.author];
        var listQuery = queries.articalQueryList.saveAtrical_Query ;
        var data = await db_connection.dbQuery(listQuery, atricalData);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to create the Atrical'});
    }
}


exports.searchByTitle =async  (req, res)=>
{
    try{
        if( ! req.body.title )
            return res.status(500).send({"error Message" :"some required data are not provided..."});


        var listQuery = queries.articalQueryList.searchByTitle_Query ;
        var data = await db_connection.dbQuery(listQuery , req.body.title);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to list the Atrical'});
    }
}


exports.searchByAuthor =async  (req, res)=>
{
    try{
        if( ! req.body.author )
            return res.status(500).send({"error Message" :"some required data are not provided..."});


        var listQuery = queries.articalQueryList.searchByAuthor_Query ;
        var data = await db_connection.dbQuery(listQuery , req.body.author);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to list the Atrical'});
    }
}


exports.searchBybody = async  (req, res)=>
{
    try{
        if( ! req.body.body )
            return res.status(500).send({"error Message" :"some required data are not provided..."});


        var listQuery = queries.articalQueryList.searchByBody_Query ;
        var data = await db_connection.dbQuery(listQuery , req.body.body);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to list the Atrical'});
    }
}


exports.addThumbsUp_Query = async  (req, res)=>
{
    try{
        if( ! req.body.articalId )
            return res.status(500).send({"error Message" :"some required data are not provided..."});


        var listQuery = queries.articalQueryList.addThumbsUp_Query ;
        var data = await db_connection.dbQuery(listQuery);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to list the Atrical'});
    }
}