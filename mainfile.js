var express=require("express");
var app=express();
var mysql=require("mysql");

var con=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"system",
	database:"departments"
});
con.connect(function(err){
    	if(err) throw err;
    	console.log("Connected to MySql Server!");
});

app.get('/')

app.get('/save',function(req,res){
	data={
		"email":req.query.email,
		"password":req.query.password,
		"address":req.query.address,
		"gender":req.query.gender
	};
    console.log(data);

    
    	var sql="INSERT INTO reg_students VALUES('"+data.email+"','"+data.password+"','"+data.address+"','"+data.gender+"');";
    	con.query(sql,function(err,result){
    		if(err) throw err;
    		else{
    	res.sendFile(__dirname+"/"+"login.html");
    	//res.render('login');

    		}
	
    	});
   

	});

app.get('/login',function(req,res){
	data={
		"email":req.query.email,
		"password":req.query.password
	  };
console.log(data);
var sql=" select * from reg_students where s_email='"+data.email+"' AND s_password='"+data.password+"';";
con.query(sql,function(err,result){
    		if(err)
    			console.log(err);
    		else if(!!result){
    			console.log(result);
    			res.sendFile(__dirname+"/"+"editmyinfo.html")
    			//res.redirect('/display'); 

    		}
    		    		}
    		   	
    );

	});

app.get('/display',function(req,res){
	
        var sql="SELECT * FROM reg_students;";
    	con.query(sql,function(err,result){
    		if(err)
    			console.log(err);
    		else
    		res.send(result);
    	
      });

	});



app.listen('8080',function(){
	console.log('Server is listening at : 8080');
})