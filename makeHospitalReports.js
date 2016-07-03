var getHeaderFileName = require('./getHeaderFileName.js');
var fs = require('fs');
var mysql = require('mysql');
var entity = process.argv[2];
var schema = 'HCRIS';
var table = 'STRONG_DATA_2013';
var tmpSheetLetter = 'FIRST';
var prod = false;
var baseDir = 'debug/';

if(prod) {
	baseDir = 'reports/';
}

if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
}

var sql = "select RPT_REC_NUM,WKSHT_CD from "+schema+"."+table+" group by RPT_REC_NUM,WKSHT_CD order by RPT_REC_NUM,WKSHT_CD";

if(entity){
	sql = "select RPT_REC_NUM,WKSHT_CD from "+schema+"."+table+" where RPT_REC_NUM = "+entity+" group by RPT_REC_NUM,WKSHT_CD order by RPT_REC_NUM,WKSHT_CD";
}

var spacerArray = createArray(4,6);
spacerArray[0][0] = '----------------';
spacerArray[0][1] = '----------------';
spacerArray[0][2] = '----------------';
spacerArray[0][3] = '----------------';
spacerArray[0][4] = '----------------';
spacerArray[0][5] = '----------------';
spacerArray[1][0] = '----------------';
spacerArray[1][1] = '----------------';
spacerArray[1][2] = '----------------';
spacerArray[1][3] = '----------------';
spacerArray[1][4] = '----------------';
spacerArray[1][5] = '----------------';

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }
    return arr;
}

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'nodeuser',
    password : 'Cheese2000',
    database : schema
});

