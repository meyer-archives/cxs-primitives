import React from 'react'
import cxs from 'cxs'

export default function componentFactory(displayName, parentStyleProps, defaultComponent) {
  const compy = ({children, component, props, ...styleProps}) => {
    const Component = component || defaultComponent || 'div'
    let className
    if (parentStyleProps || styleProps) {
      className = cxs({...parentStyleProps, ...styleProps})
    }
    return <Component {...props} className={className}>{children}</Component>
  }

  compy.displayName = displayName

  compy.propTypes = {
    children: React.PropTypes.node,
    component: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.func,
      React.PropTypes.object,
    ]).isRequired,
    props: React.PropTypes.object,
  }

  return compy
}
