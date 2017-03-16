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
        $this->runCommandRemote('rm -rf ../../shared/var/cache/dev/*');
        $this->runCommandRemote('rm -rf ../../shared/var/cache/prod/*');
        $this->runCommandRemote('chmod -R 777 ../../shared/var/cache/*');
        return true;
    }
}
