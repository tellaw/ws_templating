<?php
/**
 * Created by Olivier Lombard
 * @author olombard
 * Date: 03/02/15
 */

namespace Task;

use Mage\Task\AbstractTask;

class CdnTag extends AbstractTask
{
	public function getName()
	{
		return 'Create CDN Tag Directory tree.';
	}

	public function run()
	{

		$commands[] = "pwd";

		foreach ($commands as $command) {
			if (!$this->runCommandRemote($command)) return false;
		}
		return true;
	}
}
