import { useEffect } from 'react';

import BaseContainer from '@components/base/BaseContainer';
import BaseTitle from '@components/base/BaseTitle';

import styles from './Location.module.scss';

import IconKakao from '@assets/images/icons/icon_kakao.png';
import IconNaver from '@assets/images/icons/icon_naver.png';
import IconTmap from '@assets/images/icons/icon_tmap.png';

const MAP_CONFIG = {
  lon: 37.253625,
  lan: 127.073942,
  zoom: 16,
};

const MAP_MARKER = [
  { name: 'SY컨벤션웨딩홀', lon: 37.254716, lan: 127.074841 },
  { name: '영통공영주차장', lon: 37.253459, lan: 127.073988 },
  {
    name: '플러스타운 주차장',
    lon: 37.25155,
    lan: 127.075852,
  },
];

const LOCATION_INFO = {
  name: 'SY컨벤션웨딩홀',
  address: '경기도 수원시 영통구 봉영로 1612',
  directions: [
    {
      type: 'SUBWAY',
      description: ['분당선 영통역 1번 출구에서 도보 6분 거리'],
    },
    {
      type: 'BUS',
      description: [
        '[영통역] 정류장에서 하차',
        '일반버스 2-1, 3, 5, 13-1, 34, 203, 720-3',
        '광역버스 1112, 5100, 7000, M5107',
      ],
    },
    {
      type: 'PARKING',
      description: ['"SY컨벤션" 또는 "영통공영주차장" 또는 "플러스타운" 검색', '무료 주차 2시간'],
    },
  ],
};

const DIRECTION_TYPE = {
  SUBWAY: '🚊 지하철',
  BUS: '🚌 버스',
  PARKING: '🚗 주차장',
};

const Location = () => {
  const { naver } = window;

  const settingNaverMap = () => {
    // 지도 표시하기
    const mapDiv = document.getElementById('map');
    const map = new naver.maps.Map(mapDiv, {
      center: new naver.maps.LatLng(MAP_CONFIG.lon, MAP_CONFIG.lan),
      zoom: MAP_CONFIG.zoom,
    });

    // 마커 표시하기
    MAP_MARKER.forEach((marker, index) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(marker.lon, marker.lan),
        map: map,
        icon: {
          content: [
            `<div class="map_marker ${index === 0 ? 'main' : 'sub'}">`,
            '<span class="map_marker__icon">📍</span>',
            `<span class="map_marker__title">${marker.name}</span>`,
            '</div>',
          ].join(''),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(54, 36),
        },
      });
    });
  };

  const openMap = (type) => {
    const placeName = MAP_MARKER[0].name;
    switch (type) {
      case 'NAVER':
        window.open(`https://map.naver.com/v5/search/${placeName}`, '_blank');
        break;
      case 'KAKAO':
        window.open(
          `https://map.kakao.com/link/to/${placeName},${MAP_MARKER[0].lon},${MAP_MARKER[0].lan}`,
          '_blank'
        );
        break;
      case 'TMAP':
        window.open(
          `https://apis.openapi.sk.com/tmap/app/poi?appKey=AsjHhLBpavamEqi6tjfud4aFiXSU2jNC6rDXgIRd&name=${placeName}`,
          '_blank'
        );
        break;
    }
  };

  useEffect(() => {
    settingNaverMap();
  }, []);

  return (
    <BaseContainer background="sub">
      <BaseTitle title="Location" />

      <div id="map" className={styles.location_map}></div>

      <div className={styles.location_button}>
        <button onClick={() => openMap('NAVER')}>
          <img src={IconNaver} alt="네이버지도" />
          네이버지도
        </button>
        <button onClick={() => openMap('KAKAO')}>
          <img src={IconKakao} alt="카카오맵" />
          카카오맵
        </button>
        <button onClick={() => openMap('TMAP')}>
          <img src={IconTmap} alt="T Map" />T MAP
        </button>
      </div>

      <div className={styles.location_card}>
        {/* 위치 정보 */}
        <div className={styles.location_card__title}>
          <h3>{LOCATION_INFO.name}</h3>
          <span>{LOCATION_INFO.address}</span>
        </div>

        <hr />

        {/* 오는 길 */}
        {LOCATION_INFO.directions.map((item) => (
          <div className={styles.location_card__content} key={`loc_${item.type}`}>
            <h4>{DIRECTION_TYPE[item.type]}</h4>
            {item.description.map((desc, index) => (
              <p key={`loc_${item.type}_${index}`}>{desc}</p>
            ))}
          </div>
        ))}
      </div>
    </BaseContainer>
  );
};

export default Location;
