const {spawn} = require('child_process');

function getPositon(){
    const processO=spawn('python3',['./getMouPositon.py']);
    return new Promise((resolve)=>{ processO.stdout.on('data',function(data){
        // console.log(data.toString());
        const k=new RegExp('([0-9]*),([0-9]*)','i');
        const [,x1,y1]=data.toString().match(k);
        resolve([x1,y1]);
        });
    });
}

/*
休眠函数sleep
调用 await sleep(1500)
 */
function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms))
}
async function main() {
    let x=0,y=0;
    let TimeBef=new Date();
    while(1){
        let [xN,yN]=await getPositon();
        let TimeAft=new Date(); 
        // console.log(xN,yN);
        if(x===parseInt(xN) && parseInt(yN)===y){
            let timeStamp=Math.floor((TimeAft-TimeBef)/1000);
            if(timeStamp<=60){ //60秒内鼠标没有移动则唤醒电脑一次
            }else{
                TimeBef=new Date();
                console.log("weakUp!\n");
                const processO=spawn('python3',['./../weakUp.py']);
            }
        }else{
            TimeBef=new Date();
            [x,y]=[parseInt(xN),parseInt(yN)];
        } 
        let timeStamp=Math.floor((TimeAft-TimeBef)/1000);
        console.log("%d seconds no Move\n",timeStamp);
        console.log("Now Position is:(%s,%s)\n",xN,yN);
        await sleep(2000);    
    }
}

main()

// setInterval(()=>{
//     getPositon().then((res)=>{
//         console.log(res);
//     });
// },5000);