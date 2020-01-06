
import {CHANGE,DELETE} from './actionType'

export const changeHeader = (value) => ({ type: CHANGE ,payload:value});
export const deleteHeader = () => ({ type: DELETE });