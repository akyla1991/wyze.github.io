// @flow

import type { Style, VNode } from '../../../types'
import { css, keyframes } from 'glamor'
import preact from 'preact'

const float: Style = keyframes({
  '50%': { transform: 'translate(0, 20px)' },
})

const ghost: Style = css({
  animation: `${float} 3s ease-out infinite`,
})

const d = [
  [
    'M116.223 125.064c1.032-1.183 1.323-2.73 1.39-3.747V54.76S112.99 19.885',
    '81.49 10.385s-66 6.625-72.126 44l-.78 63.22c.06 4.196 1.104 6.176 1.807',
    '7.005 1.94 1.81 5.41 3.465 10.1-.6 7.5-6.5 8.375-10 12.75-6.875s5.875',
    '9.75 13.625 9.25 12.75-9 13.75-9.625 4.375-1.875 7 1.25 5.375 8.25 12.875',
    '7.875 12.625-8.375 12.625-8.375 2.25-3.875 7.25.375 7.625 9.75 14.375',
    '8.125c0 0 .672-.108 1.483-.946z',
  ],
  [
    'M71.916 62.782c.05-1.108-.81-2.046-1.917-2.095-.674-.03-1.28.28-1.668',
    '77-.758.767-2.483 2.236-4.696 2.36-1.696.093-3.438-.626-5.19-2.138l-',
    '012-.01.002.005c-.332-.294-.757-.488-1.235-.51-1.107-.048-2.045.81-2',
    '094 1.918-.032.724.327 1.37.887 1.75l-.003-.002c2.22 1.872 4.536 2.88 6',
    '912 2.987.333.014.67.012 1.007-.01 3.162-.19 5.57-1.942 6.887-3.166l',
    '452-.452.06-.06.033-.035-.02.02c.343-.342.57-.806.593-1.33z',
  ],
  [
    'M116.28 55.814c-.022-.286-2.324-28.744-30.222-41.012C78.252 11.37 70.28',
    '9.63 62.368 9.63c-16.89 0-30.284 7.782-37.188 15.066-9.23 9.736-13.84',
    '26.712-14.19 30.26l-.75 62.33c.15 2.134 1.39 6.168 5.02 6.168 1.89 0',
    '4.074-1.083 6.672-3.31 4.96-4.252 7.424-6.296 9.226-6.296 1.34 0 2.712',
    '1.213 5.102 3.762 4.12 4.396 7.46 6.355 10.833 6.355 2.713 0 5.31-1.296',
    '7.942-3.962 3.104-3.145 5.7-5.24 8.285-5.24 2.116 0 4.44 1.422 7.317',
    '4.474 2.638 2.8 5.674 4.22 9.022 4.22 4.834 0 8.99-2.96',
    '11.27-5.73l.085-.103c1.81-2.2 3.237-3.938 5.312-3.938 2.208 0 5.27',
    '1.942 9.36 5.936.54.743 3.55 4.674 6.86 4.674 1.37 0 2.558-.65',
    '3.53-1.932l.203-.268V55.814zm-2 65.59c-.525.6-1.095.892-1.733.892-2.053',
    // eslint-disable-next-line max-len
    '0-4.51-2.82-5.283-3.907l-.116-.137c-4.638-4.54-7.975-6.566-10.82-6.566-3.02',
    '0-4.884 2.267-6.857 4.667l-.085.104c-1.896 2.307-5.582 5-9.725 5-2.775',
    '0-5.322-1.21-7.567-3.59-3.325-3.53-6.03-5.103-8.772-5.103-3.277 0-6.25',
    '2.332-9.707 5.835-2.236 2.265-4.368 3.366-6.518 3.366-2.772',
    '0-5.664-1.765-9.374-5.723-2.487-2.654-4.29-4.395-6.56-4.395-2.515',
    '0-5.045 2.077-10.527 6.777-2.727 2.337-4.426 2.828-5.37 2.828-2.662',
    '0-3.017-4.225-3.02-4.225l.744-62.163c.332-3.32 4.767-19.625',
    '13.647-28.995 3.893-4.106 10.387-8.632 18.602-11.504-.458.503-.744',
    '1.165-.744 1.898 0 1.565 1.27 2.833 2.833 2.833 1.564 0 2.833-1.27',
    '2.833-2.833 0-1.355-.954-2.485-2.226-2.764 4.42-1.285 9.27-2.074',
    '14.437-2.074 7.635 0 15.335 1.684 22.886 5.004 26.766 11.77 29.01 39.047',
    '29.027 39.25v65.525z',
  ],
]

const GhostFloating = (): VNode => (
  <svg
    {...ghost}
    height="132.743"
    viewBox="0 0 127.433 132.743"
    width="127.433"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={d[0].join(' ')}
      fill="#f4f6ff"
    />
    <circle cx="86.238" cy="57.885" fill="#013e51" r="6.667" />
    <circle cx="40.072" cy="57.885" fill="#013e51" r="6.667" />
    <path
      d={d[1].join('.')}
      fill="#013e51"
      transform="rotate(180 63.51104736328124,64.25543975830078)"
    />
    <circle
      cx="18.614"
      cy="99.426"
      fill="#edeffc"
      r="3.292"
      stroke="#edebfc"
      strokeMiterlimit="10"
    />
    <circle
      cx="95.364"
      cy="28.676"
      fill="#edeffc"
      r="3.291"
      stroke="#edebfc"
      strokeMiterlimit="10"
    />
    <circle
      cx="24.739"
      cy="93.551"
      fill="#edeffc"
      r="2.667"
      stroke="#edebfc"
      strokeMiterlimit="10"
    />
    <circle
      cx="101.489"
      cy="33.051"
      fill="#edeffc"
      r="2.666"
      stroke="#edebfc"
      strokeMiterlimit="10"
    />
    <circle
      cx="18.738"
      cy="87.717"
      fill="#edeffc"
      r="2.833"
      stroke="#edebfc"
      strokeMiterlimit="10"
    />
    <path
      d={d[2].join(' ')}
      fill="#edeffc"
      stroke="#edebfc"
      strokeMiterlimit="10"
    />
  </svg>
)

export default GhostFloating
