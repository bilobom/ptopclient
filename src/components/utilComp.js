import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'


const fileSqureStyles = () => ({
    holder: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 5,
        borderBottom: '5px solid green',
        borderLeft: '1px solid gray',
        borderRight: '1px solid gray',
        borderTop: '1px solid gray',
    }
})
export const FileSquare = withStyles(fileSqureStyles)((props) => {
    const { format, classes } = props
    return (
        <Grid container className={classes.holder}>
            <Grid item> <Typography>{format}</Typography></Grid>
        </Grid>
    )
})
