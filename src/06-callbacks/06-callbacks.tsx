import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import React, {ChangeEvent, MouseEvent, useState} from 'react';

export const User = () => {

  const [inputValue, setInputValue] = useState<string>('Dimych')

  const saveUser = (e: MouseEvent<HTMLButtonElement>) => {
    inputValue.trim() !== '' && alert(`Success operation ${e.currentTarget.name}: user ${inputValue} saved!`)
  }
  const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    setInputValue('')
    alert(`Success operation ${e.currentTarget.name}: field cleaned!`)
  }
  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
    console.log('input changed')
  }
  const focusLostHandler = () => {
    console.log('focus lost')
  }

  return (
    <div>
      <TextField
        id="filled-multiline-static"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="filled"
        value={inputValue}
        onChange={onChangeInput}
        onBlur={focusLostHandler}
      />
      <br/>
      <Button onClick={saveUser} name={'add'}><AddIcon/></Button>
      <Button onClick={deleteUser} name={'delete'}><DeleteIcon/></Button>
    </div>
  )
}