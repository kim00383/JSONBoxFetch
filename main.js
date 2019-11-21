   //we want to fetch multiple things
        //or multiple copies of the same thing
        let log = console.log;
        
        let datafile1 = fetch('https://jsonbox.io/box_3390e112199225391878');

        
        Promise.all([datafile1])
        .then( files =>{
            files.forEach(file=>{
                process( file.json() );
            })
            //files[0].json()
            //files[1].json()
        })
        .catch(err=>{
            console.log(err);
        });
        
        let process = (prom) =>{
            prom.then(data=>{
                console.log(data);
                 let h3=document.createElement('h3');
                h3.textContent=data[0].title;
                let output=document.getElementById('output');
                output.appendChild(h3);
                let p = document.createElement('p');
                let span=document.createElement('span'); span.textContent="Date";
                let span2=document.createElement('span'); span2.textContent="To do";
                p.className="pActHeader";
                p.appendChild(span);
                p.appendChild(span2);
                output.appendChild(p);
               data[0].activitis.forEach(items=>{
                    
                   
                    let p = document.createElement('p');
                    p.className="pAct"
                        for(x in items){
                            if(x=="date"||x=="todo"){
                                let span=document.createElement('span');

                                span.textContent=(items[x]);
                                p.appendChild(span);
                            }
                          
                        };
                        p.addEventListener("mouseover",function(){
                            this.classList.add("bounce","animated");
                        });
                        p.addEventListener("mouseout",function(){
                            this.classList.remove("bounce","animated")
                        });
                       
                     document.getElementById('output').appendChild(p);
       

              
            });
        });
    };