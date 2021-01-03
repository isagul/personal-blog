import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    margin: 0;
    padding: 0;
    transition: all 0.2s linear;
  }
  
  .profile-info p{
    color: ${({ theme }) => theme.profileColor};
  }
  
  .header-item {
    color: ${({ theme }) => theme.headerColor};
  }
  
  .info h1 {
    color: ${({ theme }) => theme.projectHeaderColor};
  }
  .project-name {
    color: ${({ theme }) => theme.projectNameColor};
  }
  .project-detail {
    color: ${({ theme }) => theme.projectInfoColor};
  }
  .live-link-text {
    color: ${({ theme }) => theme.projectLiveColor};
  }
  .about-me div {
    background: ${({ theme }) => theme.aboutBackgroundColor};
  }
  .blog-component {
    .story-area {
      border: ${({ theme }) => `1px solid ${theme.blogPostBorderColor}`}
    }
    .desc-area {
      .title {
        color: ${({ theme }) => theme.blogTitleColor}
      }
      .content {
        color: ${({ theme }) => theme.blogContentColor}
      }
      .show-more {
        p {
          color: ${({ theme }) => theme.blogShowMoreColor}
        }
      }
    }
  }

  .profile-component {
    .icons i {
      color: ${({ theme }) => theme.profileIconFgColor}
    }
  }

  .header-component {
    background-color:  ${({ theme }) => theme.headerBgColor};
    box-shadow: ${({ theme }) => `1px 0 5px 2px ${theme.headerShadowColor}`};
  }
  
  `;