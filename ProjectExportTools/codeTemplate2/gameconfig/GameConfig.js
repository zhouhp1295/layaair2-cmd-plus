﻿/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
{!importStr!}

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
{!regStr!}
    }
}
GameConfig.width = {!designWidth!};
GameConfig.height = {!designHeight!};
GameConfig.scaleMode ="{!scaleMode!}";
GameConfig.screenMode = "{!screenMode!}";
GameConfig.alignV = "{!alignV!}";
GameConfig.alignH = "{!alignH!}";
GameConfig.startScene = "{!startScene!}";
GameConfig.sceneRoot = "{!sceneRoot!}";
GameConfig.debug = {!debug!};
GameConfig.stat = {!stat!};
GameConfig.physicsDebug = {!physicsDebug!};
GameConfig.exportSceneToJson = {!exportSceneToJson!};

GameConfig.init();