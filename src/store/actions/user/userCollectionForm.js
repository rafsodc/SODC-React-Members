import axios from '../../../utils/axios/axios'
import actionTypes from '../../actionTypes'
import { submitForm } from '../../helpers/formActions'
import { dataHandler } from '../../helpers/utility'
import paths from '../../paths'

const clearAll = () => ({
    type: actionTypes.user.CLEAR_ALL
})

export const loadUserCollection = () => dispatch => {
    const path = paths.user.GET_COLLECTION
    axios.get(path).then((response) => {
        const addUserForm = response.data['hydra:member'].map(form => {
            const {data, location} = dataHandler(form);
            return addUser(data, location)
        })
        return dispatch([clearAll(), addUserForm])
    }).catch(error => {})
}

const addUser = (data = null, location = null) => ({
    type: actionTypes.user.ADD,
    data: data,
    settings: {
      isSaved: location !== null,
      location: location,
    }
})

export const approveUser = (data, location = null) => {
    return submitForm(actionTypes.ticketType.NAME, data, data.id, location + "/approve")
}
  

// const deleteUser = (id, location) => dispatch => {
//     if (location !== null) {
//       axios.delete(location).then(
//         dispatch(removeTicketType(id))
//       )
//     } else {
//       dispatch(removeTicketType(id))
//     }
// }