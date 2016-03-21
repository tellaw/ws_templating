<?php

/* @WebProfiler/Collector/exception.html.twig */
class __TwigTemplate_3fe17a54fa4e56c02cba59f84e02e1c2e5c22e6f40cb79fe9d444dd233a62ed3 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/exception.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
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
        $__internal_8d470900fb4c9f18b78656d8c66648bea583742c01da737fbdc0072dd854b2f7 = $this->env->getExtension("native_profiler");
        $__internal_8d470900fb4c9f18b78656d8c66648bea583742c01da737fbdc0072dd854b2f7->enter($__internal_8d470900fb4c9f18b78656d8c66648bea583742c01da737fbdc0072dd854b2f7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_8d470900fb4c9f18b78656d8c66648bea583742c01da737fbdc0072dd854b2f7->leave($__internal_8d470900fb4c9f18b78656d8c66648bea583742c01da737fbdc0072dd854b2f7_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_a8095eeed0fd3bca3e9bc8910506a135951141f4a55b33db82382727d02464a6 = $this->env->getExtension("native_profiler");
        $__internal_a8095eeed0fd3bca3e9bc8910506a135951141f4a55b33db82382727d02464a6->enter($__internal_a8095eeed0fd3bca3e9bc8910506a135951141f4a55b33db82382727d02464a6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    ";
        if ($this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "hasexception", array())) {
            // line 5
            echo "        <style>
            ";
            // line 6
            echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_exception_css", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
            echo "
        </style>
    ";
        }
        // line 9
        echo "    ";
        $this->displayParentBlock("head", $context, $blocks);
        echo "
";
        
        $__internal_a8095eeed0fd3bca3e9bc8910506a135951141f4a55b33db82382727d02464a6->leave($__internal_a8095eeed0fd3bca3e9bc8910506a135951141f4a55b33db82382727d02464a6_prof);

    }

    // line 12
    public function block_menu($context, array $blocks = array())
    {
        $__internal_10008cd90c291a66c14012b04c992778a87487aec6eebdcb436d921d4c2c0863 = $this->env->getExtension("native_profiler");
        $__internal_10008cd90c291a66c14012b04c992778a87487aec6eebdcb436d921d4c2c0863->enter($__internal_10008cd90c291a66c14012b04c992778a87487aec6eebdcb436d921d4c2c0863_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 13
        echo "    <span class=\"label ";
        echo (($this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "hasexception", array())) ? ("label-status-error") : ("disabled"));
        echo "\">
        <span class=\"icon\">";
        // line 14
        echo twig_include($this->env, $context, "@WebProfiler/Icon/exception.svg");
        echo "</span>
        <strong>Exception</strong>
        ";
        // line 16
        if ($this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "hasexception", array())) {
            // line 17
            echo "            <span class=\"count\">
                <span>1</span>
            </span>
        ";
        }
        // line 21
        echo "    </span>
";
        
        $__internal_10008cd90c291a66c14012b04c992778a87487aec6eebdcb436d921d4c2c0863->leave($__internal_10008cd90c291a66c14012b04c992778a87487aec6eebdcb436d921d4c2c0863_prof);

    }

    // line 24
    public function block_panel($context, array $blocks = array())
    {
        $__internal_213af4b2ed7e25c2ffb5b96b8f401e3b3b7eb5359cd40083ec610d2d8a12f5fa = $this->env->getExtension("native_profiler");
        $__internal_213af4b2ed7e25c2ffb5b96b8f401e3b3b7eb5359cd40083ec610d2d8a12f5fa->enter($__internal_213af4b2ed7e25c2ffb5b96b8f401e3b3b7eb5359cd40083ec610d2d8a12f5fa_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 25
        echo "    <h2>Exceptions</h2>

    ";
        // line 27
        if ( !$this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "hasexception", array())) {
            // line 28
            echo "        <div class=\"empty\">
            <p>No exception was thrown and caught during the request.</p>
        </div>
    ";
        } else {
            // line 32
            echo "        <div class=\"sf-reset\">
            ";
            // line 33
            echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_exception", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
            echo "
        </div>
    ";
        }
        
        $__internal_213af4b2ed7e25c2ffb5b96b8f401e3b3b7eb5359cd40083ec610d2d8a12f5fa->leave($__internal_213af4b2ed7e25c2ffb5b96b8f401e3b3b7eb5359cd40083ec610d2d8a12f5fa_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/exception.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  117 => 33,  114 => 32,  108 => 28,  106 => 27,  102 => 25,  96 => 24,  88 => 21,  82 => 17,  80 => 16,  75 => 14,  70 => 13,  64 => 12,  54 => 9,  48 => 6,  45 => 5,  42 => 4,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@WebProfiler/Profiler/layout.html.twig' %}*/
/* */
/* {% block head %}*/
/*     {% if collector.hasexception %}*/
/*         <style>*/
/*             {{ render(path('_profiler_exception_css', { token: token })) }}*/
/*         </style>*/
/*     {% endif %}*/
/*     {{ parent() }}*/
/* {% endblock %}*/
/* */
/* {% block menu %}*/
/*     <span class="label {{ collector.hasexception ? 'label-status-error' : 'disabled' }}">*/
/*         <span class="icon">{{ include('@WebProfiler/Icon/exception.svg') }}</span>*/
/*         <strong>Exception</strong>*/
/*         {% if collector.hasexception %}*/
/*             <span class="count">*/
/*                 <span>1</span>*/
/*             </span>*/
/*         {% endif %}*/
/*     </span>*/
/* {% endblock %}*/
/* */
/* {% block panel %}*/
/*     <h2>Exceptions</h2>*/
/* */
/*     {% if not collector.hasexception %}*/
/*         <div class="empty">*/
/*             <p>No exception was thrown and caught during the request.</p>*/
/*         </div>*/
/*     {% else %}*/
/*         <div class="sf-reset">*/
/*             {{ render(path('_profiler_exception', { token: token })) }}*/
/*         </div>*/
/*     {% endif %}*/
/* {% endblock %}*/
/* */
