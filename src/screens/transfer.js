import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, withStyles, Typography } from '@material-ui/core'
import FileDrop from 'react-file-drop';
import FileBar from '../components/file'
export class Transfer extends Component {
  handleDrop = (files, event) => {
    console.log(files, event);
  }
  render() {
    const { classes } = this.props
    return (
      <Grid container className={classes.container}>
        <Grid container>
          <Grid item>
            <Typography>File Transfer </Typography>
            <hr />
          </Grid>
        </Grid>
        <Grid container className={classes.TransferHolder} spacing={24}>
          <Grid item xs>
            <Grid container className={classes.dropArea}>
              <Grid item>
                <FileDrop onDrop={this.handleDrop}>
                  Drop some files here!
                </FileDrop>
              </Grid>
              <Grid item>

              </Grid>
            </Grid>

          </Grid>
          <Grid item xs>
            <Grid container className={classes.fileArea}>
              <Grid item xs={12}>
                <FileBar />
              </Grid>
              <Grid item xs={12}>
                <FileBar />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}
const styles = theme => ({
  container: {
    backgroundColor: 'white',//'#282c34'
  },
  TransferHolder: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  fileArea:{
    flexDirection:'row'
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Transfer))
