// URL에서 "letter" 매개변수 값을 가져오기
let url_href = window.location.href;
const letterId = new URL(url_href).searchParams.get("letter");
console.log(`letterId: ${letterId}, type: ${typeof letterId}`);

// letterId가 null이면 index.html로 이동
if (letterId == null) {
    window.location.href = "index.html";
}

// letterId를 숫자로 변환: letterIdNumber
let letterIdNumber = parseInt(letterId);
console.log(`letterIdNumber: ${letterIdNumber}, type: ${typeof letterIdNumber}`);

// letters에서 letterIdNumber와 일치하는 편지 데이터 가져오기
let letterData;
for (let letter of letters) {
    if (letterIdNumber === letter.id) {
        letterData = letter;
        break;
    }
}
console.log(letterData);

// 편지 데이터에서 receiver_name, sender_name, content, password 가져오기
let receiverName = letterData.receiver_name;
let senderName = letterData.sender_name;
let content = letterData.content;
let letterPassword = letterData.password;

// 사용자로부터 입력받은 비밀번호 확인
let userInputPassword = prompt("편지의 비밀번호를 입력하세요:");

// 비밀번호가 일치하면 페이지 이동, 일치하지 않으면 경고 메시지 표시
if (userInputPassword === letterPassword) {
    document.getElementById("recipient-name").innerText = receiverName;
    document.getElementById("sender-name").innerText = senderName;
    document.getElementById("letter-content").innerText = content;
} else {
    alert("비밀번호가 일치하지 않습니다. 다시 시도해주세요.");
    window.location.href = "index.html"; // 비밀번호가 일치하지 않으면 인덱스 페이지로 이동
}