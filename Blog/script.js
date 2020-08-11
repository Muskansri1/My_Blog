  $(document).ready(function(){
    $('.sidenav').sidenav();
    $(".slider").slider({
          indicators: false,
          height: 600,
          transition: 500,
          interval: 6000,
        });

        // Autocomplete
        $(".autocomplete").autocomplete({
          data: {
            Recipes: null,
            Videos: null,
            Trips: null,
            Tutorials: null,
            'How-To': null
          },
        });
    
       $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 400, // Transition in duration
      outDuration: 400, // Transition out duration
       });
  });

  /*
  <div class="navbar-fixed">
<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><i class="fas fa-book-open hide-on-med-and-down"></i>Writer's Space</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down right-align">
        <li> 
          <div class="input-field valign-wrapper">
              <input
                class="white grey-text autocomplete"
                placeholder="Search blog posts"
                type="text"
                id="autocomplete-input"
              />
        </div>  
        </li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a class="waves-effect waves-light btn modal-trigger" href="#signup-modal">Subscribe</a></li>
      </ul>
    </div>
  </nav>
</div>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="#"><p>Home</p></a></li>
    <li><a href="#"><p>About</p></a></li>
    <li><a href="#"><p>Contact</p></a></li>
    <li><a class="waves-effect waves-light btn btn-large modal-trigger" href="#signup-modal">Subscribe</a></li>
  </ul>
  
    <!-- Section: Slider -->
    <section class="slider">
      <ul class="slides">
        <li>
          <img src="https://wallpaperaccess.com/full/1692872.jpg">
          <div class="caption center-align hide-on-small-only">
            <h2>Neil Gaiman, Coraline-</h2>
            <h5 class="light grey-text text-lighten-3 hide-on-small-only">
              Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.
            </h5>
          <!--  <a href="#" class="btn btn-large">Learn More</a>-->
          </div>
        </li>
        <li>
          <img id="img-2" src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&w=1000&q=80"/>
          <div class="caption left-align hide-on-small-only">
            <h2>Jorge Luis Borges-</h2>
            <h5 class="light grey-text text-lighten-3 hide-on-small-only">
              I have always imagined that Paradise will be a kind of library.
            </h5>
           <!-- <a href="#" class="btn btn-large">Learn More</a>-->
          </div>
        </li>
        <li>
           <img id="img-3" src="data:image/jpeg;base64,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">
             <div class="caption right-align hide-on-small-only">
            <h2>Cassandra Clare, Clockwork Angel</h2>
            <h5 class="light grey-text text-lighten-3 hide-on-small-only">
              One must always be careful of books," said Tessa, "and what is inside them, for words have the power to change us.
            </h5>
            <!--<a href="#" class="btn btn-large">Learn More</a>-->
          </div>
        </li>
      </ul>
    </section>





<!-- Main Section with Blog Posts -->
  <div class="container">
  <div class="row center-align">
    <div class="col m12 l6">
      <div class="card z-depth-5">
        <div class="video-container">
        <iframe height="auto" src="https://res.cloudinary.com/dfmb0juhs/video/upload/v1579213705/Three-Swans_zyp8w6.mp4" frameborder="0" allowfullscreen></iframe>
     

          <span class="card-title">Post Title</span>
 </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
                <a class="modal-trigger" href="#post-modal">View Full Post</a>
        </div>
      </div>
    </div>
     <div class="col m12 l6">
      <div class="card z-depth-5">
        <div class="video-container">
        <iframe height="auto" src="https://res.cloudinary.com/dfmb0juhs/video/upload/v1579213705/Three-Swans_zyp8w6.mp4" frameborder="0" allowfullscreen></iframe>
     



          <span class="card-title">Post Title</span>
 </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
                <a class="modal-trigger" href="#post-modal">View Full Post</a>
        </div>
      </div>
    </div>
     <div class="col m12 l6">
      <div class="card z-depth-5">
        <div class="video-container">
        <iframe height="auto" src="https://res.cloudinary.com/dfmb0juhs/video/upload/v1579213705/Three-Swans_zyp8w6.mp4" frameborder="0" allowfullscreen></iframe>
     
          <span class="card-title">Post Title</span>
 </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
                <a class="modal-trigger" href="#post-modal">View Full Post</a>
        </div>
      </div>
    </div>
     <div class="col m12 l6">
      <div class="card z-depth-5">
        <div class="video-container">
        <iframe height="auto" src="https://res.cloudinary.com/dfmb0juhs/video/upload/v1579213705/Three-Swans_zyp8w6.mp4" frameborder="0" allowfullscreen></iframe>
     
          <span class="card-title">Post Title</span>
 </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a class="modal-trigger" href="#post-modal">View Full Post</a>
        </div>
      </div>
    </div>
    </div>
  </div>

    </main>


  <!-- Section: About -->
  <section class="about">
    <div class="row">
      <div class="col s12 center"><h1 class="flow-text">About Us</h1></div>
      <div class="col m12 l6 center">
        <p class="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti omnis, consequuntur in vero possimus fugit saepe odio perspiciatis aspernatur facere vitae eveniet? Recusandae eveniet delectus voluptatibus quos explicabo dolore sequi.
        Eveniet, nulla iste dolorum facere delectus iusto velit sit quae fugit pariatur esse perspiciatis nobis cumque. Similique, est assumenda eum laborum, tempore quibusdam illum delectus ullam ratione esse consectetur sequi.
        Dignissimos eius animi adipisci explicabo reprehenderit qui ducimus perspiciatis, debitis illo eum excepturi nihil ut hic officia optio atque sit autem consequatur ex doloribus laudantium dolores odio? Repellendus, deleniti beatae.
       </p>   </div>
      <div class="col m12 l6 right-align">
        <img class="responsive-img" src="https://i.imgur.com/ZTkt4I5.jpg" />  </div>
    </div>
  </section>

<!-- Footer -->
<footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Social Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-facebook"></i>Facebook</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-twitter"></i>Twitter</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">
                    <i class="fab fa-instagram"></i>Instagram</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-youtube"></i>YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            <a href="#!" class="brand-logo white-text"> © 2020 Logo</a>
            <button class="btn right waves-effect waves-light btn modal-trigger" href="#modal1">Subscribe</button>
            </div>
          </div>
        </footer>
  
    
  <!-- Sign Up Modal -->
  <div id="signup-modal" class="modal">
    <div class="modal-content">
      <h4>Subscribe For Updates</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci porro veritatis doloribus? Quidem neque corporis, est mollitia fugiat laudantium ullam at, reiciendis sit labore voluptatum accusantium aut? Porro, reprehenderit!</p>
        <div class="row">
          <form class="col s12">
            <div class="row">
            <div class="input-field col s12">
            <input id="email" type="email" class="validate">
            <label for="email">Email</label>
            <span class="helper-text" data-error="Please enter a valid email address" data-success="Success!">Please enter your email address</span>
        </div>
      </div>
    </form>
  </div>
    </div>
    <div class="modal-footer">         
      <button href="#!" class="modal-action modal-close waves-effect waves-red btn-flat" id="cancel">Cancel</button>
      <button href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" id="submit" onclick="Materialize.toast('I am a toast', 4000)">Sign Up</button>
    </div>
  </div>
  
  <!-- Post Modal -->

  <div id="post-modal" class="modal center-align">
    <div class="modal-content center">
      <h1 class="flow-text">Post Title</h1>
      <p class="flow-text" id="date">05.12.2020</p>
      <p class="flow-text" id="post-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam vitae nisi tempore quis. Adipisci cupiditate et voluptate enim tempora mollitia sint dolore id in.</p>
      <div class="video-container center-align">
        <iframe height="auto" src="https://res.cloudinary.com/dfmb0juhs/video/upload/v1579213705/Three-Swans_zyp8w6.mp4" frameborder="0" allowfullscreen></iframe>
      </div>
        <div class="row z-depth-2" id="transcript">
          <div class="col s12 center">
          <h2 class="flow-text">Full Transcript: </h2>
          <p class="grey-text darken-1" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam culpa eligendi architecto corporis non rem ex error ipsa quaerat sit a placeat maxime veniam sunt quod soluta, enim quos iusto et velit ratione voluptatibus magni nisi.
        <br>
        Quis aperiam consequuntur necessitatibus? Amet numquam dicta minima voluptate labore tempora temporibus cum nobis, doloribus, nihil id fugit! Magni doloremque explicabo quis ea dolore incidunt exercitationem numquam quam, perferendis esse aliquid porro rerum libero, ducimus blanditiis nulla nesciunt quo placeat. Molestias neque, ratione illo, quidem ad, voluptate nobis itaque sed eligendi quae similique recusandae est atque id. 
        <br>
        Explicabo fuga beatae, alias voluptatum et vero impedit quae tempora, natus enim distinctio. Iste veritatis fugiat aliquam architecto.
        <br>
        Debitis sapiente iure, delectus exercitationem voluptate ipsum optio mollitia expedita impedit nostrum quia. Officiis, non cumque expedita nisi id exercitationem quas molestias labore iure in modi ad. Quis aut modi illo amet dolorum velit debitis eaque voluptates fuga ad.
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempora dolore neque natus totam itaque nam cum cumque hic laudantium impedit quo quibusdam facilis sapiente minus nisi sint obcaecati quaerat fugiat distinctio, repellat ducimus. Odit dolore fuga dolor voluptatum deleniti laboriosam maiores voluptatibus quae libero architecto laudantium accusantium perspiciatis asperiores a doloremque vel inventore porro, rem illum animi ipsam eveniet ipsum vero culpa? Nostrum incidunt consequuntur nesciunt quas impedit, pariatur doloremque fugiat alias id atque cupiditate obcaecati consequatur harum maxime autem, omnis esse at officia accusamus totam voluptates. 
        <br>
        Rem nobis repudiandae, consectetur perferendis delectus vitae deserunt maiores aspernatur, veniam, ut animi provident? 
        <br>
        Porro quod ad temporibus molestiae aperiam. Possimus recusandae, dolore, aspernatur et placeat dolorum natus repellat, vel nobis voluptas nulla quaerat voluptate voluptatum inventore quas. 
        <br>
        Quasi, similique atque esse dicta rerum explicabo voluptates quo! Labore sapiente quasi ipsam, corrupti fugit velit eaque recusandae optio, culpa pariatur omnis, veritatis eum.
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos fuga perferendis explicabo accusamus reiciendis deserunt cum. Sint nihil harum, quam magnam laboriosam eveniet possimus voluptatem illum similique ipsam deleniti adipisci aliquid consectetur quas sapiente. Sit sed, assumenda sapiente quaerat iure in maiores repudiandae at quasi quo voluptatum culpa modi sunt? Distinctio assumenda earum itaque illum, ipsa vitae saepe nesciunt repudiandae veniam reiciendis iusto minima reprehenderit ab ipsam vel sint. Provident optio suscipit nihil et voluptas neque, laboriosam a necessitatibus quaerat saepe harum facilis reiciendis? 
        <br>
        Voluptatibus dolorem est dolor quae consequatur! Adipisci itaque reprehenderit molestiae ab magnam sed animi nostrum, perspiciatis impedit libero consequatur quibusdam pariatur rem ratione a expedita minus distinctio repellendus. 
        <br>
        Eveniet doloremque voluptate repellat voluptas. Rerum assumenda doloribus nisi dignissimos nemo, vel eum incidunt corrupti ex rem a ducimus repudiandae voluptatem! Quibusdam, repudiandae excepturi esse eos accusantium provident. Rem similique deserunt ab expedita! Fugiat vel dolores aliquid.
      </p>
      </div>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#" id="download">Download Transcript</a>
    </div>
  </div>
  */
