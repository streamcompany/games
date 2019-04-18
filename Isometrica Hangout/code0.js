gdjs.MyGameCode = {};
gdjs.MyGameCode.GDMindaObjects1= [];
gdjs.MyGameCode.GDMindaObjects2= [];
gdjs.MyGameCode.GDMindaObjects3= [];
gdjs.MyGameCode.GDTilebgObjects1= [];
gdjs.MyGameCode.GDTilebgObjects2= [];
gdjs.MyGameCode.GDTilebgObjects3= [];
gdjs.MyGameCode.GDAvatarObjects1= [];
gdjs.MyGameCode.GDAvatarObjects2= [];
gdjs.MyGameCode.GDAvatarObjects3= [];
gdjs.MyGameCode.GDObstacleObjects1= [];
gdjs.MyGameCode.GDObstacleObjects2= [];
gdjs.MyGameCode.GDObstacleObjects3= [];
gdjs.MyGameCode.GDNewObjectObjects1= [];
gdjs.MyGameCode.GDNewObjectObjects2= [];
gdjs.MyGameCode.GDNewObjectObjects3= [];
gdjs.MyGameCode.GDsteponObjects1= [];
gdjs.MyGameCode.GDsteponObjects2= [];
gdjs.MyGameCode.GDsteponObjects3= [];

gdjs.MyGameCode.conditionTrue_0 = {val:false};
gdjs.MyGameCode.condition0IsTrue_0 = {val:false};
gdjs.MyGameCode.condition1IsTrue_0 = {val:false};


gdjs.MyGameCode.eventsList0x693058 = function(runtimeScene) {

{

gdjs.MyGameCode.GDMindaObjects2.createFrom(runtimeScene.getObjects("Minda"));

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{

gdjs.MyGameCode.GDMindaObjects2.createFrom(runtimeScene.getObjects("Minda"));

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.MyGameCode.GDMindaObjects2.createFrom(runtimeScene.getObjects("Minda"));

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getY() < gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 5 ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.MyGameCode.GDMindaObjects2.createFrom(runtimeScene.getObjects("Minda"));

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getY() > gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) + 5 ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


{
}

}


}; //End of gdjs.MyGameCode.eventsList0x693058
gdjs.MyGameCode.eventsList0x692ac8 = function(runtimeScene) {

{



}


{

gdjs.MyGameCode.GDMindaObjects2.createFrom(runtimeScene.getObjects("Minda"));

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].setAnimation(1 + Math.round((gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").getAngle()) / 45));
}
}}

}


{

gdjs.MyGameCode.GDMindaObjects2.createFrom(runtimeScene.getObjects("Minda"));

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( !(gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MyGameCode.eventsList0x693058(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MyGameCode.eventsList0x692ac8
gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.MyGameCode.GDObstacleObjects1});gdjs.MyGameCode.eventsList0x693b40 = function(runtimeScene) {

{


gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
gdjs.MyGameCode.GDObstacleObjects2.createFrom(runtimeScene.getObjects("Obstacle"));
{for(var i = 0, len = gdjs.MyGameCode.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDObstacleObjects2[i].hide();
}
}}

}


{



}


{


{
gdjs.MyGameCode.GDMindaObjects1.createFrom(runtimeScene.getObjects("Minda"));
gdjs.MyGameCode.GDObstacleObjects1.createFrom(runtimeScene.getObjects("Obstacle"));
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects1[i].separateFromObjectsList(gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDObstacleObjects1Objects, false);
}
}}

}


}; //End of gdjs.MyGameCode.eventsList0x693b40
gdjs.MyGameCode.eventsList0x68af78 = function(runtimeScene) {

{


{
gdjs.MyGameCode.GDMindaObjects1.createFrom(runtimeScene.getObjects("Minda"));
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.MyGameCode.GDMindaObjects1.length !== 0 ? gdjs.MyGameCode.GDMindaObjects1[0] : null), 0, 0, 1920, 1080, true, "", 0);
}}

}


}; //End of gdjs.MyGameCode.eventsList0x68af78
gdjs.MyGameCode.eventsList0x690db8 = function(runtimeScene) {

}; //End of gdjs.MyGameCode.eventsList0x690db8
gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects = Hashtable.newFrom({"Minda": gdjs.MyGameCode.GDMindaObjects1});gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDsteponObjects1Objects = Hashtable.newFrom({"stepon": gdjs.MyGameCode.GDsteponObjects1});gdjs.MyGameCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.MyGameCode.eventsList0x692ac8(runtimeScene);
}


{


gdjs.MyGameCode.eventsList0x693b40(runtimeScene);
}


{


gdjs.MyGameCode.eventsList0x68af78(runtimeScene);
}


{


gdjs.MyGameCode.eventsList0x690db8(runtimeScene);
}


{

gdjs.MyGameCode.GDMindaObjects1.createFrom(runtimeScene.getObjects("Minda"));
gdjs.MyGameCode.GDsteponObjects1.createFrom(runtimeScene.getObjects("stepon"));

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects, gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDsteponObjects1Objects, false, runtimeScene, true);
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("http://streamsearch.cf/", runtimeScene);
}}

}


}; //End of gdjs.MyGameCode.eventsList0xb25a8


gdjs.MyGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MyGameCode.GDMindaObjects1.length = 0;
gdjs.MyGameCode.GDMindaObjects2.length = 0;
gdjs.MyGameCode.GDMindaObjects3.length = 0;
gdjs.MyGameCode.GDTilebgObjects1.length = 0;
gdjs.MyGameCode.GDTilebgObjects2.length = 0;
gdjs.MyGameCode.GDTilebgObjects3.length = 0;
gdjs.MyGameCode.GDAvatarObjects1.length = 0;
gdjs.MyGameCode.GDAvatarObjects2.length = 0;
gdjs.MyGameCode.GDAvatarObjects3.length = 0;
gdjs.MyGameCode.GDObstacleObjects1.length = 0;
gdjs.MyGameCode.GDObstacleObjects2.length = 0;
gdjs.MyGameCode.GDObstacleObjects3.length = 0;
gdjs.MyGameCode.GDNewObjectObjects1.length = 0;
gdjs.MyGameCode.GDNewObjectObjects2.length = 0;
gdjs.MyGameCode.GDNewObjectObjects3.length = 0;
gdjs.MyGameCode.GDsteponObjects1.length = 0;
gdjs.MyGameCode.GDsteponObjects2.length = 0;
gdjs.MyGameCode.GDsteponObjects3.length = 0;

gdjs.MyGameCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['MyGameCode'] = gdjs.MyGameCode;
