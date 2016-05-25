<?php
/**
 * Created by Olivier Lombard
 * @author olombard
 * Date: 16/04/15
 */

namespace Task;

use Mage\Task\AbstractTask;


class DeleteCache extends AbstractTask
{
    public function getName()
    {
        return 'Clear symfony cache';
    }

    public function run()
    {
        $this->runCommandRemote('sudo php bin/console clear:cache');
        $this->runCommandRemote('sudo php bin/console --env=prod clear:cache');
        $this->runCommandRemote('chmod -R 777 ../../shared/var/cache/');
        return true;
    }
}
