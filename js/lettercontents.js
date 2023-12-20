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

// 편지 데이터에서 receiver_name, sender_name, content 가져오기
let receiverName = letterData.receiver_name;
let senderName = letterData.sender_name;
let content = letterData.content;

document.getElementById("recipient-name").innerText = receiverName;
document.getElementById("sender-name").innerText = senderName;
document.getElementById("letter-content").innerText = content;