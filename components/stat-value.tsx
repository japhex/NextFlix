import React from 'react'
import { Value } from 'styled/stat-row.styled'

interface StatRowProps {
  value: string | number
}

const StatRow: React.FC<StatRowProps> = ({ value }) => (
  <Value value={value}>{value}</Value>
)

export default StatRow
