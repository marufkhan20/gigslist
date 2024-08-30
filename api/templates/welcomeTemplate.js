module.exports = (firstName) =>
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
                  src="https://utfs.io/f/6d3e6a66-a8bb-4276-9791-e1e670c9a32e-1cq6x.png"
                  alt=""
                  class="secondary-logo"
                />
                <h2>Hey ${firstName}, thanks for signing up!</h2>
                <p>
                  Welcome to Gigslist! We’re thrilled to have you on board. As a
                  professional offering your services, we’re here to help you
                  find new clients and grow your business.
                </p>
              </div>

              <h3 style="text-align: left">What’s next?</h3>
              <div class="steps-container">
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <div class="step-title">Complete your profile</div>
                    <div class="step-description">
                      A complete profile helps you stand out and attract more
                      clients. Add your logo or profile pic and business info!
                    </div>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <div class="step-title">Post your first gig</div>
                    <div class="step-description">
                      Get discovered by potential clients looking for your
                      service. Make sure to include high res images or video!
                    </div>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <div class="step-title">Engage and respond</div>
                    <div class="step-description">
                      Leads should start pouring in. Make sure you respond
                      promptly to inquiries to secure more jobs!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
