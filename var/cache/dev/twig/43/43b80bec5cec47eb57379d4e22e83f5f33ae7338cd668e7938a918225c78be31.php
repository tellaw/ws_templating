<?php

/* pages/actualite/test.html.twig */
class __TwigTemplate_d0097a8f123ed92c3dcaff3d0c1e99c960f31077149db646a306ffac8eb200bd extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 3
        $this->parent = $this->loadTemplate("base.html.twig", "pages/actualite/test.html.twig", 3);
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
        $__internal_620ee4ceb8f9af517b56bc176374de78f3311736a7fafb01f9e9e2e0487cb962 = $this->env->getExtension("native_profiler");
        $__internal_620ee4ceb8f9af517b56bc176374de78f3311736a7fafb01f9e9e2e0487cb962->enter($__internal_620ee4ceb8f9af517b56bc176374de78f3311736a7fafb01f9e9e2e0487cb962_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "pages/actualite/test.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_620ee4ceb8f9af517b56bc176374de78f3311736a7fafb01f9e9e2e0487cb962->leave($__internal_620ee4ceb8f9af517b56bc176374de78f3311736a7fafb01f9e9e2e0487cb962_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_d22cd4ecfbb068e8670f35648eba861dbce0fb8e449636f6811c9b2a44672f82 = $this->env->getExtension("native_profiler");
        $__internal_d22cd4ecfbb068e8670f35648eba861dbce0fb8e449636f6811c9b2a44672f82->enter($__internal_d22cd4ecfbb068e8670f35648eba861dbce0fb8e449636f6811c9b2a44672f82_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Le titre de ma page de test";
        
        $__internal_d22cd4ecfbb068e8670f35648eba861dbce0fb8e449636f6811c9b2a44672f82->leave($__internal_d22cd4ecfbb068e8670f35648eba861dbce0fb8e449636f6811c9b2a44672f82_prof);

    }

    // line 7
    public function block_body($context, array $blocks = array())
    {
        $__internal_349dd2beff4b9ff5e97cd1e6969daa44424eac62d4b384f571573a6be9d96cdc = $this->env->getExtension("native_profiler");
        $__internal_349dd2beff4b9ff5e97cd1e6969daa44424eac62d4b384f571573a6be9d96cdc->enter($__internal_349dd2beff4b9ff5e97cd1e6969daa44424eac62d4b384f571573a6be9d96cdc_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 8
        echo "
    <h1>Actualité</h1>

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
        
        $__internal_349dd2beff4b9ff5e97cd1e6969daa44424eac62d4b384f571573a6be9d96cdc->leave($__internal_349dd2beff4b9ff5e97cd1e6969daa44424eac62d4b384f571573a6be9d96cdc_prof);

    }

    public function getTemplateName()
    {
        return "pages/actualite/test.html.twig";
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
/* {# template : Le nom de mon template #}*/
/* {# description : La description sur une ligne de mon template #}*/
/* {% extends 'base.html.twig' %}*/
/* */
/* {% block title %}Le titre de ma page de test{% endblock %}*/
/* */
/* {% block body %}*/
/* */
/*     <h1>Actualité</h1>*/
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
/* */
