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

		// create if not exist
		$commands[] = "mkdir -p $shared $tag";

		// copy directories shared and link in tag
		$commands[] = "cp -r $src/assets/img $shared/ && ln -s $src/img $tag/img";
		$commands[] = "cp -r $src/assets/plugins $shared/ && ln -s $src/plugins $tag/plugins";
		$commands[] = "cp -r $src/assets/video $shared/ && ln -s $src/video $tag/video";
		$commands[] = "cp -r $src/images $shared/ && ln -s $src/images $tag/images";
		$commands[] = "cp -r $src/fonts $shared/ && ln -s $src/fonts $tag/fonts";

		// copy directories tag
		$commands[] = "cp -r $src/assets/ajax $tag/";
		$commands[] = "mkdir -p $tag/css/private";
		$commands[] = "mkdir -p $tag/js/private";
		$commands[] = "cp -r $src/assets/css $tag";
		$commands[] = "cp -r $src/js $tag/css/private";
		$commands[] = "cp -r $src/assets/js $tag";
		$commands[] = "cp -r $src/js $tag/js/private";

		$commands[] = "sudo chmod -R 775 .";

		// Execute commands
		foreach ($commands as $command) {
			// And run
			if (!$this->runCommandRemote($command)) return false;
		}
		return true;
	}
}
