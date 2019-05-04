import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Grid, withStyles, LinearProgress, Typography } from '@material-ui/core';
import { FileSquare } from './utilComp';
import { Cancel } from '@material-ui/icons'
const file = { name: 'file.png', format: 'PNG', completed: false, progress: 20 }

export class File extends Component {

    render() {
        const { classes } = this.props
        return (
            <Grid container className={classes.holder} spacing={8}>
                <Grid item xs={2}>
                    <FileSquare {...file} />
                </Grid>
                <Grid item xs={8}>
                    <Grid container className={classes.infoHolder}>
                        <Grid item xs={12}>
                            <Grid container className={classes.fileNameRow}>
                                <Grid item>
                                    <Typography style={{ fontSize: 18, fontWeight: 'bold' }}>{file.name}</Typography>
                                </Grid>
                                <Grid item>
                                    <Grid container direction='row' alignItems='center'>
                                        <Grid item>
                                            <Typography style={{ fontWeight: 'bold' }}>{file.progress + ' %'}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Cancel style={{ color: '#FFD6D6', backgroundColor: 'red', borderRadius: 50 }} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container className={classes.progressHolder}>
                                <Grid item xs={12}>
                                    <Typography style={{ fontSize: 10, fontWeight: '300' }}>{file.completed ? 'COMPLETED' : 'TRANSFERING'}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <LinearProgress value={20} />
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

// const mapStateToProps = (state) => ({
// })
// const mapDispatchToProps = {
// }

const styles = theme => ({
    holder: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'space-around'
    },
    infoHolder: {
        alignItems: 'center'
    },
    fileNameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
export default withStyles(styles)(File)