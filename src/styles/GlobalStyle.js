import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

   :root{
      --primary-color: #FFFFFF;
      --color-black : #000000;
      --color-white : #FFFFFF;
      --color-gray : #D9D9D9;
      --color-gray2 : #8B8B8B;
      --color-black-bg : #00000090
   }


   html, body, div, span, applet, object, iframe,
   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
   a, abbr, acronym, address, big, cite, code,
   del, dfn, em, img, ins, kbd, q, s, samp,
   small, strike, strong, sub, sup, tt, var,
   b, u, i, center,
   dl, dt, dd, ol, ul, li,
   fieldset, form, label, legend,
   table, caption, tbody, tfoot, thead, tr, th, td,
   article, aside, canvas, details, embed, 
   figure, figcaption, footer, header, hgroup, 
   menu, nav, output, ruby, section, summary,
   time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
   }
   /* HTML5 display-role reset for older browsers */
   article, aside, details, figcaption, figure, 
   footer, header, hgroup, menu, nav, section {
      display: block;
   }
   body {
      background-image: url("https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg");
      background-size: cover;
   }
   ol, ul {
      list-style: none;
   }
   blockquote, q {
      quotes: none;
   }
   blockquote:before, blockquote:after,
   q:before, q:after {
      content: '';
      content: none;
   }
   table {
      border-collapse: collapse;
      border-spacing: 0;
   }

   .Wave {
      position: absolute;
      bottom: 0;
   }


`
