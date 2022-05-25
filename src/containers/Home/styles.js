import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
    return {
        bottomDiv: {
            width: 100,
            height: 100,
            backgroundColor: 'red'
        },
        textField: {
            backgroundColor: 'green',
            border: '5px solid yellow'
        }
    }
})