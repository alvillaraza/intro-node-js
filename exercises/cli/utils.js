const fs = require('fs')
const path = require('path')

const contactsLocation = path.join(__dirname, 'contacts.json')
const getContacts = () => JSON.parse(fs.readFileSync(contactsLocation))
const saveContacts = (contacts) => fs.writeFileSync(contactsLocation, JSON.stringify(contacts, null, 2)) //null, 2 formats json better

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {

}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

