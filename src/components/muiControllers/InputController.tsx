import { TextField,FormHelperText } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IInputControllerProp } from '../../types/muiControllers/IInputControllerProp'



const InputController = ({control,name,label}:IInputControllerProp) => {
  return (
    <Controller
        name={name}
         control={control}
         render={({ field, formState:{errors},fieldState:{error} }) => {
            return (
                <>
                <TextField
                {...field}
                label={label}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!error}
                />
                {
                    error !== undefined 
                        &&
                        (
                            <FormHelperText>
                                {error.message}
                            </FormHelperText>
                        )
                }
                </>
                )
            }}
    />
  )
}

export default InputController
