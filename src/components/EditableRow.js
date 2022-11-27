const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => (
  <tr key={editFormData.id}>
    <td>
      <input
        type='text'
        name='fullName'
        required='required'
        placeholder={editFormData.fullName}
        value={editFormData.fullName}
        onChange={handleEditFormChange}
      />
    </td>
    <td>
      <input
        type='text'
        name='address'
        required='required'
        value={editFormData.address}
        placeholder={editFormData.address}
        onChange={handleEditFormChange}
      />
    </td>
    <td>
      <input
        type='text'
        name='phoneNumber'
        required='required'
        value={editFormData.phoneNumber}
        placeholder={editFormData.phoneNumber}
        onChange={handleEditFormChange}
      />
    </td>
    <td>
      <input
        type='email'
        name='email'
        required='required'
        value={editFormData.email}
        placeholder={editFormData.email}
        onChange={handleEditFormChange}
      />
    </td>
    <td>
      <button type='submit'>Save</button>
      <button type='button' onClick={handleCancelClick}>
        Cancel
      </button>
    </td>
  </tr>
);

export default EditableRow;
