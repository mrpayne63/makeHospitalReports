var mysql     =    require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'nodeuser',
    password : 'Cheese2000',
    database : 'HCRIS'
});

connection.connect(function(err) {
    if (!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

   

        
        connection.query("select * from STRONG_DATA_2013",function(err,rows){
            
            if(!err) {
                var i = 0;
            	console.log(rows.length);
                for(i=0;i<rows.length;i++){
                	console.log(i);
                	
                }
                if(i==rows.length)process.exit(0);
            }           
        });



