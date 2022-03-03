function solution(id_list, report, k) {
    var answer = [];

    for (let i = 0; i < report.length; i++) {
        console.log(report[i]);
        splitedReport = report[i].split(" ");
        console.log(
            "reporter : " +
                splitedReport[0] +
                " / reported : " +
                splitedReport[1]
        );
    }

    return answer;
}

// [2,1,1,0]
const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
];
const k = 2;

console.log(solution(id_list, report, k));
