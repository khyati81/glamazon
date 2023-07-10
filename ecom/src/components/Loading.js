import React from 'react'
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div class="loadingio-spinner-spinner-fawn3v4vnt"><div class="ldio-li9iomu1up">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items:center;
  background-color:#FFEEE3;
  height:87vh;
@keyframes ldio-li9iomu1up {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
.ldio-li9iomu1up div {
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-li9iomu1up linear 1s infinite;
  background: #003743;
  width: 12px;
  height: 24px;
  border-radius: 6px / 12px;
  transform-origin: 6px 52px;
}.ldio-li9iomu1up div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: #003743;
}.ldio-li9iomu1up div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
  background: #003743;
}
.loadingio-spinner-spinner-fawn3v4vnt {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffeee3;
}
.ldio-li9iomu1up {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-li9iomu1up div { box-sizing: content-box; }


`;
export default Loading