import React, { ReactNode } from 'react'
import {AppBar,Typography,Toolbar} from '@material-ui/core/';
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
            <div style={{marginTop:"70px"}}>
                  {children}
            </div>
        </div>
    )
}
