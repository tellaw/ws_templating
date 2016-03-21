<?php

/* @Twig/Exception/exception_full.html.twig */
class __TwigTemplate_af7eccee673fcdfd9cc1a55025c060662cedb1010fc7c31da4b63721aae73929 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@Twig/layout.html.twig", "@Twig/Exception/exception_full.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@Twig/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_70bd4357bdf5751e46cf3680f2f515ef05a42db184b1685a6c5a4d51b3a1207c = $this->env->getExtension("native_profiler");
        $__internal_70bd4357bdf5751e46cf3680f2f515ef05a42db184b1685a6c5a4d51b3a1207c->enter($__internal_70bd4357bdf5751e46cf3680f2f515ef05a42db184b1685a6c5a4d51b3a1207c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_70bd4357bdf5751e46cf3680f2f515ef05a42db184b1685a6c5a4d51b3a1207c->leave($__internal_70bd4357bdf5751e46cf3680f2f515ef05a42db184b1685a6c5a4d51b3a1207c_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_b37e6dcc2fdf2c3ae2428645621449ed7774e03dc3eb1469fcc5723dea046073 = $this->env->getExtension("native_profiler");
        $__internal_b37e6dcc2fdf2c3ae2428645621449ed7774e03dc3eb1469fcc5723dea046073->enter($__internal_b37e6dcc2fdf2c3ae2428645621449ed7774e03dc3eb1469fcc5723dea046073_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('request')->generateAbsoluteUrl($this->env->getExtension('asset')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_b37e6dcc2fdf2c3ae2428645621449ed7774e03dc3eb1469fcc5723dea046073->leave($__internal_b37e6dcc2fdf2c3ae2428645621449ed7774e03dc3eb1469fcc5723dea046073_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_24ee323e941e30ac1025feb68ff4f2ee1bfb1ef7e69ad6e94249836a00553b13 = $this->env->getExtension("native_profiler");
        $__internal_24ee323e941e30ac1025feb68ff4f2ee1bfb1ef7e69ad6e94249836a00553b13->enter($__internal_24ee323e941e30ac1025feb68ff4f2ee1bfb1ef7e69ad6e94249836a00553b13_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_24ee323e941e30ac1025feb68ff4f2ee1bfb1ef7e69ad6e94249836a00553b13->leave($__internal_24ee323e941e30ac1025feb68ff4f2ee1bfb1ef7e69ad6e94249836a00553b13_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_732976f36bdedde9eaa594ab0d3a8bd22b3eb46c8697013f2056a9f0625836d0 = $this->env->getExtension("native_profiler");
        $__internal_732976f36bdedde9eaa594ab0d3a8bd22b3eb46c8697013f2056a9f0625836d0->enter($__internal_732976f36bdedde9eaa594ab0d3a8bd22b3eb46c8697013f2056a9f0625836d0_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("@Twig/Exception/exception.html.twig", "@Twig/Exception/exception_full.html.twig", 12)->display($context);
        
        $__internal_732976f36bdedde9eaa594ab0d3a8bd22b3eb46c8697013f2056a9f0625836d0->leave($__internal_732976f36bdedde9eaa594ab0d3a8bd22b3eb46c8697013f2056a9f0625836d0_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/Exception/exception_full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 12,  72 => 11,  58 => 8,  52 => 7,  42 => 4,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@Twig/layout.html.twig' %}*/
/* */
/* {% block head %}*/
/*     <link href="{{ absolute_url(asset('bundles/framework/css/exception.css')) }}" rel="stylesheet" type="text/css" media="all" />*/
/* {% endblock %}*/
/* */
/* {% block title %}*/
/*     {{ exception.message }} ({{ status_code }} {{ status_text }})*/
/* {% endblock %}*/
/* */
/* {% block body %}*/
/*     {% include '@Twig/Exception/exception.html.twig' %}*/
/* {% endblock %}*/
/* */
