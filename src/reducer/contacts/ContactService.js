/*
    Joseph Caiani

    This is the service class. Its a dumb service that retrieves data using rest and returns json.
    At any point the protocol here can change, and it would not change the application as long as
    data format is consistent.

 */

class ContactService {
    /**
     * Creates a contact service
     * @param {}
     */
    constructor() {

    }
    /**
     * Creates a contact service request taking the request type and the destination url
     * @param {method}
     * @param {url}
     */
    request(method, url) {
        return new Promise(function (resolve, reject) {
            let httpRequest = new XMLHttpRequest();
            httpRequest.open(method, url);
            httpRequest.onload = resolve;
            httpRequest.onerror = reject;
            httpRequest.send();
        });
    }

    /**
     * Requests contact list
     * @return {Promise<[contactdata]>}
     */
    fetchContactList() {
        let path = 'https://jsonplaceholder.typicode.com/users';
        return this.request("GET", path)
            .then(data => this.checkStatusCode(data))
            .then(body => JSON.parse(body))
            .then(response => response);
    }

    /**
     * Requests external contact by id
     * @return {Promise<contactdata>}
     */
    fetchContactDetail(id) {
        let path = `https://jsonplaceholder.typicode.com/users/${id}`;
        return this.request("GET", path)
            .then(data => this.checkStatusCode(data))
            .then(body => JSON.parse(body))
            .then(response => response);
    }
    /**
     * check the status of the operation
     * @return {Promise<os>}
     */
    checkStatusCode (response) {
        if (this.isSuccessReturn(response.currentTarget.status) === false) {
            throw new Error(`Received status code ${response.currentTarget.status}`);
        }
        return response.currentTarget.response;
    }

    /**
     * check the given status for a success return value.
     *
     * @param status
     * @returns {boolean}
     */
     isSuccessReturn (status) {
        return (status === 200);
    }
}

export default ContactService;
