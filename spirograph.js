
width = 1000
height = width
function drawaxes()
{
    var c = document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var x = width/2;
    var y = 0;
    for(y=0;y<=height;y++)
    {
        ctx.fillRect(x,y,1,1);
    }
    y = height/2;
    for(x=0;x<=width;x++)
    {
        ctx.fillRect(x,y,1,1);
    }  
}

function drawGraph(choice)
{
    var c = document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var theeta = 0;
    for( theeta=0; theeta<2*Math.PI; theeta+=5*(Math.PI)/180 )
    {
        console.log("Inside theeta for loop");
        if(choice===1 || choice === 2 || choice === 3)
        {
            var alpha = 0;
            for(alpha = theeta;alpha<theeta+2*Math.PI;alpha+=Math.PI/180)
            {
                if(choice===1)
                {
                    var r = 500*Math.sin(alpha);
                    var x = Math.round(r*Math.cos(alpha));
                    var y = Math.round(r*Math.sin(alpha));
                }
                else if(choice===2)
                {
                    var r = 500*Math.sin(alpha)*Math.sin(alpha);
                    var x = Math.round(r*Math.cos(alpha));
                    var y = Math.round(r*Math.sin(alpha));
                }
                else if(choice===3)
                {
                    var x = Math.round(50*Math.cos(alpha));
                    var y = Math.round(50*Math.sin(alpha)-450);
                }
                var xnew = Math.round(x*Math.cos(theeta)+y*Math.sin(theeta))+width/2;
                var ynew = Math.round(y*Math.cos(theeta)-x*Math.sin(theeta))+height/2;
                ctx.fillRect(xnew,ynew,3,3);
            }
            if(choice===2)
            {
                theeta += 4*Math.PI/180;
            }
        }
        else
        {
            var x;
            for(x=-500;x<=500;x++)
            {
                if(choice===4)
                {
                    var y = x;
                }
                else if(choice===5)
                {
                    if(x>=-500 && x<0)
                    {
                        var y = -x;
                    }
                    else{
                        var y = x + 50;
                    }
                }
                else if(choice===6)
                {
                    if(x>=-500 && x<0)
                    {
                        var y = x;
                        if(y<=-250)
                        {
                            y = -500-x;
                        }
                    }
                    else{
                        var y = -x;
                        if(y<=-250)
                        {
                            y = x - 500;
                        }
                    }
                }
                var xnew = Math.round(x*Math.cos(theeta)+y*Math.sin(theeta))+width/2;
                var ynew = Math.round(y*Math.cos(theeta)-x*Math.sin(theeta))+height/2;
                ctx.fillRect(xnew,ynew,3,3);
            }
        }
        console.log('done!');
    }    
}
drawaxes();
drawGraph(6);
