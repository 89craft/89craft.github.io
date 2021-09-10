import { PinDropSharp } from '@material-ui/icons';
import React from 'react';

function SearchSwitch(props) {
  const children = React.Children.toArray(props.children);
  //console.log("--- SearchSwitch ---");

  var hasValidChild = false;
  var childIndex = 0;
  for (var i = 0; i < children.length; i++) {
    const childPath = children[i].props.path;
    //console.log(childPath + " startsWith " + props.path);
    if (childPath.startsWith(props.path)) {
      hasValidChild = true;
      childIndex = i;
    }
  }
  //console.log(hasValidChild + " " + childIndex);
  //console.log(children[childIndex].props.path + " startsWith " + props.path);
  if (hasValidChild) {
    return children[childIndex];
  } else {
    return null;
  }
}
export default SearchSwitch;