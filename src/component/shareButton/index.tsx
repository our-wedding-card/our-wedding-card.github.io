import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

const baseUrl = import.meta.env.BASE_URL

/**
 * 카카오톡으로 초대장을 공유할 수 있는 버튼 컴포넌트입니다.
 *
 * @returns {JSX.Element} 공유 버튼 섹션
 */
export const ShareButton = () => {
  const kakao = useKakao()
  return (
    <LazyDiv className="footer share-button">
      <button
        className="ktalk-share"
        onClick={() => {
          // 카카오 SDK 로드 전이면 무시
          if (!kakao) {
            return
          }

          // 청첩장 웹페이지 주소 (모든 링크가 이 페이지로 이동)
          const pageUrl =
            window.location.protocol +
            "//" +
            window.location.host +
            baseUrl
          const link = { mobileWebUrl: pageUrl, webUrl: pageUrl }

          // 카카오톡 공유 전송 (피드 템플릿: 청첩장 웹페이지로 링크)
          kakao.Share.sendDefault({
            objectType: "feed",
            content: {
              title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
              description:
                WEDDING_DATE.format(WEDDING_DATE_FORMAT) + "\n" + LOCATION,
              // 카카오 규격(최대 800px, <500KB, 2:1)에 맞춘 배너 이미지
              imageUrl: pageUrl + "kakao_share.jpg",
              imageWidth: 800,
              imageHeight: 400,
              link,
            },
            buttons: [
              {
                title: "청첩장 보기",
                link,
              },
            ],
          })
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}
