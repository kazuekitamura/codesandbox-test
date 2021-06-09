// // const,letの変数宣言
// var vall ="var変数"
// console.log(vall);
// //var変数は上書き可能
// vall = "vall上書き"
// console.log(vall);
// // 変数を再宣言
// var vall = "var再宣言"
// console.log(vall);
// let val1 = "let1変数";
// console.log(val1);
// // letは上書きが可能
// val1 = "let上書き";
// console.log(val1);
// //letは再宣言不可能
// let val1 = "let変数を再宣言";
// const val2 = "const変数";
// console.log(val2);
//constは上書きも再宣言も不可
// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけ",
//   age: 28,
// };
// console.log(val4);
// val4.name = "jak";
// val4.addres = "Hirosima",
// console.log(val4);
// constで定義したオブジェクトはプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);
//テンプレート文字列
// const name = "ジャケ";
// const age = 29;
// // 「私の名前はjakeです。年齢は２８歳です。」
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));
// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));
// // returnは省略できる
// const func3 = (str) => str;
// console.log(func3("func3です"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20))

//
// const myProfile = {
//   name:"kazue",
//   age:24,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);
// // 分割代入
// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);
//
// const myProfile = ["jyake", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// デフォルト値、引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();

//スプレッド構文...
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 =  [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、配合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// const arr7 = [...arr4,...arr5];
// console.log(arr7);
//
//mapやfilterを使った卑劣の処理
// const nameArr = ["田中", "山田", "北村"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index　 + 1}番目は${nameArr[index]}です`);
// }
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
// filterで奇数だけ取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//  return num % 2 === 1;
// });
// console.log(newNumArr);
//自分の名前だけ「さん」をつけない
// const newNameArr = nameArr.map((name) => {
//   if (name === "北村"){
//     return name
//   } else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

// 三項演算子
// 条件がtrueのとき : 条件がfalseの時
// const val1 = 1 > 0 ? `true`:`false`;
// console.log(val1);
//toLocaleStringで数字が入力されたら３桁で、を打つ、数字以外が入力されたら数値を入れてくださいと表示する
// const num = 3400;
// console.log(num.toLocaleString());
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '１００を超えています' : '許容範囲です';
// }
// console.log(checkSum(40, 60));
//論理演算子
// const flag1 = true;
// const flag2 = true;
// if (flag1 || flag2){
//   console.log("1か２はTrueになります");
// }
// if (flag1 && flag2){
//   console.log("1も２はTrueになります");
// }
// パイプライン ||は左側がfalseなら右側を返す。左側がtrueなら左を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);
// アンバサンド &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
