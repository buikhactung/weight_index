let weight = parseFloat(prompt("Nhap can nang"));
let height = parseFloat(prompt("nhap chieu cao"));
 bmi = weight/(height*height);
if (bmi<18.5) {
    document.write("underWeight");
    }else if (bmi <=25) {
    document.write("Normal");

        }else if (bmi<= 30) {
    document.write("Overweight");
}else {
    document.write("Obese");
}