<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @Route("/page/{name}", name="homepage2", requirements={"name"=".+"})
     */
    public function indexAction(Request $request, $name = "default/index")
    {

        // replace this example code with whatever you need
        return $this->render('pages/'.$name.'.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..'),
        ]);
    }

    /**
     * @Route("/modules/{name}/{param}", name="modules")
     */
    public function modulesAction (Request $request, $name, $param="") {

        $filename = realpath($this->getParameter('kernel.root_dir')).'/Resources/views/modules/'.$name.'.json';
        if (file_exists( $filename )) {
            $json = file_get_contents($filename);
            $json = json_decode($json, true);
        } else {
           throw new \Exception ( $filename );
        }

        // replace this example code with whatever you need
        return $this->render('modules/'.$name.'.html.twig', [
            'content' => $json["content"],
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..'),
        ]);

    }


}
