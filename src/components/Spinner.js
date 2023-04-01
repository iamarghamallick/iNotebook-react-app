import React from 'react'

const Spinner = () => {
    return (
        <>
            <div className="fixed-top container d-flex justify-content-center spinner-border text-primary my-3" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </>
    )
}

export default Spinner