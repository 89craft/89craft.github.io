import { PinDropSharp } from '@material-ui/icons';
import React from 'react';

function SearchSwitch(props) {
  const children = React.Children.toArray(props.children)
  console.log("SearchSwitch");
  //console.log(props);

  for (var i = 0; i < children.length; i++) {
    console.log(children[i]);
    console.log(children[i].props.path);
    if (children[i].props.path === props.path) {
      return children[i];
    }
  }
  //return null;
}
export default SearchSwitch;