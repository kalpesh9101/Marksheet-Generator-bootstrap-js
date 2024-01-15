function displayData(){
    showDiv();
    var studentName,collegeName,motherName,prnNo,seatNo,javaIn,javaEx,pythonIn,pythonEx,dotIn,dotEx,jsIn,jsEx;
    studentName=getData('studentName');
    collegeName=getData('collegeName');
    motherName=getData('motherName');
    prnNo=getData('prnNo');
    seatNo=getData('seatNo');
    
    javaIn=Number(getData('javaIn'));
    javaEx=Number(getData('javaEx'));
    pythonIn=Number(getData('pythonIn'));
    pythonEx=Number(getData('pythonEx'));
    dotIn=Number(getData('dotIn'));
    dotEx=Number(getData('dotEx'));
    jsIn=Number(getData('jsIn'));
    jsEx=Number(getData('jsEx'));

    if(studentName===''||collegeName===''||motherName===''||prnNo===''||seatNo===''){
        alert("Enetr All Details");
        hideDiv();
    }
    if(javaIn>=26||pythonIn>=26||dotIn>=26||jsIn>=26){
        alert("Internal Marks should be less then 25")
        hideDiv();
    }
    if(javaEx>=76||pythonEx>=76||dotEx>=76||jsEx>=76){
        alert("Internal Marks should be less then 75")
        hideDiv();
    }
    var totalJava = getTotal(javaIn, javaEx);
    var totalPython = getTotal(pythonIn, pythonEx);
    var totalDot = getTotal(dotIn, dotEx);
    var totalJs = getTotal(jsIn, jsEx);

    var gradeJava = getGrade(totalJava);
    var gradePython = getGrade(totalPython);
    var gradeDot = getGrade(totalDot);
    var gradeJs = getGrade(totalJs);

    displayItem('studentNameD',studentName)
    displayItem('collegeNameD',collegeName)
    displayItem('motherNameD',motherName)
    displayItem('prnNoD',prnNo)
    displayItem('seatNoD',seatNo)

    displayItem('javaInD',javaIn);
    displayItem('pythonInD',pythonIn)
    displayItem('dotInD',dotIn)
    displayItem('jsInD',jsIn)

    displayItem('javaExD',javaEx);
    displayItem('pythonExD',pythonEx)
    displayItem('dotExD',dotEx)
    displayItem('jsExD',jsEx)

    displayItem('javaT',totalJava);
    displayItem('pythonT',totalPython)
    displayItem('dotT',totalDot)
    displayItem('jsT',totalJs)

    displayItem('javaG',gradeJava);
    displayItem('pythonG',gradePython)
    displayItem('dotG',gradeDot)
    displayItem('jsG',gradeJs)

    var total=totalJava+totalPython+totalDot+totalJs;

    displayItem('total',total)
    var percentage=total/4;

    checkResult(javaIn, pythonIn, dotIn, jsIn, javaEx, pythonEx, dotEx, jsEx, percentage)
}
function showDiv(){
    document.getElementById("marksheet").style.visibility = 'visible';
    document.getElementById('printBtn').style.visibility="visible";
    return;
}
function hideDiv(){
    document.getElementById("marksheet").style.visibility = 'hidden';
    document.getElementById('printBtn').style.visibility="hidden";
    return;
}
function checkResult(javaIn, pythonIn, dotIn, jsIn, javaEx, pythonEx, dotEx, jsEx, percentage) {
    if (
        javaIn >= 12 && pythonIn >= 12 && dotIn >= 12 && jsIn >= 12 &&
        javaEx >= 20 && pythonEx >= 20 && dotEx >= 20 && jsEx >= 20
        
    ) {
        var msg = getSgpa(percentage);
        displayItem('sgpa', msg);
        
    } else if (
        javaIn <= 12 && pythonIn <= 12 && dotIn <= 12 && jsIn <= 12 &&
        javaEx <= 20 && pythonEx <= 20 && dotEx <= 20 && jsEx <= 20
    ) {
        displayItem('sgpa', 'Fail');
    } else {
        displayItem('sgpa', 'ATKT');
    }
}

function getSgpa(percentage){
    var SGPA=(percentage+7.5)/10
    return "SGPA :" + SGPA;
}
function getData(id){
    return document.getElementById(id).value;
}
function getTotal(inM,exM){
    return inM+exM;
}
function getGrade(m){
    if(m>70){
        return 'O';
    }
    else if(m>60){
        return 'A';
    }
    else if(m>50){
        return 'B';
    }
    else if(m>40){
        return 'C';
    }
    else{
        return 'F';
    }
}
function displayItem(id,msg){
    document.getElementById(id).innerHTML=msg;
}