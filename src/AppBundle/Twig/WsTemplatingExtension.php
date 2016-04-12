<?php
/**
 * Created by Eric Wallet
 * @author olombard
 * Date: 01/04/2016
 */

namespace AppBundle\Twig;

use Symfony\Component\DependencyInjection\ContainerInterface as Container;

class WsTemplatingExtension extends \Twig_Extension
{

	private $container;

	public function __construct(Container $container)
	{
		$this->container = $container;
	}

	public function getFunctions()
	{
		return array(
			'module' => new \Twig_Function_Method($this, 'getModule'),
			'media' => new \Twig_Function_Method($this, 'getMedia'),
			'css' => new \Twig_Function_Method($this, 'getCss'),
			'js' => new \Twig_Function_Method($this, 'getJs')
		);
	}

	public function getModule ($value) {

		$filename = realpath($this->container->getParameter('kernel.root_dir')).'/Resources/views/modules/'.$value.'.html.twig';
		if (!file_exists( $filename )) {
			echo ("<div style='color:red'>** Module non disponible : ".$filename."**</div>");
		} else {

			// replace this example code with whatever you need
			echo $this->container->get('templating')->render('modules/'.$value.'.html.twig', [
				'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..'),
			]);
		}

	}

	public function getMedia ($value) {

		$path = $this->container->get('router')->getContext()->getBaseUrl();
		$path = str_replace ("app_dev.php", "", $path);
		// replace this example code with whatever you need
		echo ($path."bundles/framework/images/".$value);


	}

	public function getCss ($value) {

		$path = $this->container->get('router')->getContext()->getBaseUrl();
		$path = str_replace ("app_dev.php", "", $path);
		// replace this example code with whatever you need
		echo ($path."css/".$value);


	}
	public function getJs ($value) {

		$path = $this->container->get('router')->getContext()->getBaseUrl();
		$path = str_replace ("app_dev.php", "", $path);
		// replace this example code with whatever you need
		echo ($path."bundles/framework/js/".$value);


	}

	public function getName()
	{
		return 'ws_templating_extension';
	}
}
