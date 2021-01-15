import './contact.css';

function Contact() {

  return (

    <div class="content py-5  bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <span class="anchor" id="formContact"></span>
            <div class="card card-outline-secondary">
              <div class="card-header">
                <h3 class="mb-0">Contact</h3>
              </div>
              <div class="card-body">
                <form class="form" autocomplete="off">
                  <fieldset>
                    <label for="name2" class="mb-0">Name</label>
                    <div class="row mb-1">
                      <div class="col-lg-12">
                        <input type="text" name="name2" id="name2" class="form-control" required="" />
                      </div>
                    </div>
                    <label for="email2" class="mb-0">Email</label>
                    <div class="row mb-1">
                      <div class="col-lg-12">
                        <input type="text" name="email2" id="email2" class="form-control" required="" />
                      </div>
                    </div>
                    <label for="message2" class="mb-0">Message</label>
                    <div class="row mb-1">
                      <div class="col-lg-12">
                        <textarea rows="6" name="message2" id="message2" class="form-control" required=""></textarea>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-secondary btn-lg float-right">Send Message</button>
                  </fieldset>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}


export default Contact;