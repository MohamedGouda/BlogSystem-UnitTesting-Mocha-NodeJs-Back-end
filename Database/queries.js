exports.articalQueryList={
    getAtricalsList_Query :'SELECT * FROM "BlogSystem".artical;',
    searchByAuthor_Query  :'SELECT * FROM "BlogSystem".artical  join "BlogSystem".author on artical.author_id = author.author_id where auhtor.name =$1;',
    getArticalById_Query  :'SELECT * FROM "BlogSystem".artical where artical_id =$1;',
    searchByTitle_Query   :'SELECT * FROM "BlogSystem".artical where artical_title =$1;',
    searchByBody_Query    :'SELECT * FROM "BlogSystem".artical where artical_body like \'%$1%\';',
    addThumbsUp_Query     :'alter table "BlogSystem".artical set  thumbsUpCount = thumbsUpCount+1 ',
    saveAtrical_Query     : 'INSERT INTO "BlogSystem".artical (atrical_title, atrical_body, atrical_author) VALUES($1, $2, $3);',
}


exports.authorQueryList={
    getAuthorsList_Query :'SELECT * FROM "BlogSystem".author;',
    getAuthorById_Query  :'SELECT * FROM "BlogSystem".author where author_id = $1',
    saveAuthor_Query     :'insert into '
}


exports.commentQueryLis={
    getCommentByArticalId_Query:"",
    saveCommentToArtical_Query :""
}