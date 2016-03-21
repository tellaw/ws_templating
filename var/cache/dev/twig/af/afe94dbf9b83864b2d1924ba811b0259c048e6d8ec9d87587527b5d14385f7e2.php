<?php

/* pages/default/index.html.twig */
class __TwigTemplate_7d9512c84d9dca4f5cae00f75fe243b5284ebc461574dcfe34eb55916cd273ad extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 3
        $this->parent = $this->loadTemplate("base.html.twig", "pages/default/index.html.twig", 3);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_fd86474ba5d1d01a0e5367dfe03377fa205b8b5ca9dc994c8e2377bebbacb32b = $this->env->getExtension("native_profiler");
        $__internal_fd86474ba5d1d01a0e5367dfe03377fa205b8b5ca9dc994c8e2377bebbacb32b->enter($__internal_fd86474ba5d1d01a0e5367dfe03377fa205b8b5ca9dc994c8e2377bebbacb32b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "pages/default/index.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_fd86474ba5d1d01a0e5367dfe03377fa205b8b5ca9dc994c8e2377bebbacb32b->leave($__internal_fd86474ba5d1d01a0e5367dfe03377fa205b8b5ca9dc994c8e2377bebbacb32b_prof);

    }

    // line 5
    public function block_body($context, array $blocks = array())
    {
        $__internal_6831eb58da77da9ffefe7291db508ae2b4cef58c25c04860ffd7537838db6373 = $this->env->getExtension("native_profiler");
        $__internal_6831eb58da77da9ffefe7291db508ae2b4cef58c25c04860ffd7537838db6373->enter($__internal_6831eb58da77da9ffefe7291db508ae2b4cef58c25c04860ffd7537838db6373_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "
    <h1>Hello World 2</h1>

    ";
        // line 9
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('http_kernel')->controller("AppBundle:Default:modules", array("name" => "module-test")));
        echo "

";
        
        $__internal_6831eb58da77da9ffefe7291db508ae2b4cef58c25c04860ffd7537838db6373->leave($__internal_6831eb58da77da9ffefe7291db508ae2b4cef58c25c04860ffd7537838db6373_prof);

    }

    public function getTemplateName()
    {
        return "pages/default/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  45 => 9,  40 => 6,  34 => 5,  11 => 3,);
    }
}
/* {# template : Le nom de mon template #}*/
/* {# description : La description sur une ligne de mon template #}*/
/* {% extends 'base.html.twig' %}*/
/* */
/* {% block body %}*/
/* */
/*     <h1>Hello World 2</h1>*/
/* */
/*     {{ render(controller( 'AppBundle:Default:modules',   { 'name': 'module-test' } )) }}*/
/* */
/* {% endblock %}*/
/* */
/* */
