<?php

/* pages/actualite/toto.html.twig */
class __TwigTemplate_fde6193d06541899d5a8b9a2b04ebebc07260b6f48077d37332c8eb2440fc625 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 3
        $this->parent = $this->loadTemplate("base.html.twig", "pages/actualite/toto.html.twig", 3);
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
        $__internal_c59631ef92086d3abe4024f8eb38e1994d2e1196bc2f21bb39f677d4eab60e2b = $this->env->getExtension("native_profiler");
        $__internal_c59631ef92086d3abe4024f8eb38e1994d2e1196bc2f21bb39f677d4eab60e2b->enter($__internal_c59631ef92086d3abe4024f8eb38e1994d2e1196bc2f21bb39f677d4eab60e2b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "pages/actualite/toto.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_c59631ef92086d3abe4024f8eb38e1994d2e1196bc2f21bb39f677d4eab60e2b->leave($__internal_c59631ef92086d3abe4024f8eb38e1994d2e1196bc2f21bb39f677d4eab60e2b_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_086632a87bac218491f94ab7a3ea43db37ca7b0a366e0695147d8542c99b898c = $this->env->getExtension("native_profiler");
        $__internal_086632a87bac218491f94ab7a3ea43db37ca7b0a366e0695147d8542c99b898c->enter($__internal_086632a87bac218491f94ab7a3ea43db37ca7b0a366e0695147d8542c99b898c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Le titre de ma page de test";
        
        $__internal_086632a87bac218491f94ab7a3ea43db37ca7b0a366e0695147d8542c99b898c->leave($__internal_086632a87bac218491f94ab7a3ea43db37ca7b0a366e0695147d8542c99b898c_prof);

    }

    // line 7
    public function block_body($context, array $blocks = array())
    {
        $__internal_aa25dd863b6363a653c365069dd9ad7fb0586ff5c7e40fd424103982ed836fe0 = $this->env->getExtension("native_profiler");
        $__internal_aa25dd863b6363a653c365069dd9ad7fb0586ff5c7e40fd424103982ed836fe0->enter($__internal_aa25dd863b6363a653c365069dd9ad7fb0586ff5c7e40fd424103982ed836fe0_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

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
        
        $__internal_aa25dd863b6363a653c365069dd9ad7fb0586ff5c7e40fd424103982ed836fe0->leave($__internal_aa25dd863b6363a653c365069dd9ad7fb0586ff5c7e40fd424103982ed836fe0_prof);

    }

    public function getTemplateName()
    {
        return "pages/actualite/toto.html.twig";
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
