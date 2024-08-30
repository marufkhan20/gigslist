module.exports = (verifyCode) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>

    <style>
      body {
        background-color: #f1f1f2;
        margin: 0;
        padding: 0;
        width: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        font-family: Arial, sans-serif;
      }

      table {
        border-spacing: 0;
      }

      img {
        border: 0;
        display: block;
      }

      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 60px 15px;
      }

      .template {
        background-color: #ffffff;
        border-radius: 24px;
        padding: 45px 30px;
        box-sizing: border-box;
      }

      .text-center {
        text-align: center;
      }

      .logo {
        width: 100px;
        margin: auto;
      }

      .secondary-logo {
        width: 170px;
        margin: auto;
        margin-top: 8px;
      }

      h2 {
        margin-top: 14px;
        font-size: 22px;
        font-weight: 600;
        color: #181c32;
        margin-bottom: 16px;
      }

      p {
        font-size: 14px;
        color: #7e8299;
        font-weight: 500;
        line-height: 1.5;
        margin: 0 auto;
        width: 80%;
      }

      h3 {
        font-size: 18px;
        font-weight: 600;
        color: #181c32;
        margin-top: 40px;
        margin-bottom: 24px;
      }

      .step {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 24px;
      }

      .step-number {
        width: 40px;
        height: 40px;
        background-color: #ffffff;
        border-radius: 50%;
        font-size: 16px;
        color: #4285f4;
        font-weight: 600;
        line-height: 40px;
      }

      .step-content {
        padding-bottom: 16px;
        border-bottom: 1px dashed #e1e3ea;
        width: 100%;
        margin-left: 16px;
      }

      .step-title {
        font-size: 14px;
        font-weight: 600;
        color: #181c32;
        margin-bottom: 8px;
        text-align: left;
      }

      .step-description {
        font-size: 13px;
        color: #5e6278;
        font-weight: 500;
        text-align: left;
      }

      .steps-container {
        background-color: #f9f9f9;
        border-radius: 12px;
        padding: 35px 30px;
        box-sizing: border-box;
      }

      @media only screen and (max-width: 600px) {
        .container {
          padding: 15px;
        }

        .template {
          padding: 30px 15px;
        }

        p {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center">
          <div class="container">
            <div class="template">
              <div class="text-center">
                <img
                  src="https://utfs.io/f/ef3e2529-0691-4fa7-adaf-870646a299fc-1zbfv.png"
                  alt="gigslist"
                  class="logo"
                />
                <img
                  src="https://utfs.io/f/868894c5-177e-43e7-9956-4e661c8da728-b5tdqf.png"
                  alt=""
                  class="secondary-logo"
                />
                <h2>Gigslist Verification Code</h2>
                <p>
                  We received a request to create an account using this email
                  address. Your Gigslist verification code is:
                </p>
              </div>

              <h2 style="padding: 40px 0; color: #4285f4">${verifyCode}</h2>

              <div>
                <p style="font-weight: 500; font-size: 13px; color: #a1a5b7">
                  If you did not request this code, it is possible that someone
                  else is trying to create an account on Gigslist with this
                  email address.
                </p>
                <br />
                <p style="font-weight: 500; font-size: 13px; color: #7e8299">
                  Do not forward or give this code to anyone.
                </p>
              </div>

              <div style="margin-top: 40px">
                <p style="font-weight: 500; font-size: 13px; color: #a1a5b7">
                  Love Gigslist? Tell a friend!
                </p>
                <div style="margin-top: 6px">
                  <img
                    src="https://utfs.io/f/942b29be-80ea-4ada-888e-853d02fbf859-87z83q.png"
                    alt=""
                    style="
                      display: inline-block;
                      margin-left: 8px;
                      margin-right: 8px;
                      cursor: pointer;
                    "
                  />
                  <img
                    src="https://utfs.io/f/6138a0c5-f14e-4999-b4b5-88ef6a1c95f4-f5khal.png"
                    alt=""
                    style="
                      display: inline-block;
                      margin-left: 8px;
                      margin-right: 8px;
                      cursor: pointer;
                    "
                  />
                  <img
                    src="https://utfs.io/f/c0ed2a1d-9306-41bf-9d46-b80f810fd3d2-jraewu.png"
                    alt=""
                    style="
                      display: inline-block;
                      margin-left: 8px;
                      margin-right: 8px;
                      cursor: pointer;
                    "
                  />
                  <img
                    src="https://utfs.io/f/9641b8d2-f41e-449f-aca7-afd13966c00d-kieqx3.png"
                    alt=""
                    style="
                      display: inline-block;
                      margin-left: 8px;
                      margin-right: 8px;
                      cursor: pointer;
                    "
                  />
                </div>
                <p
                  style="
                    font-weight: 500;
                    font-size: 12px;
                    color: #a1a5b7;
                    margin-top: 40px;
                  "
                >
                  © Copyright Gigslist. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
