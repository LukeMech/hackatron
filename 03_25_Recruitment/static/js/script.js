feather.replace()
//https://twitter.com/One_div

let compare = []

const navbarCompareBtn = `
<li class="navbar__item compare-all-btn" id="compare-all-btn">
    <a class="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg><span>COMPARE</span></a>        
</li>
`
let navbarCompareBtnOnline = false;

// Expand button handler
const exp1 = document.getElementById("emp-1-exp-btn")
const cmp1 = document.getElementById("emp-1-cmp-btn")
const emp1 = document.getElementById("emp-1")
const exp2 = document.getElementById("emp-2-exp-btn")
const cmp2 = document.getElementById("emp-2-cmp-btn")
const emp2 = document.getElementById("emp-2")
const exp3 = document.getElementById("emp-3-exp-btn")
const cmp3 = document.getElementById("emp-3-cmp-btn")
const emp3 = document.getElementById("emp-3")
const exp4 = document.getElementById("emp-4-exp-btn")
const cmp4 = document.getElementById("emp-4-cmp-btn")
const emp4 = document.getElementById("emp-4")
const exp5 = document.getElementById("emp-5-exp-btn")
const cmp5 = document.getElementById("emp-5-cmp-btn")
const emp5 = document.getElementById("emp-5")
const exp6 = document.getElementById("emp-6-exp-btn")
const cmp6 = document.getElementById("emp-6-cmp-btn")
const emp6 = document.getElementById("emp-6")
const exp7 = document.getElementById("emp-7-exp-btn")
const cmp7 = document.getElementById("emp-7-cmp-btn")
const emp7 = document.getElementById("emp-7")
const exp8 = document.getElementById("emp-8-exp-btn")
const cmp8 = document.getElementById("emp-8-cmp-btn")
const emp8 = document.getElementById("emp-8")
const navbar = document.getElementById("navbar-menu")

exp1.addEventListener("click", () => {   
    window.location.href = "/demo/candidates/candidate_1";
})

exp2.addEventListener("click", () => {   
    window.location.href = "/demo/candidates/candidate_2";
})

exp3.addEventListener("click", () => {   
    window.location.href = "/demo/candidates/candidate_3";
})

exp4.addEventListener("click", () => {   
    window.location.href = "/demo/candidates/candidate_4";
})

exp5.addEventListener("click", () => {   
    window.location.href = "/demo/candidates/candidate_5";
})

exp6.addEventListener("click", () => {   
    window.location.href = "/demo/candidates/candidate_6";
})

exp7.addEventListener("click", () => {   
    window.location.href = "/demo/candidates/candidate_7";
})

exp8.addEventListener("click", () => {   
    window.location.href = "/demo/candidates/candidate_8";
})

cmpFunction = (cmpbtn) => {
    if(compare.includes(cmpbtn)) return;

    cmpbtn.style.border = "2px solid rgb(46, 255, 56)";
    if(compare.length == 2){
        console.log('HMM')
        compare[0].style.border = "";
        compare.shift();
    }
    compare.push(cmpbtn);
    if(compare.length == 2 && !navbarCompareBtnOnline){
        navbar.innerHTML += navbarCompareBtn;
        navbarCompareBtnOnline = true;

        navbarCompareBtnInDoc = document.getElementById("compare-all-btn");
        navbarCompareBtnInDoc.addEventListener("click", () => {
            const id1 = compare[0].id.split('-')[1];
            const id2 = compare[1].id.split('-')[1];
            window.location.href = `/demo/candidates/compare_${id1}_${id2}`;
        })
    }
}

cmp1.addEventListener("click", () => {
    cmpFunction(cmp1);
})

cmp2.addEventListener("click", () => {
    cmpFunction(cmp2);
})

cmp3.addEventListener("click", () => {
    cmpFunction(cmp3);
})

cmp4.addEventListener("click", () => {
    cmpFunction(cmp4);
})

cmp5.addEventListener("click", () => {
    cmpFunction(cmp5);
})

cmp6.addEventListener("click", () => {
    cmpFunction(cmp6);
})

cmp7.addEventListener("click", () => {
    cmpFunction(cmp7);
})

cmp8.addEventListener("click", () => {
    cmpFunction(cmp8);
})