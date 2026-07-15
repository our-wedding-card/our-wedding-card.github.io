import { BRIDE_FULLNAME, GROOM_FULLNAME } from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"

const baseUrl = import.meta.env.BASE_URL

/**
 * 청첩장 링크를 공유할 수 있는 버튼 컴포넌트입니다.
 *
 * 카카오 메시지 템플릿(리치 카드)은 공유 링크 도메인을 콘솔에 등록해야
 * 링크가 눌리는 제약이 있어, 도메인 등록 없이도 정상 동작하는
 * "단순 링크 공유" 방식으로 처리합니다.
 * - 지원 기기(모바일 등): 네이티브 공유 시트(카카오톡 등 선택)
 * - 미지원(데스크톱 등): 링크 클립보드 복사
 * 공유된 링크의 미리보기는 페이지 OG 태그(preview_image.png)로 생성됩니다.
 *
 * @returns {JSX.Element} 공유 버튼 섹션
 */
export const ShareButton = () => {
  return (
    <LazyDiv className="footer share-button">
      <button
        className="ktalk-share"
        onClick={async () => {
          const url =
            window.location.protocol +
            "//" +
            window.location.host +
            baseUrl
          const title = `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME} 결혼합니다`

          // 네이티브 공유 시트 사용(모바일). 없으면 링크 복사(데스크톱).
          if (navigator.share) {
            try {
              await navigator.share({ title, url })
            } catch {
              // 사용자가 공유를 취소한 경우 무시
            }
          } else {
            try {
              await navigator.clipboard.writeText(url)
              alert("청첩장 링크가 복사되었습니다.")
            } catch {
              alert(url)
            }
          }
        }}
      >
        <img src={ktalkIcon} alt="share-icon" /> 링크 공유하기
      </button>
    </LazyDiv>
  )
}
