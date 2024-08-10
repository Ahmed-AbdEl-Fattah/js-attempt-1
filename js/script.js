var btn = document.getElementById("btn")

function code() {
    var stNum = prompt("Enter your students num:");
    var arrName = []
    var arrDeg = []
    var arrGrade = []
    for (x = 0; x < stNum; x++){
        var stName = prompt("Enter your student name:")
        var stDeg = prompt("Enter the student's grade (last one):");
        var stgrade = ""
        if (stDeg >= 85 && stDeg <= 100) {
          stgrade = "ممتاز";
        } else if (stDeg >= 75) {
          stgrade = "جيد جدا";
        } else if (stDeg >= 65) {
          stgrade = "جيد";
        } else if (stDeg >= 50) {
          stgrade = "مقبول";
        } else if (stDeg <= 50) {
          stgrade = "ساقط وابوك هينفخك";
        }
        arrName[x] = stName
        arrDeg[x] = stDeg;
        arrGrade[x] = stgrade;
    }

    for (z = 0; z < stNum;z++){
        document.getElementById("h2-" + (z + 1)).innerHTML = arrName[z] + " " + "Your degree is:" + arrDeg[z] + "%, Grade:" + arrGrade[z];
        }
}

btn.addEventListener("click",code)
