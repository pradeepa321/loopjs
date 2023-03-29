	var a=345;
	var sum=0;
	while(a>0){
		b=a%10;
		a=(a-b)/10;
		sum=sum*10+b;
		
	}
	
	while(sum){
		ab=sum%10;
		sum=(sum-ab)/10;
		
		if(ab==1){
			
			document.write("one");
		}
		else if(ab==2){
			
			document.write("two");
		}
		else if(ab==3){
			
			document.write("three");
		}
		else if(ab==4){
			
			document.write("four");
		}
		else if(ab==5){
			
			document.write("five");
		}
		else if(ab==6){
			
			document.write("six");
		}
		else if(ab==7){
			
			document.write("seven");
		}
		else if(ab==8){
			
			document.write("eight");
		}
		else if(ab==9){
			
			document.write("nine");
		}
		else if(ab==0){
			
			document.write("zero");
		}
		
		
	}
	