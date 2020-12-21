import React, { ReactNode } from 'react'
import {AppBar,Typography,Toolbar} from '@material-ui/core/';
// import Firebaseauth from './Firebaseauth'
type LayoutProps = {
    children: ReactNode
}

export default ({ children }: LayoutProps) => {
    return (
        <div>
            <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">BlogPost</Typography>
                </Toolbar>
            </AppBar>
            </div>
            <div style={{marginTop:"100px"}}>
                  {children}
            </div>
             {/* <Firebaseauth />  */}
        </div>
    )
}
