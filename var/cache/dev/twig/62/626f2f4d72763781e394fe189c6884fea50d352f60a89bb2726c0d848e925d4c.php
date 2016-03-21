<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_5f437260c134d26c7876558809b81df9d4a09547b077e5901c3df27b71156977 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_657fb7fa72deabf0800c2c4177ba2bd45eb25679f0328dcaa1525b8d627e48da = $this->env->getExtension("native_profiler");
        $__internal_657fb7fa72deabf0800c2c4177ba2bd45eb25679f0328dcaa1525b8d627e48da->enter($__internal_657fb7fa72deabf0800c2c4177ba2bd45eb25679f0328dcaa1525b8d627e48da_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_657fb7fa72deabf0800c2c4177ba2bd45eb25679f0328dcaa1525b8d627e48da->leave($__internal_657fb7fa72deabf0800c2c4177ba2bd45eb25679f0328dcaa1525b8d627e48da_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_19c87a37dcb9e08a391bff9bd4133fd87ad6678784d0925273dd585b01b3ef24 = $this->env->getExtension("native_profiler");
        $__internal_19c87a37dcb9e08a391bff9bd4133fd87ad6678784d0925273dd585b01b3ef24->enter($__internal_19c87a37dcb9e08a391bff9bd4133fd87ad6678784d0925273dd585b01b3ef24_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_19c87a37dcb9e08a391bff9bd4133fd87ad6678784d0925273dd585b01b3ef24->leave($__internal_19c87a37dcb9e08a391bff9bd4133fd87ad6678784d0925273dd585b01b3ef24_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_82635677371eb985f87ffad9b5c0ee478d3c5906043a5ae68a6fadca615e1367 = $this->env->getExtension("native_profiler");
        $__internal_82635677371eb985f87ffad9b5c0ee478d3c5906043a5ae68a6fadca615e1367->enter($__internal_82635677371eb985f87ffad9b5c0ee478d3c5906043a5ae68a6fadca615e1367_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_82635677371eb985f87ffad9b5c0ee478d3c5906043a5ae68a6fadca615e1367->leave($__internal_82635677371eb985f87ffad9b5c0ee478d3c5906043a5ae68a6fadca615e1367_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_bc0ec331c4f3f34b6a916d5955c747e7d48066f8d46fec06cdfd1ed9b2308449 = $this->env->getExtension("native_profiler");
        $__internal_bc0ec331c4f3f34b6a916d5955c747e7d48066f8d46fec06cdfd1ed9b2308449->enter($__internal_bc0ec331c4f3f34b6a916d5955c747e7d48066f8d46fec06cdfd1ed9b2308449_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_router", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_bc0ec331c4f3f34b6a916d5955c747e7d48066f8d46fec06cdfd1ed9b2308449->leave($__internal_bc0ec331c4f3f34b6a916d5955c747e7d48066f8d46fec06cdfd1ed9b2308449_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 13,  67 => 12,  56 => 7,  53 => 6,  47 => 5,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@WebProfiler/Profiler/layout.html.twig' %}*/
/* */
/* {% block toolbar %}{% endblock %}*/
/* */
/* {% block menu %}*/
/* <span class="label">*/
/*     <span class="icon">{{ include('@WebProfiler/Icon/router.svg') }}</span>*/
/*     <strong>Routing</strong>*/
/* </span>*/
/* {% endblock %}*/
/* */
/* {% block panel %}*/
/*     {{ render(path('_profiler_router', { token: token })) }}*/
/* {% endblock %}*/
/* */
