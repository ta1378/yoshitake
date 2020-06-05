// console.log('Hello wolrd');

// console.log('Hello student');
// console.log('Goodbye Teacher');
// console.log('Nice Job');

// alert("Hello world");

// alert("Hello student");
// alert("Goodbye Teacher");
// alert("Nice Job");

// var message = "Hellow wolrd";
// console.log(message);
// message = "Good night wolrd";
// console.log(message);

// let hoge = 'Hello'
// console.log(hoge)
// hoge = 'Goodbye'
// console.log(hoge)

// let fruits = 'apple'
// if ( fruits == 'apple') {
//     console.log('りんご')
// }　else if (fruits == 'orange') {
//     console.log('みかん')
// }　else {
//     console.log('みかんとりんごしか知らないよ')
// }

// const apple = 200;
// const orange = 100;
// let price = 0;
// price = apple * 5 + orange * 3;
// console.log("合計金額 = " + price + "円");

// let price = 1000
// let tax = 1.1
// console.log(price * tax) 

// const apple = 200;
// const orange = 100;
// if (apple == orange) {
//     console.log("同じ値です");
// }
// else {
//     console.log("数値が正しくありません。");
// }

// const test = 80;
// if (test <= 100 && test >= 50) {
//     console.log("よくがんばりました");
// }
// else {
//     console.log("もう少し頑張ろう");
// }

// var scoreA = 80 + 90 + 60 + 85 + 100;
// var scoreB = 40 + 30 + 50 + 25 + 60;
// console.log(scoreA + scoreB);
// if (scoreA >= 300 && scoreB >= 300) {
//     console.log("素晴らしい");
// } else if (scoreA >= 300 || scoreB >= 300) {
//     console.log("普通")
// }　else if(scoreA <=300 && scoreB <=300) {
//     console.log("頑張ろう");
// }

// let array = ['太郎', '次郎', '三郎', '四郎', '五郎'];
// console.log(array);
// var value = array[0];
// console.log(value);

// let array = ['太郎', '次郎', '三郎', '四郎', '五郎'];
// var length = array.length;
// console.log(length);
// var index = array.indexOf('次郎');
// console.log(index);

// let array = ['太郎', '次郎', '三郎', '四郎', '五郎'];
// console.log(array[1]);
// array[2] = 'だーれだ'
// console.log(array[2])
// Console.log(array.length *10)

// console.log(Math.random());
// console.log(Math.ceil(5.4));
// console.log(Math.floor(5.4));
// console.log(Math.round(5.4));
// console.log(Math.floor(Math.random() * 20))

// let person = '太郎';
// switch (person) {
//     case '太郎':
//         console.log('太郎さん');
//         break;
//     case '次郎':
//         console.log('次郎さん');
//         break;
// }

// var omikuji = ['大吉', '中吉', '小吉', '末吉', '凶', '大凶'];
// var random = omikuji[Math.floor(Math.random() * omikuji.length)];
// switch (random) {
//     case '大吉':
//         alert("大吉です！")
//         break;
//     case '中吉':
//         alert("中吉です！")
//         break;
//     case '小吉':
//         alert("小吉です！")
//         break;
//     case '末吉':
//         alert("末吉です！")
//         break;
//     case '凶':
//         alert("凶です！")
//         break;
//     case '大凶':
//         alert("大凶です！")
//         break;
// }
// let lists = ['太郎', '次郎', '三郎', '四郎', '五郎'];
// console.log(lists[0]);
// console.log(lists[1]);
// console.log(lists[2]);
// console.log(lists[3]);
// console.log(lists[4]);

// for ( var i = 0; i < lists.length; i++ ) {
//     console.log (lists [ i ] );
// }
// for ( let i = 0; i < 50; i++ ) {
//     if  (i % 15 == 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

// var water = 1000;
// var drinkWater;
// while (water > 0) {
//     drinkWater = Math.floor(Math.random() * 250) + 1;
//     console.log('今日は' + drinkWater + 'mlを飲んだ');
//     water = water - drinkWater;
// }
// console.log('水を飲みほした');

// var box = document.getElementById('box')
//  box.innerHTML = '<p>追加されたよ！</p>'
//  box.setAttribute('class', 'text');
//  var text = document.getElementsByClassName('text')
//  console.log(box)


// let advices = ["良くできました", "普通です", "もう少し頑張りましょう"]
// let advice = (number) => {
//     return advices[number]
// }
// console.log(advice(0))
// console.log(advice(1))
// console.log(advice(2))

// $(function() {

// });

// $("セレクタ　(classやid) ")
// $(".test")
// $("#test")

// $(".test") .on ('イベント名' , fuction () {});

// $(".test") .on ('click' , function () {
//     $(".test1") .addClass ("action");
// });

// $ ('.button') .click(function() {
//     $('.change') .addClass ('red')
// });

// $('.button') .click(function() {
//     $('.show') .toggle(1000)
// });

// $('.toggle') .click(function () {
//     $('.show') .slideDown(1000) .fadein(800)
// })

// $(function () {
//     $('.test') .click(function () {
//         $(this) .css('color', 'red');
//     });
// });

// $(window) .scroll(function () {
//     console.log($(this) .scrollTop());
// })

$('.test') .offset () .top;

$('セレクタ') .each(function (インデックス,エレメント) {
    ループ処理
});

$('li') .each (function (index, element) {
    console.log(index);
})
 
var array = ["あ", "い", "う", "え", "お"];
$.each(array, function (index, value) {
    console.log(value);
    console.log(index);
})

$('.text') .click(function () {
    $(this) .css ('color', 'red')
});
$("hamburger") .click(function () {
    $(this) .toggleClass ("active");
    $("menu-content") .toggleClass("open");
});
$('#top-btn') .click(function () {
    $('html,body') .animate ({
        scrollTop: 0
    },700);
})
const child = ".child";
$(child) .hide ();
$("#menu > li") .hover(function () {
    $(child, this) .stop() ,slideDown(300);
}, function () {
    $(child, this) .stop() .slideUp(300);
});