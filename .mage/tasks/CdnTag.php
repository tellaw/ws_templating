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
		$commands[] = "cp -r $src/assets/img $shared/ && ln -s $src/assets/img $tag/img && cp .htaccess $tag/img";
		$commands[] = "cp -r $src/assets/plugins $shared/ && ln -s $src/assets/plugins $tag/plugins && cp .htaccess $tag/plugins";
		$commands[] = "cp -r $src/assets/video $shared/ && ln -s $src/assets/video $tag/video && cp .htaccess $tag/video";
		$commands[] = "cp -r $src/images $shared/ && ln -s $src/images $tag/images && cp .htaccess $tag/images";
		$commands[] = "cp -r $src/fonts $shared/ && ln -s $src/fonts $tag/fonts && cp .htaccess $tag/fonts";

		// copy directories tag
		$commands[] = "mkdir -p $tag/css/private";
		$commands[] = "mkdir -p $tag/js/private";
		$commands[] = "cp -r $src/assets/ajax $tag/ && cp .htaccess $tag/ajax";
		$commands[] = "cp -r $src/assets/css $tag && cp .htaccess $tag/css";
		$commands[] = "cp -r $src/css/* $tag/css/private && cp .htaccess $tag/css/private";
		$commands[] = "cp -r $src/assets/js $tag && cp .htaccess $tag/js";
//		$commands[] = "cp -r $src/js/* $tag/js/private";

		$commands[] = "cp -r $tag/* $tmpl_dir/latest";
		$commands[] = "sudo chmod -R 775 $tmpl_dir";

		// Execute commands
		foreach ($commands as $command) {
			// And run
			if (!$this->runCommandRemote($command)) return false;
		}
		return true;
	}
}
