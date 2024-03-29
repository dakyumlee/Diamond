function fortuneMessages() {
  let name = document.getElementById("nameInput").value;

  let fortuneMessages = [
  "사랑하는 "+name+",<br>이 편지를 쓰는 지금,<br>당신에 대한 내 사랑이 넘치고 있습니다.<br>당신은 내 인생의 가장 특별한 사람이고,<br>당신과 함께하는 모든 순간은 저에게 큰 기쁨을 선사합니다.<br>당신과의 사랑은 나에게 힘과 용기를 주고,<br>저를 더 나은 사람으로 만들어주는 특별한 선물입니다.<br>나는 당신과의 미래를 꿈꾸며,<br>영원한 사랑으로 함께할 수 있기를 기대합니다.<br>사랑을 담아, "+name+"에게",
  name+"님께,<br>이 편지가 당신에게 전해지는 순간,<br>나의 마음이 여러 감정으로 가득 차올랐습니다.<br>당신은 나에게 가장 소중하고 특별한 사람이며,<br>당신과 함께하는 시간은 저에게 큰 행복을 주는 것을 알아요.<br>당신과의 사랑은 내게 무한한 힘을 주고, 어둠 속에서도 나를 밝게 비춰주는 빛입니다.<br>나는 당신과 함께 인생의 모든 순간을 나누고 싶으며,<br>당신을 영원히 사랑할 것을 약속합니다.<br>사랑을 담아, "+name+"에게",
  "사랑스런 "+name+",<br>이 편지는 당신에게 내 마음을 전하고자 쓰여졌습니다.<br>나의 사랑은 끝없이 깊어지며,<br>당신과의 연결은 강해져만 갑니다.<br>당신은 내게 있어 가장 아름다운 꽃이고,<br>내 인생에 행복과 의미를 더해주는 소중한 존재입니다.<br>당신과 함께 있는 동안 나는 얼마나 행운인지 자각하며,<br>미래에도 당신과 함께할 수 있기를 간절히 바랍니다.<br>사랑을 담아, "+name+"에게",
  name+"에게,<br>이 편지가 당신에게 도착했을 때,<br>나의 마음이 당신에게 전해질 것을 기쁘게 생각합니다.<br>당신은 내 인생에 찾아온 가장 큰 축복이며,<br>당신과 함께하는 순간은 나에게 행복과 의미를 줍니다.<br>나는 당신을 위해 항상 노력하고, <br>당신의 웃음을 지켜주고 싶습니다.<br>당신과 함께한 미래를 상상하며,<br>당신에게 나의 사랑을 영원히 보낼 것을 약속합니다.<br>사랑을 담아, "+name+"에게",
  "사랑하는 "+name+"님께,<br>이 편지는 내가 당신에게 전하고자 하는 말들로 가득차 있습니다.<br>당신은 나의 삶에서 가장 아름다운 존재이며,<br>당신과 함께하는 모든 순간은 저에게 큰 기쁨과 만족감을 줍니다.<br>당신의 사랑은 나에게 힘과 용기를 주고, 나를 더 나은 사람으로 성장시켜줍니다.<br>나는 당신을 위해 영원히 사랑하며,<br>당신과 함께하는 모든 순간을 소중히 간직할 것을 약속합니다.<br>사랑을 담아, "+name+"에게"
];

let randomFortune = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];

let modal = document.createElement("div");
modal.innerHTML = `
<div class="modal" style="display: block;">
  <div class="modal-content">
    <h2>포춘 쿠키</h2>
    <p>${randomFortune}</p>
    <br>
    <button onclick="closeModal()">닫기</button>
  </div>
</div>
<style>

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    background-color: #BFA004;;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 400px;
    text-align: center;
  }

  .modal-content h2 {
    font-family: 'TAEBAEKmilkyway';
    margin-top: 0;
    color: ##F2F2F2;
  }

  .modal-content p {
    font-family: 'TAEBAEKmilkyway';
    font-size: 18px;
    color: #F2F2F2;
  }
</style>
`;

document.body.appendChild(modal);

window.closeModal = function() {
modal.style.display = "none";
};
}
