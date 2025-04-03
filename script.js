// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 예시 이미지와 텍스트 설정
    document.getElementById('imagePreview').style.backgroundImage = "url('https://via.placeholder.com/500x500.png?text=이벤트+이미지')";
    document.getElementById('textPreview').textContent = "🎉 특별 이벤트 진행 중! 🎉\n\n오늘부터 일주일간 모든 제품 20% 할인!\n해시태그를 달아 공유하고 추가 혜택도 받아가세요.\n\n#이벤트 #할인 #특별프로모션";
});

// 탭 전환 함수
function switchTab(tab) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'instagram') {
        document.getElementById('instagramButtons').style.display = 'flex';
        document.getElementById('kakaotalkButtons').style.display = 'none';
        document.querySelector('.tab:first-child').classList.add('active');
    } else {
        document.getElementById('instagramButtons').style.display = 'none';
        document.getElementById('kakaotalkButtons').style.display = 'flex';
        document.querySelector('.tab:last-child').classList.add('active');
    }
}

// 텍스트 복사 함수
function copyText() {
    const text = document.getElementById('textPreview').textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('텍스트가 클립보드에 복사되었습니다!');
        })
        .catch(err => {
            console.error('텍스트 복사 실패:', err);
            alert('텍스트 복사에 실패했습니다. 수동으로 복사해주세요.');
        });
}

// 이미지 저장 함수 (모바일에서는 제한적으로 작동)
function saveImage() {
    // 실제 구현에서는 Canvas 또는 서버 이미지 URL을 사용해야 함
    alert('이미지를 길게 터치한 후 "이미지 저장"을 선택하세요.');
}

// 인스타그램 열기
function openInstagram() {
    // 딥링크로 인스타그램 앱 열기 시도
    window.location.href = 'instagram://camera';
    
    // 앱이 열리지 않으면 웹사이트로 리디렉션
    setTimeout(function() {
        window.location.href = 'https://www.instagram.com/';
    }, 2000);
}
