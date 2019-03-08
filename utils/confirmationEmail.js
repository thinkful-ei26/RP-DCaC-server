'use strict';

function confirm(emailInfo) {
  return {
    from: 'rpboyle11@gmail.com',
    to: emailInfo.email,
    subject: 'Purchase Confirmation Email',
    text: 'Copy and paste this link: RP-Boyle.com',
  };
}

module.exports = confirm;