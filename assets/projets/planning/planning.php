<?php include ("../init/init.php");
include ("./common/funcs.inc.php");

if (strpos ($_SERVER ['SCRIPT_NAME'], "-test") ==! false) $cmgTest = true; else $cmgTest = false;

if (!AO_isUserLogged ()) {header("Location: " . $glob_pathHome . "dispo/connexion" . ($cmgTest ? "-test" : ""));exit ();}

/* if (!$cmgTest) */ logstat ($glob_StatEvent ['AO_Planning'], $_SESSION ['ao_UserId']);



include ($glob_pathPHP . "header.inc.php");

if ($cmgTest)
	echo '
		<div style="pointer-events:none;position:absolute;z-index:50;background:red;color:white;font-size:200pt;text-align:center;vertical-align:middle;opacity:0.2;transform:rotate(-30deg);-webkit-transform: rotate(-30deg);-moz-transform: rotate(-30deg);-ms-transform: rotate(-30deg);-o-transform: rotate(-30deg);">TEST</div>
	';

?>

<style>
	.planning td {width:20%;border-right:1px solid #9e50c3; cursor:pointer;}
	.planning td:hover {background-color:#efe7f3;}
	.planning tr:first-child td {border:none;font-size:10pt;height:10px;}
	.planning tr:nth-child(2), tr:nth-child(4) {height:40%;}
	.planning tr:nth-child(3) {height:20%;}
	.planning tr:nth-child(3) td,tr:nth-child(2) td {border-bottom:1px solid #d6d7e1;}
	.planning td:last-child {border-right:none;}
	
	.shadowSlot,.slot {position:absolute; border-radius:4px; width:20px;}
	.slot {background-color:#9e50c3;}
	.shadowSlot {background-color:#cc9be2;pointer-events:none;}
</style>

<div id="main_nobar">

	<?php include ("./common/userlog.inc.php"); ?>
		
	<div class="container">
	
		<?php include ($glob_pathPHP . "banner_pro.inc.php"); ?>
		
		<?php include ("./common/menu_pro.inc.php"); ?>
		
	</div>
		
		<div class="center">
			
			<table style="margin:auto;"><tr>
			<td><img id="in_PrevMonth" class="arrow-btn" <?php echo imageSrc ("menu_prev"); ?>></td>
			<td style="color:#a0a0a0;padding:10px;">Planning<br><span class="txt-color4" id="txt_Week">du 12 au 16/11/2018</span></td>
			<td><img id="in_NextMonth" class="arrow-btn" <?php echo imageSrc ("menu_next"); ?>></td>
			</tr></table>
			
			<div id="planning" style="position:relative;padding:10px;">
			
				<table class="planning" style="width:100%;height:100%;">
				<tr class="txt-color4">
					<td><span class="ifwide">Lundi</span><span class="ifnarrow">LUN</span></td>
					<td><span class="ifwide">Mardi</span><span class="ifnarrow">MAR</span></td>
					<td><span class="ifwide">Mercredi</span><span class="ifnarrow">MER</span></td>
					<td><span class="ifwide">Jeudi</span><span class="ifnarrow">JEU</span></td>
					<td><span class="ifwide">Vendredi</span><span class="ifnarrow">VEN</span></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				</table>
				
				<div class="slot" style="height:300px;top:10px;left:10px;"></div>
				
			</div>
			
		</div>

</div>


<?php include ($glob_pathPHP . "bottom.inc.php"); ?>

<script src="<?php echo $glob_pathJS; ?>common.js"></script><script>

var currentX = 30;
var newShadowSlot;

console.log (document.styleSheets);

var els=_("planning").querySelectorAll("td");
for(var i=0; i<els.length; i++) {
	addEvent (els[i], "mouseenter", function(event) {cellMouseEnter(event);});
	addEvent (els[i], "mouseleave", function(event) {cellMouseLeave(event);});
	addEvent (els[i], "click", function(event) {cellClick(event);});
}
	
function cellMouseEnter (event) {

	if (!newShadowSlot) {
		newShadowSlot = document.createElement ("div");
		newShadowSlot.className = "shadowSlot";
	}
	newShadowSlot.style.top = (event.target.offsetTop + 10) + "px";
	newShadowSlot.style.left = (event.target.offsetLeft + 20) + "px";
	newShadowSlot.style.height = event.target.offsetHeight + "px";
	//addEvent (newShadowSlot, "dragenter", function(event) {dragEnter(event);});
	_("planning").appendChild(newShadowSlot);
}

function cellMouseLeave (event) {
	if (newShadowSlot) _("planning").removeChild(newShadowSlot);
}

function cellClick (event) {
	if (newShadowSlot) {
		newShadowSlot.className = "slot";
		newShadowSlot = null;
	}
}

</script>

</body>
</html>
