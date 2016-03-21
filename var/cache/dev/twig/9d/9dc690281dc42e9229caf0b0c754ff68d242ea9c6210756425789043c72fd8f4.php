<?php

/* modules/module-test.html.twig */
class __TwigTemplate_ef7eb7f4ed9ee17f86ffbeeaa799dbb817b230c3dc1b6a44e02be4a5f3665565 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_b83f665599fbea0b691f2794e78299d5a2de233b1be3cff48bb8509780db1251 = $this->env->getExtension("native_profiler");
        $__internal_b83f665599fbea0b691f2794e78299d5a2de233b1be3cff48bb8509780db1251->enter($__internal_b83f665599fbea0b691f2794e78299d5a2de233b1be3cff48bb8509780db1251_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "modules/module-test.html.twig"));

        // line 1
        echo "<h2>Mon module</h2>
<p>";
        // line 2
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : $this->getContext($context, "content")), "title", array()), "html", null, true);
        echo "</p>
<p>";
        // line 3
        echo $this->getAttribute((isset($context["content"]) ? $context["content"] : $this->getContext($context, "content")), "text", array());
        echo "</p>

<ul>
    ";
        // line 6
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["content"]) ? $context["content"] : $this->getContext($context, "content")), "textes", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 7
            echo "        <li>";
            echo twig_escape_filter($this->env, $context["item"], "html", null, true);
            echo "</li>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 9
        echo "</ul>

";
        
        $__internal_b83f665599fbea0b691f2794e78299d5a2de233b1be3cff48bb8509780db1251->leave($__internal_b83f665599fbea0b691f2794e78299d5a2de233b1be3cff48bb8509780db1251_prof);

    }

    public function getTemplateName()
    {
        return "modules/module-test.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  48 => 9,  39 => 7,  35 => 6,  29 => 3,  25 => 2,  22 => 1,);
    }
}
/* <h2>Mon module</h2>*/
/* <p>{{content.title}}</p>*/
/* <p>{{content.text | raw }}</p>*/
/* */
/* <ul>*/
/*     {% for item in content.textes %}*/
/*         <li>{{ item }}</li>*/
/*     {% endfor %}*/
/* </ul>*/
/* */
/* */
