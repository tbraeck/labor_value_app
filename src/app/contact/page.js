import { Box } from "@mui/material"
import Header from "../Header"
const Contact = () => {
  return (
    <Box sx={{height: '50%'}}>
      <Box>
        <Header></Header>
      </Box>

    <form className="contactCont">
      <h1>GET IN TOUCH</h1>
      <div className="email block">
        <label htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="block phone">
        <label htmlFor="frm-phone">Phone</label>
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className="name block">
        <div >
          <label htmlFor="frm-first">First Name</label>
          <input
            className="w-40"
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="frm-last">Last Name</label>
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className="message block">
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message" rows="6" name="message"></textarea>
      </div>
      <div className="button-block">
        <button  type="submit">Submit</button>
      </div>
    </form>
    </Box>
  )
}

export default Contact
