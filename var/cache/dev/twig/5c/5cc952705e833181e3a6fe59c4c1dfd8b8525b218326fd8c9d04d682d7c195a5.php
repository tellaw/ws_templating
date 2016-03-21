<?php

/* default/index.html.twig */
class __TwigTemplate_0cda3a782a6dcd3d08bda68e99cd63516041809e6a0ec74b3a80dd6a7dba7563 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 3
        $this->parent = $this->loadTemplate("base.html.twig", "default/index.html.twig", 3);
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
        $__internal_111c26a4e9ebff86914357620593bae1afa0812edd9abdb58c0447992fe8e5e4 = $this->env->getExtension("native_profiler");
        $__internal_111c26a4e9ebff86914357620593bae1afa0812edd9abdb58c0447992fe8e5e4->enter($__internal_111c26a4e9ebff86914357620593bae1afa0812edd9abdb58c0447992fe8e5e4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "default/index.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_111c26a4e9ebff86914357620593bae1afa0812edd9abdb58c0447992fe8e5e4->leave($__internal_111c26a4e9ebff86914357620593bae1afa0812edd9abdb58c0447992fe8e5e4_prof);

    }

    // line 5
    public function block_body($context, array $blocks = array())
    {
        $__internal_fc792941ad1f714ad96552f7e2d0e0223d5407736fd5bba1ba462f6424ddb174 = $this->env->getExtension("native_profiler");
        $__internal_fc792941ad1f714ad96552f7e2d0e0223d5407736fd5bba1ba462f6424ddb174->enter($__internal_fc792941ad1f714ad96552f7e2d0e0223d5407736fd5bba1ba462f6424ddb174_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "
    <h1>Hello World 2</h1>

    ";
        // line 9
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('http_kernel')->controller("AppBundle:Default:modules", array("name" => "module-test")));
        echo "

";
        
        $__internal_fc792941ad1f714ad96552f7e2d0e0223d5407736fd5bba1ba462f6424ddb174->leave($__internal_fc792941ad1f714ad96552f7e2d0e0223d5407736fd5bba1ba462f6424ddb174_prof);

    }

    public function getTemplateName()
    {
        return "default/index.html.twig";
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
