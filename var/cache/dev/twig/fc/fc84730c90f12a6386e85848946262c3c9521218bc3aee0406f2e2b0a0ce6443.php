<?php

/* pages/test/actualite/toto.html.twig */
class __TwigTemplate_5a53c722c427027ce7c5546583422d0e3a21fce02e1df47c443c40b5ffb54cdd extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 3
        $this->parent = $this->loadTemplate("base.html.twig", "pages/test/actualite/toto.html.twig", 3);
        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_3357e1a405b1def5f072fa7841d7821ff18260ec9904310fd921e7b5d84026b3 = $this->env->getExtension("native_profiler");
        $__internal_3357e1a405b1def5f072fa7841d7821ff18260ec9904310fd921e7b5d84026b3->enter($__internal_3357e1a405b1def5f072fa7841d7821ff18260ec9904310fd921e7b5d84026b3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "pages/test/actualite/toto.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_3357e1a405b1def5f072fa7841d7821ff18260ec9904310fd921e7b5d84026b3->leave($__internal_3357e1a405b1def5f072fa7841d7821ff18260ec9904310fd921e7b5d84026b3_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_03eeb9cea1f28355f5c3b6f761d9ec240c8ed74926a888dedf6e5d758925c8e7 = $this->env->getExtension("native_profiler");
        $__internal_03eeb9cea1f28355f5c3b6f761d9ec240c8ed74926a888dedf6e5d758925c8e7->enter($__internal_03eeb9cea1f28355f5c3b6f761d9ec240c8ed74926a888dedf6e5d758925c8e7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Le titre de ma page de test";
        
        $__internal_03eeb9cea1f28355f5c3b6f761d9ec240c8ed74926a888dedf6e5d758925c8e7->leave($__internal_03eeb9cea1f28355f5c3b6f761d9ec240c8ed74926a888dedf6e5d758925c8e7_prof);

    }

    // line 7
    public function block_body($context, array $blocks = array())
    {
        $__internal_1997b0a4cc1ae633bf1dedfe688a27fde847c675c700cc7b06173d5267975e34 = $this->env->getExtension("native_profiler");
        $__internal_1997b0a4cc1ae633bf1dedfe688a27fde847c675c700cc7b06173d5267975e34->enter($__internal_1997b0a4cc1ae633bf1dedfe688a27fde847c675c700cc7b06173d5267975e34_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 8
        echo "
    <h1>Actualité Toto</h1>

    ";
        // line 11
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('http_kernel')->controller("AppBundle:Default:modules", array("name" => "module-test")));
        echo "

    <img src=\"";
        // line 13
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("bundles/framework/images/blue_picto_less.gif"), "html", null, true);
        echo "\" />

    ";
        // line 15
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('http_kernel')->controller("AppBundle:Default:modules", array("name" => "module-test")));
        echo "

    ";
        // line 17
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('http_kernel')->controller("AppBundle:Default:modules", array("name" => "module-test")));
        echo "

    ";
        // line 19
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('http_kernel')->controller("AppBundle:Default:modules", array("name" => "module-test")));
        echo "

";
        
        $__internal_1997b0a4cc1ae633bf1dedfe688a27fde847c675c700cc7b06173d5267975e34->leave($__internal_1997b0a4cc1ae633bf1dedfe688a27fde847c675c700cc7b06173d5267975e34_prof);

    }

    public function getTemplateName()
    {
        return "pages/test/actualite/toto.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 19,  73 => 17,  68 => 15,  63 => 13,  58 => 11,  53 => 8,  47 => 7,  35 => 5,  11 => 3,);
    }
}
/* {# wk-template : Le nom de mon template #}*/
/* {# wk-description : La description sur une ligne de mon template #}*/
/* {% extends 'base.html.twig' %}*/
/* */
/* {% block title %}Le titre de ma page de test{% endblock %}*/
/* */
/* {% block body %}*/
/* */
/*     <h1>Actualité Toto</h1>*/
/* */
/*     {{ render(controller( 'AppBundle:Default:modules',   { 'name': 'module-test' } )) }}*/
/* */
/*     <img src="{{ asset('bundles/framework/images/blue_picto_less.gif') }}" />*/
/* */
/*     {{ render(controller( 'AppBundle:Default:modules',   { 'name': 'module-test' } )) }}*/
/* */
/*     {{ render(controller( 'AppBundle:Default:modules',   { 'name': 'module-test' } )) }}*/
/* */
/*     {{ render(controller( 'AppBundle:Default:modules',   { 'name': 'module-test' } )) }}*/
/* */
/* {% endblock %}*/
/* */
