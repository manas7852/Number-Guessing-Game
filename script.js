let numnber;

const generate_number=() =>{
    let n1 = Math.random();
    let n2 = n1*100;
    n2 = Math.trunc(n2);
    n2 = (n2 % 100) + 1;
    number = n2;
    console.log(number);
}
// generate_number();
const generate_number_btn_click = () =>{
    document.querySelector('#section1').style.display = 'none';
    document.querySelector('#section2').style.display = 'none';
    document.querySelector('#section3').style.display = 'block';


    setTimeout(()=>{
         generate_number();
         document.querySelector('#section1').style.display = 'none';
         document.querySelector('#section2').style.display = 'block';
         document.querySelector('#section3').style.display = 'none';
    },3000)

};

//To CHeck Number
const check_number = () =>{
    let value = document.querySelector("#field").value
    if(value==number) {
        alert("Congratulation ! You Guess Right Number");
    } else if (value < 1) {
        alert("please Enter Greagter or Equal to 1 number")
    }else if (value > 100) {
        alert ("Please Enter less than or equal to 100 !")
    } else{
        alert ('Oops! Your Guess Is Wrong...')
    }
    generate_number_btn_click();
}