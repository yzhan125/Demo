// import styles from "../styles/layout.module.css"

// const Layout = ({children}) => {
//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         {children}
//       </main>
//     </div>
//   )
// }

// export default Layout

import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>hello</h1>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout