import React from "react"
import styled from "styled-components"
import logoUrl from "../static/logo.svg"

const PrimaryNav = styled.nav`
  width: auto;
  height: auto;
  top: 40px;
  position: sticky;
  z-index: 6;
`

const NavInner = styled.div`
  display: flex;
  justify-content: left;
`

const HamburgerLogo = styled.a`
  height: 70px;
  width: 70px;
  background: #fff;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  svg {
    width: 25px;
    height: 25px;
  }
`

const AugustLogo = styled.a`
  width: 165px;
  height: 70px;
  background: 20px 50% url(${props => props.bg}) #ff0051 no-repeat;
  background-size: 120px;
  padding: 0;

  transition: all 0.5s;
  text-align: center;
  font-size: 0.9375rem;
  text-decoration: none;
  span {
    transition: opacity 0.25s 0.15s;
    line-height: 70px;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
  }
  :hover {
    background-position: -120px 50%;
    text-decoration: none;
    span {
      opacity: 1;
      transition: opacity 0.5s 0.15s;
    }
  }
`

const createHamburgerSVG = () => ({
  __html:
    '<svg class="animated-icon animated-icon--reverseanimation logo-hamburger-hover" data-src="https://cdn.august.com.au/static/img/icons/animated/hamburger-close.svg" style="opacity: 1;"><desc>Created with Snap</desc><defs></defs><!--?xml version="1.0" encoding="utf-8"?--><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><g id="frame_0" class="current" style="opacity: 1;"><path d="M41.75,41.95H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.39c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,40.88,43.08,41.95,41.75,41.95z M41.75,27.59H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.4c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,26.52,43.08,27.59,41.75,27.59z M41.75,13.23H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.4c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,12.15,43.08,13.23,41.75,13.23z"></path></g><g id="frame_2" opacity="0" style="opacity: 0;" class=""><path d="M41.75,41.95H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.39c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,40.88,43.08,41.95,41.75,41.95z M41.75,27.59H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.4c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,26.52,43.08,27.59,41.75,27.59z M41.75,13.23H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.4c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,12.15,43.08,13.23,41.75,13.23z"></path></g><g id="frame_3" opacity="0" style="opacity: 0;" class=""><path d="M41.75,41.95H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.39c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,40.88,43.08,41.95,41.75,41.95z M41.75,27.59H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.4c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,26.52,43.08,27.59,41.75,27.59z M41.75,13.23H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.4c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,12.15,43.08,13.23,41.75,13.23z"></path></g><g id="frame_9" opacity="0" class="clickanimation"><path d="M41.75,41.95H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.39c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,40.88,43.08,41.95,41.75,41.95z M41.75,33.94H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.39c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,32.87,43.08,33.94,41.75,33.94z M41.75,13.23H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.4c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,12.15,43.08,13.23,41.75,13.23z"></path></g><g id="frame_10" opacity="0" class="clickanimation"><path d="M41.75,41.95H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.39c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,40.88,43.08,41.95,41.75,41.95z M41.75,38.48H8.25c-1.32,0-2.39-1.07-2.39-2.39V33.7c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,37.4,43.08,38.48,41.75,38.48z M41.75,13.23H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.4c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,12.15,43.08,13.23,41.75,13.23z"></path></g><g id="frame_11" opacity="0" class="clickanimation"><path d="M41.75,41.95H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.39c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,40.88,43.08,41.95,41.75,41.95z M41.75,41.14H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.39c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,40.07,43.08,41.14,41.75,41.14z M41.75,13.23H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.4c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,12.15,43.08,13.23,41.75,13.23z"></path></g><g id="frame_12" opacity="0" class="clickanimation"><path d="M41.75,41.95H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.39c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,40.88,43.08,41.95,41.75,41.95z M41.75,13.23H8.25c-1.32,0-2.39-1.07-2.39-2.39v-2.4c0-1.32,1.07-2.39,2.39-2.39h33.51c1.32,0,2.39,1.07,2.39,2.39v2.39C44.15,12.15,43.08,13.23,41.75,13.23z"></path></g><g id="frame_13" opacity="0" class="clickanimation"><path d="M37.65,23.94c-1.08-0.39-2.16-0.78-3.24-1.17c-8.31-2.95-16.61-5.92-24.93-8.83c-1.54-0.54-2.03-1.64-1.54-3.15c0.22-0.66,0.45-1.33,0.69-1.98c0.4-1.1,1.63-1.67,2.75-1.28c9.8,3.48,19.59,6.96,29.39,10.43c1.12,0.4,1.72,1.46,1.4,2.59c-0.24,0.85-0.52,1.69-0.84,2.51c-0.13,0.35-0.42,0.64-0.66,0.99c0.95,0.92,1.09,2.24,1.49,3.44c0.37,1.1-0.33,2.15-1.57,2.59c-2.96,1.04-5.93,2.07-8.89,3.12c-6.56,2.33-13.12,4.66-19.68,6.99c-0.12,0.04-0.24,0.09-0.37,0.13c-1.66,0.57-2.57,0.13-3.16-1.53C8.25,38.12,8,37.44,7.82,36.75c-0.3-1.15,0.13-2.04,1.22-2.45c3.11-1.16,6.23-2.3,9.37-3.42c6.23-2.22,12.46-4.42,18.7-6.64c0.18-0.07,0.37-0.13,0.54-0.2C37.65,24.03,37.65,23.99,37.65,23.94z"></path></g><g id="frame_14" opacity="0" class="clickanimation"><path d="M36.32,23.97c1.21,0.82,2.31,1.58,3.42,2.33c1.39,0.93,1.64,2.2,0.72,3.6c-0.37,0.57-0.76,1.13-1.14,1.69c-0.61,0.9-1.72,1.22-2.72,0.76c-0.23-0.1-0.45-0.24-0.67-0.38c-1.72-1.16-3.45-2.33-5.15-3.52c-0.4-0.28-0.68-0.31-1.1-0.01c-5.15,3.55-10.31,7.07-15.48,10.6c-0.73,0.5-1.51,0.94-2.41,0.54c-0.43-0.19-0.85-0.51-1.16-0.87c-0.49-0.59-0.9-1.25-1.33-1.89c-0.64-0.96-0.37-2.37,0.56-3.01c3.53-2.4,7.05-4.81,10.57-7.22c1.25-0.85,2.49-1.7,3.77-2.58c-0.17-0.13-0.29-0.24-0.42-0.33c-4.64-3.15-9.28-6.32-13.91-9.47c-0.95-0.64-1.21-2.07-0.55-3.04c0.43-0.63,0.84-1.25,1.26-1.88c0.7-1.07,2.14-1.32,3.19-0.6c4.8,3.27,9.62,6.52,14.43,9.78c0.58,0.4,1.16,0.78,1.73,1.18c0.24,0.17,0.42,0.2,0.68,0.02c1.86-1.28,3.75-2.53,5.62-3.81c1-0.69,2.38-0.45,3.07,0.55c0.43,0.62,0.81,1.28,1.28,1.86c0.81,1,0.37,2.44-0.41,3.01c-1.02,0.75-2.08,1.45-3.12,2.17C36.85,23.6,36.62,23.76,36.32,23.97z"></path></g><g id="frame_15" opacity="0" class="clickanimation"><path d="M20.74,24c-0.92-0.84-1.8-1.67-2.7-2.48c-2.52-2.31-5.04-4.62-7.56-6.94c-1.01-0.93-1.14-2.11-0.29-3.2c0.57-0.72,1.18-1.41,1.83-2.06c0.84-0.84,2.3-0.78,3.21,0.06c3.43,3.15,6.86,6.29,10.29,9.43c0.13,0.12,0.28,0.23,0.45,0.39c0.78-0.7,1.53-1.39,2.29-2.09c2.18-2,4.37-4,6.56-5.99c0.92-0.84,2.44-0.8,3.29,0.11c0.54,0.58,1.06,1.17,1.57,1.77c0.98,1.14,0.92,2.39-0.19,3.42c-1.27,1.17-2.56,2.33-3.84,3.49c-1.37,1.25-2.74,2.51-4.12,3.76c-0.1,0.1-0.19,0.21-0.33,0.36c0.78,0.73,1.54,1.44,2.32,2.15c1.96,1.78,3.92,3.56,5.88,5.35c1.21,1.1,1.28,2.34,0.21,3.58c-0.43,0.5-0.91,0.97-1.3,1.5c-0.95,1.26-2.73,0.99-3.58,0.21c-2.36-2.16-4.73-4.31-7.1-6.47c-0.55-0.51-1.11-1.01-1.69-1.54c-1.77,1.62-3.51,3.21-5.25,4.79c-1.75,1.6-3.5,3.21-5.24,4.82c-1.33,1.22-2.74,1.15-3.94-0.21c-0.33-0.37-0.68-0.73-1.01-1.1c-1.25-1.39-1.19-2.62,0.17-3.88c3.15-2.9,6.32-5.79,9.48-8.69C20.34,24.37,20.51,24.21,20.74,24z"></path></g><g id="frame_16" opacity="0" class="clickanimation"><path d="M34.31,38.39l-23.7-23.7c-0.93-0.93-0.93-2.45,0-3.39l1.69-1.69c0.93-0.93,2.45-0.93,3.39,0l23.7,23.7c0.93,0.93,0.93,2.45,0,3.39l-1.69,1.69C36.76,39.32,35.24,39.32,34.31,38.39z"></path><path d="M39.39,14.69l-23.7,23.7c-0.93,0.93-2.45,0.93-3.39,0l-1.69-1.69c-0.93-0.93-0.93-2.45,0-3.39l23.7-23.7c0.93-0.93,2.45-0.93,3.39,0l1.69,1.69C40.32,12.24,40.32,13.76,39.39,14.69z"></path></g><desc>Created with Snap</desc><defs></defs></svg></svg>',
})

const Nav = () => (
  <PrimaryNav>
    <div>
      <NavInner>
        <HamburgerLogo href="#nav">
          <span dangerouslySetInnerHTML={createHamburgerSVG()} />
        </HamburgerLogo>
        <AugustLogo href="#logo">
          <span>Home</span>
        </AugustLogo>
      </NavInner>
    </div>
  </PrimaryNav>
)

export default Nav
