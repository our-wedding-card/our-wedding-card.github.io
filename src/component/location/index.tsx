import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import SubwayIcon from "../../icons/subway-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 지하철 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <SubwayIcon className="transportation-icon" />
          </div>
          <div className="heading">지하철</div>
          <div />
          <div className="content">
            지하철 3호선 <b>경복궁역 3번 출구</b>
            <br />
            셔틀버스 5분 간격 운행
          </div>
        </div>

        {/* 버스 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">버스</div>
          <div />
          <div className="content">
            <b>하림각</b> 정류장 하차
            <br />
            171, 7016, 7018, 1020, 7022, 7212 (초록지선)
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            <b>"하림각"</b> 또는 <b>"HW컨벤션센터"</b> 검색
            동시주차 500대 가능 (당일무료)
          </div>          
        </div>
      </LazyDiv>
    </>
  )
}
