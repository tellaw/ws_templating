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

		$new_tag = getenv("CDN_TAG");
		$tmpl_dir = "/data/apps/lucy/ti";
		$src = $tmpl_dir."/app/current/web";
		$tag = $tmpl_dir."/".$new_tag;

		if (empty($tag)) {
			echo "Environment variable 'CDN_TAG' is empty";
			return false;
		}

		// if new tag is preprod delete all other
		if (stristr($new_tag, "preprod"))
			$commands[] = "rm -rf $tmpl_dir/cdn.preprod*";

		// create Htaccess no index
		$commands[] = 'touch .htaccess && echo "Options -Indexes" > .htaccess';

		// create if not exist
		$commands[] = "mkdir -p $tag/ && cp .htaccess $tag/";

		// copy directories shared and link in tag
		$commands[] = "cp -r $src/assets $tag/";
		$commands[] = "cp -r $src/css $tag/";
		$commands[] = "cp -r $src/fonts $tag/";
		$commands[] = "cp -r $src/images $tag/";
		$commands[] = "cp -r $src/js $tag/";	

		$commands[] = "rm $tmpl_dir/latest 2>/dev/null && ln -s $tag $tmpl_dir/latest";
		$commands[] = "sudo chmod -R 775 $tmpl_dir/";

		// Execute commands
		foreach ($commands as $command) {
			echo "Command >> ".$command;
			if (!$this->runCommandRemote($command)) return false;
		}
		return true;
	}
}
