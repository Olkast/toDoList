import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

const narrowingError = ( error: FetchBaseQueryError
    | SerializedError): string | undefined => {
    if ('message' in error) {
        return error.message
    } else if ('error' in error) {
        return error.error
    }
}

export default narrowingError;