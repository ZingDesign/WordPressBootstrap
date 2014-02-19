<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>

                </div><!-- .row -->
            </div><!-- .container -->
		</div><!-- #main -->

		<footer id="colophon" class="site-footer" role="contentinfo">

            <div class="container">
                <?php get_sidebar( 'footer' ); ?>

                <div class="site-info">
                    <?php do_action( 'zdwpbs_credits' ); ?>
                    <a href="<?php echo esc_url( __( 'http://zingdesign.com/', 'zdwpbs' ) ); ?>" target="_blank"><?php printf( __( 'Boilerplate theme by %s', 'zdwpbs' ), 'Zing Design' ); ?></a>
                </div><!-- .site-info -->
            </div><!-- .container -->


		</footer><!-- #colophon -->
	</div><!-- #page -->

	<?php wp_footer(); ?>
</body>
</html>