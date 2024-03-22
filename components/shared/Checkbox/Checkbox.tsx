import React from 'react'

type CheckBoxProps = {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function CheckBox(props: CheckBoxProps) {
  return <input type="checkbox" {...props} />
}

export default CheckBox
