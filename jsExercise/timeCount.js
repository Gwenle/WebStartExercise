const { exit } = require('process');
const {spawn} = require('child_process');

const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
readline.question('plese input a minute number\n', minute => {
    let i=1;
    let countfun=setInterval(()=>{
        console.log("time remaining "+(minute-i++)+" minute");
        const processO=spawn('python3',['./weakUp.py']);
        processO.stdout.on('data',function(data){
            console.log(data.toString());
        });
    },60000);
    setTimeout(() => {
        clearInterval(countfun);
        //console.log(minute);
        const player = require("play-sound")(opts={});
        // path是音频文件的路径
        player.play(
            '../Avicii; Sterling Fox - Talk To Myself.mp3'
            // "../清枫徐月 - 洛克王国原声带-洛克王国雪人谷（清枫徐月 remix）.mp3"
        , (err) => {
            if (err) {
                //reject();
                console.log(err);
            }
            console.log('play-finished'); 
            exit(0);
        });
    }, minute * 60000)
});