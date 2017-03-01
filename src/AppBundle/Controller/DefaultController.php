<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @param Request $request
     * @Route ("/", name="home")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request) {
        return $this->render('pages/accueil.html.twig');
    }

    /**
     * @Route("/{slug}", name="homepage3", requirements={"slug"=".+"})
     * @param Request $request
     * @param string $slug
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function pageAction(Request $request, $slug = "accueil")
    {
        $slug = str_replace("page/", "" , $slug);
        $slug = str_replace("page", "" , $slug);
        if (strlen($slug) < 2) return $this->redirect("/");

        try {
            return $this->render('pages/'.$slug.'.html.twig');
        } catch(Exception $e) {
            return $this->redirect("/");
        }
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
