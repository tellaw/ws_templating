<?php
/**
 * Created by Olivier Lombard
 * @author olombard
 * Date: 16/04/15
 */

namespace Task;

use Mage\Task\AbstractTask;


class ComposerInstall extends AbstractTask
{
    public function getName()
    {
        return 'Clear symfony cache';
    }

    public function run()
    {
        $this->runCommandRemote('sudo php bin/console clear:cache');
        $this->runCommandRemote('sudo php bin/console --env=prod clear:cache');
        return true;
    }
}
