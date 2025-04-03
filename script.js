// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 캐러셀 콘텐츠 설정
    setupContent('carousel1Preview', 'carousel1Text', 
        "https://via.placeholder.com/500x500.png?text=캐러셀1+이미지",
        "VALMONT 바이탈리티 리추얼💚\n\n발몽 '바이탈리티'로 피부에 새로운 활력을 느껴보세요!\n\nONE FITS ALL PRODUCT – ALL AGE, ALL GENDER, ALL SKIN TYPE\n\n✨ Vitality Step-by-Step Ritual ✨\n\n1 STEP 🌿 VITAL B. SERUM – 리바이탈라이징 페이스 세럼\n\n2 STEP 👁 VITAL CONTOUR CREAM – 리바이탈라이징 아이 크림\n\n3-1 STEP 💧 VITAL B. FLUID – 지·복합성 피부를 위한 산뜻한 울트라-라이트 텍스처\n\n3-2 STEP 🌊 VITAL 24HOUR LIGHT – 중·복합성 피부를 위한 촉촉한 멜팅-라이트 텍스처\n\n3-3 STEP 🧴 VITAL REGENERA I RICH – 중·건성 피부를 위한 풍부한 멜팅-리치 텍스처");
    
    setupContent('carousel2Preview', 'carousel2Text', 
        "https://via.placeholder.com/500x500.png?text=캐러셀2+이미지",
        "바이탈리티 리추얼💚\n\n발몽 '바이탈리티'로 피부에 새로운 활력을 느껴보세요!\n\nONE FITS ALL PRODUCT – ALL AGE, ALL GENDER, ALL SKIN TYPE\n\n✨ 바이탈리티 칵테일 ✨\n\n🔬 실라놀 DNA – 생명력을 회복합니다.\n\n🧬 리포좀 RNA – DNA 능력을 증가시켜줍니다.\n\n🌿 나스트리움 – 활성 산소의 공격을 방어하고 생성을 제한합니다.\n\n🍏 스위스 애플 스템 셀 – 크로노-에이징을 방지합니다.\n\n🌊 푸쿠스 – 영양이 풍부한 환경을 조성합니다");
    
    setupContent('carousel3Preview', 'carousel3Text', 
        "https://via.placeholder.com/500x500.png?text=캐러셀3+이미지",
        "바이탈리티 리추얼💚\n\n발몽 '바이탈리티'로 피부에 새로운 활력을 느껴보세요!\n\n✨ 바이탈리티 칵테일 & 주요 성분 ✨\n\n피부를 활력 있고 튼튼하게 가꿔주는 바이탈리티 칵테일과 함께, 각 제품의 특징을 살려주는 성분이 추가로 함유되어 있습니다.\n\n1 STEP 🌿 VITAL B. SERUM – 말로우: 예민하고 민감해진 피부를 빠르게 진정시켜줍니다.\n\n2 STEP 👁 VITAL CONTOUR CREAM – 멘틸 락테이트: 눈가를 상쾌하게 가꾸고 또렷한 인상을 선사합니다.\n\n3-1 STEP 💧 VITAL B. FLUID – 페퍼민트: 피부 자극을 가라앉히고 생기를 더해줍니다.\n\n3-2 STEP 🌸 VITAL 24HOUR LIGHT – 로자 센티폴리아: 피부의 수분 보유 능력을 높여줍니다.\n\n3-3 STEP 🧴 VITAL REGENERA I RICH – 쉐어 버터: 풍부한 영양을 공급하며, 피부 지질막을 보충해줍니다.");
    
    // 릴스 콘텐츠 설정
    setupContent('reels1Preview', 'reels1Text', 
        "https://via.placeholder.com/500x900.png?text=릴스1+썸네일",
        "바이탈리티 리추얼💚\n\nPOWER UP THE SKIN\n생기 있고 건강한 피부를 위한 바이탈리티 리추얼.\n건강함, 화사함, 싱그러움, 촉촉함, 풍만함, 차오름으로 피로의 흔적, 시간의 흔적을 지워보세요.\n\nONE FITS ALL PRODUCT - ALL AGE, ALL GENDER, ALL SKIN TYPE");
    
    setupContent('reels2Preview', 'reels2Text', 
        "https://via.placeholder.com/500x900.png?text=릴스2+썸네일",
        "바이탈리티 리추얼💚\n\nPOWER UP THE SKIN\n생기 있고 건강한 피부를 위한 바이탈리티 리추얼.\n건강함, 화사함, 싱그러움, 촉촉함, 풍만함, 차오름으로 피로의 흔적, 시간의 흔적을 지워보세요.\n\nONE FITS ALL PRODUCT - ALL AGE, ALL GENDER, ALL SKIN TYPE");
    
    setupContent('reels3Preview', 'reels3Text', 
        "https://via.placeholder.com/500x900.png?text=릴스3+썸네일",
        "바이탈리티 리추얼💚\n\nPOWER UP THE SKIN\n\n생기 있고 건강한 피부를 위한 바이탈리티 리추얼.\n건강함, 화사함, 싱그러움, 촉촉함, 풍만함, 차오름으로 피로의 흔적, 시간의 흔적을 지워보세요.\n\nHP DNA: 40년 피부 'REVENERATION 재생'을 위해 사용되어 온 발몽을 대표하는 성분\nSILANOL: 15년 이상의 피부 'RESTRUCTURING 재구조'를 위해 활용된 발몽의 대표 성분\n\nHP DNA + SILANOL = Si DNA : Cell Booster\n-ATP 보호: 세포 에너지\n-세포 증식: 젊은 세포 증가\n-항산화: 세포 보호\n-디톡스: 자가포식\n-세포 커뮤니케이션: 세포 교환 촉진");
});

// 콘텐츠 설정 함수
function setupContent(imageId, textId, imageUrl, textContent) {
    document.getElementById(imageId).style.backgroundImage = `url('${imageUrl}')`;
    document.getElementById(textId).textContent = textContent;
}

// 텍스트 복사 함수
function copyText(elementId) {
    const text = document.getElementById(elementId).textContent;
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
function saveImage(elementId) {
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
