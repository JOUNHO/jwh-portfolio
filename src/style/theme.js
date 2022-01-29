const size = {
  mobile:"768px",
  tabletMin:"769px",
  tabletMax:"1023px",
  desktop:"1024px",
}

const theme = {
  mobile:`(max-width: ${size.mobile})`,
  tablet:`(min-width:${size.tabletMin}) and (max-width: ${size.tabletMax})`,
  desktop:`(min-width: ${size.desktop})`,
}
export default theme;