connection.connect(function(err) {
    if (!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

var connection2 = mysql.createConnection({
    host : 'localhost',
    user : 'nodeuser',
    password : 'Cheese2000',
    database : schema
});

connection2.connect(function(err) {
    if (!err) {
        console.log("Database2 is connected ... nn");
    } else {
        console.log("Error2 connecting database ... nn");
    }
});

connection.query(sql,function(err, rows) {
	 var tmpHospID = rows[0].RPT_REC_NUM;
     var tmpReportID = rows[0].WKSHT_CD;
     var tmpSheetLetter = 'FIRST';
     var sheetArray = new Array();
     var sheetArrayPROD = new Array();
     var reportArray2 = new Array();
     var thisReportHeared = new Array();
     var thisReportHearedCSV = '';
     var tmpLine0 = new Array();
     
	for (i = 0; i < rows.length; i++) {
        tmpLine0[0] = rows[i].WKSHT_CD + ' Report';
        sql2 = "select RPT_REC_NUM,WKSHT_CD,LINE_NUM,CLMN_NUM,item myvalue from "+schema+"."+table
        	+" where RPT_REC_NUM like '" + rows[i].RPT_REC_NUM
            + "' and WKSHT_CD like '" + rows[i].WKSHT_CD
            + "' order by RPT_REC_NUM,WKSHT_CD,LINE_NUM,CLMN_NUM";
        
        connection2.query(sql2,    function(err, rows2) {
            
        	mydir = baseDir + rows2[0].RPT_REC_NUM;

            if (!fs.existsSync(mydir)) {
                fs.mkdirSync(mydir);
            }
            
            var myfile2 = mydir + '/' + tmpReportID + '.csv';
            var tmpLineNUM = '';
            var tmpColumnNUM = '';
            var newFile = true;
            var tmpArray2 = new Array();
            var tmpLine = '';
            var lineCount = 1;

            for (i = 0; i < rows2.length; i++) {

                var thisHospID = rows2[i].RPT_REC_NUM;
                var thisReportID = rows2[i].WKSHT_CD;
                var thisLineNUM = rows2[i].LINE_NUM;
                var thisColumnNUM = rows2[i].CLMN_NUM;
                var thisSheetLetter = rows2[i].WKSHT_CD.substring(0,1);

                thisReportHearedCSV = getHeaderFileName.getName(thisReportID);

                if (!fs.existsSync(thisReportHearedCSV)) {
                	thisReportHearedCSV = 'NoHeader.csv';
                }
                
                if(tmpSheetLetter != thisSheetLetter){
                     sheetArray = new Array();
                    tmpSheetLetter = thisSheetLetter;
                }
                if (tmpHospID != thisHospID) {
                    tmpHospID = thisHospID;
                    newFile = true;
                }
                if (tmpReportID != thisReportID) { 
                	tmpReportID = thisReportID;
                    newFile = true;
                }
                if (newFile) { 
                    myfile2 = mydir + '/' + schema + '-' + table + '-' 
                            +thisHospID  + '-'+ rows2[i].WKSHT_CD + '.csv';
                    newFile = false;
                }

                if (tmpLineNUM != thisLineNUM) {
                    if (tmpLineNUM) {
                        tmpArray2[0] = 'Line(' + tmpLineNUM +')';
                        reportArray2[lineCount++] = tmpArray2;
                        tmpArray = new Array();
                        tmpArray2 = new Array();

                    }
                    tmpLineNUM = thisLineNUM;
                }

                tmpColumnNUM = parseInt(thisColumnNUM) / 100;
                tmpLine0[tmpColumnNUM + 1] = 'Entity[' +thisHospID + '] Report(' + rows2[i].WKSHT_CD + '[' +thisColumnNUM + '])';
                

                var someText = rows2[i].myvalue;
                someText = someText.replace(/(\r\n|\n|\r)/gm, "");
                tmpArray2[tmpColumnNUM + 1] = someText;

            }  // end row2 for loop
            
            tmpLine0[0] =  'Entity[' +thisHospID + '] Report(' + thisReportID + ')';
            if (prod){ 
            	for(i=1;i<tmpLine0.length;i++){
	            	tmpLine0[i] =  '___________';
	            }
            }
            var data2 ;
            
            if(thisReportHearedCSV)
            {
                var cells = [];
                var fileContents = fs.readFileSync(thisReportHearedCSV);
                var lines = fileContents.toString().split('\n');
                var headerString = 'Schema: ' + schema + " TABLE: " + table + ',----------, Entity ' +thisHospID + ', Report ' + thisReportID + ' ,-------------,-------------,-----------,';
                var getLines = lines.length;
                cells.push(headerString.toString().split(','));
                for (var i = 1; i < getLines; i++) {
                	//console.log(lines[i].length)
                    if(lines[i].length){
                    	cells.push(lines[i].toString().split(','));
                    }
                }
                data2 = cells;
            }
            
            reportArray2[0] = tmpLine0;
            if(data2){
                data2 = data2.concat(reportArray2);
                reportArray2 = data2;
            }

            
            if (!prod) {
				var mycsv = reportArray2.map(function(d) {
					return JSON.stringify(d);
				}).join('\n').replace(/(^\[)|(\]$)/mg, '').replace(/null/mg,
						' ');
				fs.writeFile(myfile2, mycsv, function(err) {
					if (err)
						throw err;
					console.log(myfile2 + ' saved');
				});
			}
			sheetArray = sheetArray.concat(reportArray2);
            sheetArray = sheetArray.concat(spacerArray);


            reportArray2 = new Array();
            tmpLine0 = new Array();
            
            tmpFile2 = mydir + '/'+ schema + '-' + table + '-Sheet' + tmpSheetLetter + '.csv';

            sheetArrayPROD = createArray(sheetArray.length, 20);

                for (var s = 0; s < sheetArray.length; s++) {
                    //console.log(sheetArray[s].length);
                    for (var t = 1; t < sheetArray[s].length; t++) {
                    	sheetArrayPROD[s][t - 1] = sheetArray[s][t];
                    }

                }
        
            if (!prod) {
				var csv4 = sheetArray.map(function(d) {
					return JSON.stringify(d);
				}).join('\n').replace(/(^\[)|(\]$)/mg, '').replace(/null/mg,
						' ');
				fs.writeFile(tmpFile2, csv4, function(err) {
					if (err)
						throw err;
					console.log(tmpFile2 + ' saved');
				});
			}
			var tmpFile3 = mydir + '/'+thisHospID+'-Sheet_' + tmpSheetLetter + '.csv';

            var csv5 = sheetArrayPROD.map(function(d) {
                return JSON.stringify(d);
            }).join('\n').replace(/(^\[)|(\]$)/mg, '')
            .replace(/null/mg, ' ');

            fs.writeFile(tmpFile3, csv5, function(err) {
                if (err)
                    throw err;
                console.log(tmpFile3 + ' saved');
            }); 
            
        }); // end connection2 callback

    } // end top for loop
	

}); // end connection callback
