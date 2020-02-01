import React from 'react';

const styles = {
  header: {
    background: 'darkslategrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'darkgrey',
    padding: '100px'
  }
};
export default function Header({ children }) {
  return <header style={styles.header}>{children}</header>;
}
