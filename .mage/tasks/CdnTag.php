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
		$tag = getenv("CDN_TAG");
		return "Create CDN $tag Directory tree.";
	}

	public function run()
	{

		$tmpl_dir = "/data/apps/eti_cdn/lucy/ti";
		$src = $tmpl_dir."/app/current/web";
		$shared = $tmpl_dir."/shared";
		$tag = $tmpl_dir."/".getenv("CDN_TAG");

		if (empty($tag)) {
			echo "Environment variable 'CDN_TAG' is empty";
			return false;
		}

		// create Htaccess no index
		$commands[] = 'touch .htaccess && echo "Options -Indexes" > .htaccess';

		// create if not exist
		$commands[] = "mkdir -p $shared $tag && cp .htaccess $tag && cp .htaccess $shared";

		// copy directories shared and link in tag
		$commands[] = "cp -r $src/assets/* $shared/ && ln -s $src/assets $tag/assets && cp .htaccess $tag/assets";
		$commands[] = "cp -r $src/css $tag";
		$commands[] = "cp -r $src/fonts $tag";
		$commands[] = "cp -r $src/images $tag";

		$commands[] = "ln -s $tag $tmpl_dir/latest";
		$commands[] = "sudo chmod -R 775 $tmpl_dir";

		// Execute commands
		foreach ($commands as $command) {
			// And run
			if (!$this->runCommandRemote($command)) return false;
		}
		return true;
	}
}
