const ContainerInternalComp = ({
  background,
  color,
  flexDirection,
  alignItems,
  justifyContent,
  fillSpace,
  margin,
  padding,
  children,
  shadow,
  radius
}) => {
  debugger;
  return (<div
    style={{
      justifyContent,
      flexDirection,
      alignItems,
      background: `rgba(${Object.values(background)})`,
      color: `rgba(${Object.values(color)})`,
      padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
      margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
      boxShadow:
        shadow == 0
          ? 'none'
          : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
      borderRadius: `${radius}px`,
      flex: fillSpace == 'yes' ? 1 : 'unset',
    }}
  >{children}</div>)
}


export default ContainerInternalComp;