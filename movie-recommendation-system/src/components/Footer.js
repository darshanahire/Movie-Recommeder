import React from 'react'

function Footer() {
  return (
    <footer class="d-flex flex-wrap justify-content-center align-items-center pt-3 mt-4 border-top footer">
    <div class="col-md-4 d-flex align-items-center justify-content-center">
      <span class="text-body-secondary">&copy; {new Date().getFullYear()} Darshan Ahire - All rights reserved.</span>
    </div>
  </footer>
  )
}

export default Footer