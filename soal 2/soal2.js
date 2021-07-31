// var listDesa = [
//     'argodadi,sedayu',
//     'argomulyo,sedayu',
//     'argorejo,sedayu',
//     'argosari',
//     'bangunjiwo,kasihan',
//     'banguntapan,banguntapan',
//     'bantul,bantul',
//     'baturetno,banguntapan',
//     'bawuran,pleret',
//     'canden,jetis',
//     'caturharjo,pandak',
//     'cetan srigandi'
// ];

// // for(i = 0; i <= listDesa.length; a++) {
// //     console.log(i + ' : ' + listDesa);
// // }

// let fLen = listDesa.length;
// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   documen.write(i + "<li>" + listDesa[i] + "</li>")
// }

const fruits = [
    'argodadi,sedayu',
    'argomulyo,sedayu',
    'argorejo,sedayu',
    'argosari',
    'bangunjiwo,kasihan',
    'banguntapan,banguntapan',
    'bantul,bantul',
    'baturetno,banguntapan',
    'bawuran,pleret',
    'canden,jetis',
    'caturharjo,pandak',
    'cetan srigandi'
];
let fLen = fruits.length;

let text = ""
for (let i = 0; i < fLen; i++) {
  document.write(i + 1 + " . " + fruits[i] + "<br>" )
}
