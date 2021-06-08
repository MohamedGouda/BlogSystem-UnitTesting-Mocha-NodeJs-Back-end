var store = require('../Models/artical');
var queries = require('../Database/queries')
var db_connection = require('../Database/connection')

exports.getAuthorsList =async  (req, res)=>
{
    try{
        
        var listQuery = queries.authorQueryList.getAuthorsList_Query ;
        var data = await db_connection.dbQuery(listQuery);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to list the authors'});
    }
}

exports.getAuthorById =async  (req, res)=>
{
    try{
        if(! req.body.id )
            return res.status(500).send({"error Message" :"some required data are not provided..."});

        var listQuery = queries.authorQueryList.getAuthorById_Query ;
        var data = await db_connection.dbQuery(listQuery , req.body.id);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to save author'});
    }
}


exports.saveAuthor =async  (req, res)=>
{
    try{
        if(! req.body.name || ! req.body.job_title)
          return res.status(500).send({"error Message" :"some required data are not provided..."});
        
        params = [req.body.name , req.body.job_title];

        var listQuery = queries.authorQueryList.saveAuthor_Query ;
        var data = await db_connection.dbQuery(listQuery , params);
        return res.status(200).send(JSON.stringify(data.rows));

    }catch(error){
        console.log(error);
        return res.status(500).send({error: 'faild to save author'});
    }
}

