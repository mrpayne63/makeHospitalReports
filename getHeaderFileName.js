
var getName = function getName(thisReportID) {
	
    var thisReportHearedCSV = '';
    switch (thisReportID.substring(0,4))
    {
       case "A000":
          thisReportHearedCSV = 'headers/templates/A000Header.csv';
          //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
           break;
       case "A600":
           thisReportHearedCSV = 'headers/templates/A600Header.csv';
           //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/A600Header.csv'));
            break;
       case "A700":
           thisReportHearedCSV = 'headers/templates/A700Header.csv';
           //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
           //fs.writeFileSync('headers/inserts/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
           break;
       case "A800":
           thisReportHearedCSV = 'headers/templates/A800Header.csv';
           //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
           //fs.writeFileSync('headers/inserts/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
           break;
       case "A810":
           thisReportHearedCSV = 'headers/templates/A810Header.csv';
           //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
           //fs.writeFileSync('headers/inserts/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
           break;
       case "A820":
           thisReportHearedCSV = 'headers/templates/A820Header.csv';
           //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
           // fs.writeFileSync('headers/inserts/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
           break;
       case "B000":
    		thisReportHearedCSV = 'headers/templates/'+thisReportID+ '.csv';
    		//fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
    		//fs.writeFileSync('headers/inserts/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    		break;
       case "B100":
    		thisReportHearedCSV = 'headers/templates/B100Header.csv';
    		//fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
    		//fs.writeFileSync('headers/inserts/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    		break;
       case "B200":
    		thisReportHearedCSV = 'headers/templates/B200Header.csv';
    		//fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
    		////fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    		break;
       case "C000":
    	    thisReportHearedCSV = 'headers/templates/'+thisReportID+ '.csv';
    	    //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
    		//fs.writeFileSync('headers/inserts/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    		break;
      case "C100":
    		thisReportHearedCSV = 'headers/templates/C100Header.csv';
    		//fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
    		//fs.writeFileSync('headers/inserts/'+thisReportID+ '.csv', fs.readFileSync('headers/inserts/'+thisReportID+'.csv'));
    		break;
      case "D200":
          thisReportHearedCSV = 'headers/templates/D200Header.csv';
          //fs.writeFileSync('headers/inserts/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/D200XXX.csv'));
           break;
       case "X300":
           thisReportHearedCSV = 'headers/templates/D300Header.csv';
         //  fs.writeFileSync('headers/inserts/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
           break;
       case "X400":
           thisReportHearedCSV = 'headers/templates/D400Header.csv';
          // fs.writeFileSync('headers/inserts/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
           break;
       case "G000":
           thisReportHearedCSV = 'headers/templates/G000Header.csv';
          //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
            break;
        case "G100":
            thisReportHearedCSV = 'headers/templates/G100Header.csv';
            //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
            break;
        case "G200":
            thisReportHearedCSV = 'headers/templates/G200Header.csv';
           //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
            break;
        case "G300":
            thisReportHearedCSV = 'headers/templates/G300Header.csv';
            //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
            break;
        case "H010":
            thisReportHearedCSV = 'headers/templates/H010Header.csv';
            //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync(thisReportHearedCSV));
            break;                     
        case "S000":
    		thisReportHearedCSV = 'headers/templates/'+thisReportID+ '.csv';
    		//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    		break;
        case "S100":
    		thisReportHearedCSV = 'headers/templates/S100Header.csv';
    		//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    		break;
        case "S200":
    		thisReportHearedCSV = 'headers/templates/'+thisReportID+ '.csv';
    		//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    		break;
        default:
    	   thisReportHearedCSV = 'NoHeader.csv';
    	   
    	   switch (thisReportID.substring(0,2))
           {
           case "A8":
         	  if(thisReportID.substring(2,1)=='3'){
         		  thisReportHearedCSV = 'headers/inserts/A83000.csv';
    			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    			//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
         	  }else{
         		  console.log("New Report Number " + thisReportID);
         	  }
     
              break;
              
              
           case "D0":
         	  //console.log("CHECK "+thisReportID.substring(thisReportID.length-1,thisReportID.length));
               
        	   if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='3'){
          		  thisReportHearedCSV = 'headers/templates/D0_3Header.csv';
          		  //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/D0_3Header.csv'));
            	  }
          	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='4'){
          		thisReportHearedCSV = 'headers/templates/D0_4Header.csv';
        		  //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/D0_4Header.csv'));
          	  }
          	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='5'){
          		thisReportHearedCSV = 'headers/templates/D0_5Header.csv';
        		  //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/D0_5Header.csv'));
          	  }
          	  break;
           case "D1":
        	   thisReportHearedCSV = 'headers/inserts/D1_1Header.csv';
    			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
        	   //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/D1_1Header.csv'));
               break;
           case "D3":
        	   thisReportHearedCSV = 'headers/inserts/D300Header.csv';
    			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
        	   //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/D300Header.csv'));
               break;
           case "D4":
        	   thisReportHearedCSV = 'headers/inserts/D400Header.csv';
    			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
        	   //fs.writeFileSync('headers/inserts2/'+thisReportID+'.csv', fs.readFileSync('headers/inserts/D400Header.csv'));
               break;
           case "D5":
          	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='1'){
          		  thisReportHearedCSV = 'headers/templates/D500001.csv';
     			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
     			//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync('headers/inserts/D500001.csv'));
          	  }
          	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='2'){
          		  thisReportHearedCSV = 'headers/templates/D500002.csv';
     				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
          		//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync('headers/inserts/D500002.csv'));
            	  }
          	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='3'){
          		  thisReportHearedCSV = 'headers/templates/D500003.csv';
     				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
          		//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync('headers/inserts/D500003.csv'));
            	  }
          	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='4'){
          		  thisReportHearedCSV = 'headers/templates/D500004.csv';
     				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
          		//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync('headers/inserts/D500004.csv'));
            	  }
          	  break;
            case "E1":
         	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='1'){
         		  thisReportHearedCSV = 'headers/inserts/E100001.csv';
    			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    			//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
         	  }
         	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='2'){
         		  thisReportHearedCSV = 'headers/inserts/E100002.csv';
    			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    			//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
         	  }
              break;
            case "E2":
         	  
         	  thisReportHearedCSV = 'headers/inserts/E200000.csv';
    			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    			//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
         	 
              break;
           case "E3":
         	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='1'){
         		  thisReportHearedCSV = 'headers/inserts/E300001.csv';
    			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    			//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
         	  }
         	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='2'){
         		  thisReportHearedCSV = 'headers/inserts/E300002.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
           	  }
         	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='3'){
         		  thisReportHearedCSV = 'headers/inserts/E300003.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
           	  }
         	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='4'){
         		  thisReportHearedCSV = 'headers/inserts/E300004.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
           	  }
         	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='5'){
         		  thisReportHearedCSV = 'headers/inserts/E300005.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
           	  }
         	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='6'){
         		  thisReportHearedCSV = 'headers/inserts/E300006.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
           	  }
         	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='7'){
         		  thisReportHearedCSV = 'headers/inserts/E300007.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
           	  }

              break;
           case "E4":
         	  
         	  thisReportHearedCSV = 'headers/inserts/E400000.csv';
    			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    			//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
           	                    	 
     		  break;
              
              
              
              
              
           
           		case "E0":
            	  //console.log("CHECK "+thisReportID.substring(thisReportID.length-1,thisReportID.length));
                  
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='A'){
            		  	thisReportHearedCSV = 'headers/inserts/E00000A.csv';
    					//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    					//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
    				

            	  
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='B'){
            		  thisReportHearedCSV = 'headers/inserts/E00000B.csv';
    					//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    					//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
            	  
                 break;
              case "E1":
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='1'){
            		  thisReportHearedCSV = 'headers/inserts/E100001.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='2'){
            		  thisReportHearedCSV = 'headers/inserts/E100002.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
                 break;
              case "E2":
            	  
            	  thisReportHearedCSV = 'headers/inserts/E200000.csv';
    			//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    			//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	 
                 break;
              case "E3":
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='1'){
            		  thisReportHearedCSV = 'headers/inserts/E300001.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='2'){
            		  thisReportHearedCSV = 'headers/inserts/E300002.csv';
    					//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    					//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
              	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='3'){
            		  thisReportHearedCSV = 'headers/inserts/E300003.csv';
    					//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    					//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
              	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='4'){
            		  thisReportHearedCSV = 'headers/inserts/E300004.csv';
    					//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    					//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
              	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='5'){
            		  thisReportHearedCSV = 'headers/inserts/E300005.csv';
    					//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    					//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
              	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='6'){
            		  thisReportHearedCSV = 'headers/inserts/E300006.csv';
    					//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    					//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
              	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='7'){
            		  thisReportHearedCSV = 'headers/inserts/E300007.csv';
    					//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    					//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
              	  }

                 break;
              case "E4":
            	  
            	  thisReportHearedCSV = 'headers/inserts/E400000.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
              	                    	 
        		  break;
        		  
              case "H1":
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='1'){
            		  thisReportHearedCSV = 'headers/inserts/H100001.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='2'){
            		  thisReportHearedCSV = 'headers/inserts/H100002.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
                 break;
                 

              case "H2":
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='1'){
            		  thisReportHearedCSV = 'headers/inserts/H200001.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='2'){
            		  thisReportHearedCSV = 'headers/inserts/H200002.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
                 break;
              case "H3":
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='1'){
            		  thisReportHearedCSV = 'headers/inserts/H300001.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='2'){
            		  thisReportHearedCSV = 'headers/inserts/H300002.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
                 break;
              case "H4":
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='1'){
            		  thisReportHearedCSV = 'headers/inserts/H400001.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
            	  if(thisReportID.substring(thisReportID.length-1,thisReportID.length)=='2'){
            		  thisReportHearedCSV = 'headers/inserts/H400002.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
            	  }
                 break;
                 
              case "H5":
            	  
            	  thisReportHearedCSV = 'headers/inserts/H500000.csv';
    				//fs.writeFileSync('headers/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
    				//fs.writeFileSync('headers/inserts2/'+thisReportID+ '.csv', fs.readFileSync(thisReportHearedCSV));
              	                    	 
        		  break;	
                 
              default:
           
           }
                                	  
                    	   
                    	   
                           //console.log(' **************** NO HEADER for Report '+ rows2[i].WKSHT_CD +'******************');

    }

    return thisReportHearedCSV;
}

module.exports = {
  getName : getName
};