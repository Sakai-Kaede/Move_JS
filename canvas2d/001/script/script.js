(()=>{
    function initialize(){
        //HTML上のcanvasにはid属性が振られているので
        //querySelectを利用して参照し、変数に格納する
        canvas = document.body.querySelector('#main_canvas');

        //canvasの大きさをウィンドウ全体を覆うように変更する
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //canvasからコンテキストを取得する
        ctx = canvas.getContext('2d');
    }

    function render(){
        //canvas全体を黒く塗りつぶすためのスタイルを設定する
        ctx.fillStyle = '#000000';

        //canvas全体を塗りつぶす
        //@param{number} x-塗りつぶす矩形の左上角のX座標
        //@param{number} y-塗りつぶす矩形の左上角のY座標
        //@param{number} w-塗りつぶす矩形の横幅
        //@param{number} y-塗りつぶす矩形の高さ
        ctx.fillRect(0,0,canvas.width,canvas.height); 
    }

    window.addEventListener('load',()=>{
        initialize(); //初期処理を行う
        render(); //描画処理を行う
    },false);






})();