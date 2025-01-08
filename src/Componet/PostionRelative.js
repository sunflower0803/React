function Position () {
    return(
 <div className="subscribe-content bg-dark d-flex flex-wrap justify-content-center align-items-center padding-medium">
  <div className="col-md-6 col-sm-12">
    <div className="display-header pe-3">
      <h2 className="display-7 text-uppercase text-light">Subscribe Us Now</h2>
      <p>Get latest news, updates and deals directly mailed to your inbox.</p>
    </div>
  </div>
  <div className="col-md-5 col-sm-12">
    <form className="subscription-form validate">
      <div className="input-group flex-wrap">
        <input className="form-control btn-rounded-none" type="email" name="EMAIL" placeholder="Your email address here" required />
        <button className="btn btn-medium btn-primary text-uppercase btn-rounded-none" type="submit" name="subscribe">Subscribe</button>
      </div>
    </form>
  </div>
</div>


    )
}

export default Position;