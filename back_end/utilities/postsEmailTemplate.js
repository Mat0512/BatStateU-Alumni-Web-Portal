const postsEmailTemplate = ({ announcementTitle, surveyTitle, glink }) => {
    console.log("\n\n survey-title: ", surveyTitle);
    console.log("\n\n link: ", glink);

    return `
     <html>
          <head>

               <meta charset="utf-8">
               <meta http-equiv="x-ua-compatible" content="ie=edge">
               <title>Email Confirmation</title>
               <meta name="viewport" content="width=device-width, initial-scale=1">
               <style type="text/css">
               /**
                * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
                */
               @media screen {
               @font-face {
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
               }
               @font-face {
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 700;
                    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
               }
               }
               /**
                * Avoid browser level font resizing.
                * 1. Windows Mobile
                * 2. iOS / OSX
                */
               body,
               table,
               td,
               a {
               -ms-text-size-adjust: 100%; /* 1 */
               -webkit-text-size-adjust: 100%; /* 2 */
               }
               /**
                * Remove extra space added to tables and cells in Outlook.
                */
               table,
               td {
               mso-table-rspace: 0pt;
               mso-table-lspace: 0pt;
               }
               /**
                * Better fluid images in Internet Explorer.
                */
               img {
               -ms-interpolation-mode: bicubic;
               }
               /**
                * Remove blue links for iOS devices.
                */
               a[x-apple-data-detectors] {
                    font-family: inherit !important;
                    font-size: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                    color: inherit !important;
                    text-decoration: none !important;
                    }
               /**
                * Fix centering issues in Android 4.4.
                */
               div[style*="margin: 16px 0;"] {
               margin: 0 !important;
               }
               body {
                    width: 100% !important;
                    height: 100% !important;
                    padding: 0 !important;
                    margin: 0 !important;
               }
               /**
                * Collapse table borders to avoid space between cells.
                */
               
               a {
            
               img {
                    height: auto;
                    line-height: 100%;
                    text-decoration: none;
                    border: 0;
                    outline: none;
               }
               button {
                    padding: 1rem;
                    background: #50C878;
                    color: #fff
               }
               p {
                    margin-top: 1rem;
                    margin-bottom: 1rem;

               }
               h1 {
                    font-size: 16px,
                    font-weight: 400
               }
               </style>

          </head>
          <body>
               <p class="title">New ${
                   announcementTitle
                       ? `Announcement: ${announcementTitle}`
                       : `Survey: ${surveyTitle}`
               }</p>
               <p>
                    Good day CICS Alumni!
                    <br>
                    Please check the new posted ${
                        announcementTitle
                            ? "announcement to keep updated with us"
                            : `survey. Here is the google Link of the survey: ${glink} or you can check it on our website`
                    } . Click here to Login.
                   <a href="https://batstateu-alumni.com/">Log in to Batstateu Alumni Website</a>
               <p>
          </body>
     <html>`;
};

module.exports = { postsEmailTemplate };
