import React from 'react';
type Props = {
    alertType: string,
    children: React.ReactNode
}
export const  AlertsTypes = React.memo(({ alertType , children}: Props) => {
  
    switch (alertType) {
        case 'danger':
            return(
                <div className="alert alert-danger animate__animated animate__bounce">
                    {children}
                </div>
            )
        case 'primary': 
            return (
                <div className="alert alert-primary animate__animated animate__fadeIn">
                    { children }
                </div>
            )
        case 'success':
            return (
                <div className="alert alert-success animate__animated animate__fadeIn">
                    { children }
                </div>
            )
        default : return (<></>)
    }
})