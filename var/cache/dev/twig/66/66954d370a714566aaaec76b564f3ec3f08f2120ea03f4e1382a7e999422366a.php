<?php

/* base.html.twig */
class __TwigTemplate_917db810815be3cb1ee6931ec4141cfe63d75a629d3e7eb879f16ce1490d0f6f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_ed645d6f16aecf9f562e5518bed55034fb0fa515b68ae9fdb4a1d49e3c30630f = $this->env->getExtension("native_profiler");
        $__internal_ed645d6f16aecf9f562e5518bed55034fb0fa515b68ae9fdb4a1d49e3c30630f->enter($__internal_ed645d6f16aecf9f562e5518bed55034fb0fa515b68ae9fdb4a1d49e3c30630f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\" />
        <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        ";
        // line 6
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 7
        echo "        <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
    </head>
    <body>
        ";
        // line 10
        $this->displayBlock('body', $context, $blocks);
        // line 11
        echo "        ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 12
        echo "    </body>
</html>
";
        
        $__internal_ed645d6f16aecf9f562e5518bed55034fb0fa515b68ae9fdb4a1d49e3c30630f->leave($__internal_ed645d6f16aecf9f562e5518bed55034fb0fa515b68ae9fdb4a1d49e3c30630f_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_e9b2c94bace69b8a08918a98147281b566029214bd1f4ee9c6a2abd22235b38b = $this->env->getExtension("native_profiler");
        $__internal_e9b2c94bace69b8a08918a98147281b566029214bd1f4ee9c6a2abd22235b38b->enter($__internal_e9b2c94bace69b8a08918a98147281b566029214bd1f4ee9c6a2abd22235b38b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Welcome!";
        
        $__internal_e9b2c94bace69b8a08918a98147281b566029214bd1f4ee9c6a2abd22235b38b->leave($__internal_e9b2c94bace69b8a08918a98147281b566029214bd1f4ee9c6a2abd22235b38b_prof);

    }

    // line 6
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_5d66890d29607ead7d95bb0dfab420f44c26b32fd89e4f13bf21aafdaeffa1fb = $this->env->getExtension("native_profiler");
        $__internal_5d66890d29607ead7d95bb0dfab420f44c26b32fd89e4f13bf21aafdaeffa1fb->enter($__internal_5d66890d29607ead7d95bb0dfab420f44c26b32fd89e4f13bf21aafdaeffa1fb_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_5d66890d29607ead7d95bb0dfab420f44c26b32fd89e4f13bf21aafdaeffa1fb->leave($__internal_5d66890d29607ead7d95bb0dfab420f44c26b32fd89e4f13bf21aafdaeffa1fb_prof);

    }

    // line 10
    public function block_body($context, array $blocks = array())
    {
        $__internal_30d5775b037883af3a6366bf14fd538fcefbbb8170d6568ca90e10eb976f492d = $this->env->getExtension("native_profiler");
        $__internal_30d5775b037883af3a6366bf14fd538fcefbbb8170d6568ca90e10eb976f492d->enter($__internal_30d5775b037883af3a6366bf14fd538fcefbbb8170d6568ca90e10eb976f492d_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_30d5775b037883af3a6366bf14fd538fcefbbb8170d6568ca90e10eb976f492d->leave($__internal_30d5775b037883af3a6366bf14fd538fcefbbb8170d6568ca90e10eb976f492d_prof);

    }

    // line 11
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_a16802944337af04b72050e7a6d231d8a83eab5a0964edb90351b4d2d47eac8c = $this->env->getExtension("native_profiler");
        $__internal_a16802944337af04b72050e7a6d231d8a83eab5a0964edb90351b4d2d47eac8c->enter($__internal_a16802944337af04b72050e7a6d231d8a83eab5a0964edb90351b4d2d47eac8c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_a16802944337af04b72050e7a6d231d8a83eab5a0964edb90351b4d2d47eac8c->leave($__internal_a16802944337af04b72050e7a6d231d8a83eab5a0964edb90351b4d2d47eac8c_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  93 => 11,  82 => 10,  71 => 6,  59 => 5,  50 => 12,  47 => 11,  45 => 10,  38 => 7,  36 => 6,  32 => 5,  26 => 1,);
    }
}
/* <!DOCTYPE html>*/
/* <html>*/
/*     <head>*/
/*         <meta charset="UTF-8" />*/
/*         <title>{% block title %}Welcome!{% endblock %}</title>*/
/*         {% block stylesheets %}{% endblock %}*/
/*         <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />*/
/*     </head>*/
/*     <body>*/
/*         {% block body %}{% endblock %}*/
/*         {% block javascripts %}{% endblock %}*/
/*     </body>*/
/* </html>*/
/* */
