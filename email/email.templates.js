'use strict';

// This file is exporting an Object with a single key/value pair.
// However, because this is not a part of the logic of the application
// it makes sense to abstract it to another file. Plus, it is now easily 
// extensible if the application needs to send different email templates
// (eg. unsubscribe) in the future.
module.exports = {

  confirm: newReceipt => ({
    subject: 'Order Confirmation - Donna\'s Crafts \'n Creations',
    html: `<p>Thank you for your purchase, ${newReceipt.firstName}!</p></br>
           <p>I accept payment a few different ways:</p>
              <p>Paypal: dboyle20@comcast.net</p>
              <p>Venmo: Donna-Boyle-6</p></br>
          <p>The item you purchased will not be taken off the website until after you have paid. It will be put on hold for you for 24 hours while awaiting payment.</p></br>  
          <p>I will reach out to you in order to set up a time for you to pick up your item, or we can arrange shipment.</p></br>
          <p>  - Donna Boyle</p>
    `,      
    text: 'Donna\'s Crafts \'n Creations'
  }),
  
  confirmDonna: newReceipt => ({
    subject: 'New Order!',
    html: `<p>Order Name: ${newReceipt.firstName} ${newReceipt.lastName}</p>
           <p>Email: ${newReceipt.email}</p>
           <p>Phone Number: ${newReceipt.phone}</p>
    `,      
    text: 'Donna\'s Crafts \'n Creations'
  })

};