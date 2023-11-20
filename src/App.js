import { useEffect, useState } from 'react';
import main from './img/File.jpg';
import heart from './img/heart.png';
import money from './img/m.png';
import gift from './img/p.png';
import dress from './img/s.png'
import styled, {keyframes} from 'styled-components';

function App() {
  const [isHeart, setHeart] = useState(false);
  const [isMoney, setMoney] = useState(false);
  const [isGift, setGift] = useState(false);
  const [isDress, setDress] = useState(false);

  function clickToImg(imgName) {
    setHeart(true);
    switch (imgName) {
      case 'heart':
         setHeart(true);
         setMoney(false);
         setGift(false);
         setDress(false);
         return;
      case 'money':
        setMoney(true);
        setHeart(false);
        setGift(false);
        setDress(false);
        return;
      case 'gift':
        setGift(true);
        setMoney(false);
        setHeart(false);
        setDress(false);
        return;
      case 'dress':
        setDress(true);
        setMoney(false);
        setHeart(false);
        setGift(false);
        return;
    }
  }

  function onClickToHeader() {
    setHeart(false);
    setDress(false);
    setGift(false);
    setMoney(false);
  }

  useEffect(() => {
    setHeart(false);
    setDress(false);
    setGift(false);
    setMoney(false);
  }, [])

  return (
    <Wrap>
      <Header onClick={onClickToHeader}>
          <Text>
          <span>🎅크리스마쓰 초대장🎅</span>
          <span>이 초대장은 핫 걸 n 핫 뽀이에게만 전해집니다.</span>
            <span>🎅크리스마쓰 초대장🎅</span>
            <span>이 초대장은 모바일 퍼스트입니다. 핸드폰으로 바~</span>
            <span>🎅크리스마쓰 초대장🎅</span>
            <span>이 초대장은 핫 걸 n 핫 뽀이에게만 전해집니다.</span>
            <span>🎅크리스마쓰 초대장🎅</span>
            <span>이 초대장은 모바일 퍼스트입니다. 핸드폰으로 바~</span>
            <span>🎅크리스마쓰 초대장🎅</span>
            <span>이 초대장은 핫 걸 n 핫 뽀이에게만 전해집니다.</span>
            <span>🎅크리스마쓰 초대장🎅</span>
            <span>이 초대장은 모바일 퍼스트입니다. 핸드폰으로 바~</span>
        </Text>
          <img alt="" src={main}/>
      </Header>

      <Article>
        <ImgBox>
          <HeartImg alt="" src={heart} onClick={() => clickToImg('heart')} />
          <DressImg alt="" src={dress} onClick={() => clickToImg('dress')} />
          <GiftImg alt="" src={gift} onClick={() => clickToImg('gift')} />
          <MoneyImg alt="" src={money} onClick={() => clickToImg('money')} />
        </ImgBox>

        {isHeart && (
          <TextBox>
            <p>일시: 2023년 12월 25일 16시 -</p>
            <p>장소: 유. . 노 <a href="https://www.instagram.com/ahping2ping/">@ahping2ping</a> ?</p>
          </TextBox>
        )}

        {isDress && (
          <TextBox><p><span>어글리 니트</span> 지향. 없다면 <span>레드</span> n <span>그린</span> 포인트 주기. 그래도 없으면 우리가 준비한 꼬깔 쓰기.</p></TextBox>
        )}

        {isGift && (
          <TextBox><p>서로의 행운을 비는 <span>따땃한 선물</span>을 준비해 주세요. 이만냥 이하 권장. 이 외 <span>음식 및 주류 협찬 대환영</span></p></TextBox>
        )}

        {isMoney && (
          <TextBox><p>참가비는 <span>사만냥</span>입니다. 음식. 주류. 케이쿠. 대관. 약간의 소품등에 이용됩니다. 남는 돈은 없습니다.</p></TextBox>
        )}

        <TextBox>
          <BoldText><span>우리가 할 것들.</span></BoldText>
          <p>너는 누구니. <span>은디</span>가 고심한 크리쓰마스 케이쿠 커팅식. 오늘을 기념하며 사진 그리고 영상 편지. . 귀염뽀짝 선물 교환. 올해의 어쩌구 nn. . <span>승원</span>이가 고심한 와인 콸콸콸. .</p>
          <p>참가를 원하는 사람은 요기 <a href="https://open.kakao.com/o/g0bsGmSf">오픈챗</a>으로 들어와잉~ 💝</p>
        </TextBox>
      </Article>
    </Wrap>
  );
}

export default App;

export const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  padding-bottom: 20px;
  
  * {
    box-sizing: border-box;
    
    p {
      margin:0;
      padding: 0;
    }
  }
`;

export const Header = styled.div`
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
  }
`;


 const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`

export const Text = styled.div`
  position: absolute;
  top: 50%; 
  left: 50%;   
  transform: translate(-50%, -50%);
  white-space: nowrap;

  animation: ${flowing} 18s linear infinite;
  span{
    color: forestgreen;
    font-size: 32px;
    font-weight: 700;
  }
  

  -webkit-text-stroke: 1px yellow;
`;

 export const Article = styled.div`
  color: whitesmoke;
 `;

const circleMove = keyframes`
  0%,100%{
    transform:translate(15%,10%);
  }
  
  50%{
    transform:translate(20%,30%);
  }
`

const circleMove2 = keyframes`
  0%,100%{
    transform:translate(22%,26%);
  }
  
  50%{
    transform:translate(30%,20%);
  }
`


const circleMove3 = keyframes`
  0%,100%{
    transform:translate(8%,15%);
  }
  
  50%{
    transform:translate(30%,55%);
  }
`

const circleMove4 = keyframes`
  0%,100%{
    transform:translate(-10%,25%);
  }
  
  50%{
    transform:translate(10%,10%);
  }
`

export const HeartImg = styled.img`
  animation: ${circleMove4} 12s linear infinite;

`;
 export const DressImg = styled.img`
   animation: ${circleMove2} 13s linear infinite;
 
 `;
 export const GiftImg = styled.img`
   animation: ${circleMove} 16s linear infinite;
 
 `;
 export const MoneyImg = styled.img`
   animation: ${circleMove3} 18s linear infinite;
 `;

 export const ImgBox  = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   > img {
     width: 60px;
     height: 60px;
     cursor: pointer;
   }
 `
 export const TextBox  = styled.div`
   margin: 0 20px 10px 20px;
   padding: 20px;
   border-radius: 22px;
   border: 1px dashed darkred;
   font-size: 14px;
   font-weight: 600;
   line-height: 22px;
   
   span {
     font-weight: 700;
     color: forestgreen;
   }
   
   a {
     color: forestgreen;
   }
   
   & + & {
     margin-top: 10px;
   }
 `

export const BoldText = styled.div`
  font-size: 20px;
`;
