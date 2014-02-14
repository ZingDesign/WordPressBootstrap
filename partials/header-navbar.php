<?php
/**
 * Created by PhpStorm.
 * User: Zing Design
 * Date: 14/02/14
 * Time: 2:36 PM
 */ ?>

<header id="masthead" class="navbar navbar-default" role="banner">
    <div class="container">
        <nav class="" role="navigation">
<!--            <div class="container-fluid">-->
                <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-navbar-collapse-1">

                <!--            <form class="navbar-form navbar-left" role="search">-->
                <!--                <div class="form-group">-->
                <!--                    <input type="text" class="form-control" placeholder="Search">-->
                <!--                </div>-->
                <!--                <button type="submit" class="btn btn-default">Submit</button>-->
                <!--            </form>-->

                <a class="screen-reader-text skip-link" href="#content"><?php _e( 'Skip to content', 'zdwpbs' ); ?></a>
                <?php wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav navbar navbar-right',
                    'container' => '',
                    'container_class' => false
                ) ); ?>
            </div><!-- /.navbar-collapse -->
<!--            </div>-->
    <!-- /.container-fluid -->
        </nav>
    </div><!-- .container -->
</header>