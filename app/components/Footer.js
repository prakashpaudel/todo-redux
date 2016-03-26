import React, { PropTypes } from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
  	Show:
  	{" "}
    <FilterLink filter="SHOW_ALL" />
    All
    {", "}
    <FilterLink filter="SHOW_ACTIVE" />
    Active
    {", "}
    <FilterLink filter="SHOW_COMPLETED" />
    Completed
    {", "}
  </p>
)

export default Footer