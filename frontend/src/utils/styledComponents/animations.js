import { keyframes } from "styled-components/macro";

const slide_up = keyframes`
0% {
       opacity: 0;
       transform: translateY(10px);
   }
   100% {
       opacity: 1;
       transform: translateY(0);
   }
`;
const slide_out_left = keyframes`
from {
    opacity: 1;
  }

  to {      
     opacity: 0;
    transform: translateX(-100%);
  }
`;
const animloader = keyframes`
0% {
      box-shadow: 0 24px rgba(255, 255, 255, 0),
        24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0),
        0px 48px rgba(255, 255, 255, 0);
    }
    12% {
      box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0),
        24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 0 24px white, 24px 24px white,
        24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
    }
    37% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px white,
        0px 48px rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white;
    }
    62% {
      box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px white,
        24px 48px white, 0px 48px white;
    }
    75% {
      box-shadow: 0 24px rgba(255, 255, 255, 0),
        24px 24px rgba(255, 255, 255, 0), 24px 48px white, 0px 48px white;
    }
    87% {
      box-shadow: 0 24px rgba(255, 255, 255, 0),
        24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0),
        0px 48px white;
    }
    100% {
      box-shadow: 0 24px rgba(255, 255, 255, 0),
        24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0),
        0px 48px rgba(255, 255, 255, 0);
    }
`;
const animloader2 = keyframes`
 0% {
      transform: translate(0, 0) rotateX(0) rotateY(0);
    }
    25% {
      transform: translate(100%, 0) rotateX(0) rotateY(180deg);
    }
    50% {
      transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
    }
    75% {
      transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
    }
    100% {
      transform: translate(0, 0) rotateX(0) rotateY(360deg);
    }
`;
const flipX = keyframes`
  0% {
    transform: perspective(200px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
  }
  100% {
    transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
  }
  `;

const deviceloader = keyframes`
    0% {
      box-shadow: 11px 0 rgba(255, 255, 255, 0), 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    25% {
      box-shadow: 11px 0 #dee5ec, 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 11px 0 #dee5ec, 22px 0 #dee5ec, 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
    }
    75% {
      box-shadow: 11px 0 #dee5ec, 22px 0 #dee5ec, 33px 0 #dee5ec, 44px 0 rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 11px 0 #dee5ec, 22px 0 #dee5ec, 33px 0 #dee5ec, 44px 0 #dee5ec;
    }
    `;
const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  
    `;

export {
  slide_up,
  slide_out_left,
  animloader,
  animloader2,
  flipX,
  deviceloader,
  rotation,
};
